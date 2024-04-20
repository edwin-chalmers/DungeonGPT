describe('Main', () => {

  it('Should load error page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('div')
    .contains("h1", "DungeonGPT")
    cy.get('div')
    .contains("p", "A world where ancient magic breathes life into the very earth beneath your feet. Here, every path leads to adventure and every shadow hints at both danger and opportunity.")
    cy.get('div')
    .contains("p", "Engage in vivid encounters with foes whose tactics are as varied as the lands they defend. Prepare to weave your story into the fabric of legends, making choices that echo through the valleys and peaks of this mystical realm.")
    cy.get('div')
    .contains("p", "Whether you rise as a hero or fall as a memory, your saga begins now.")
  })

  it('Should naviagte to the game', () => {
    cy.visit('http://localhost:3000/')
    cy.get('a')
    .contains("Step Forward").click()
    cy.url().should('eq', 'http://localhost:3000/play')
  })

  it('Should check for game page elements', () => {
    cy.visit('http://localhost:3000/play')
    cy.get('h1')
    .contains("DungeonGPT")
    cy.get('.health').find('img[alt="heart container"]').should('have.length', 5)
    cy.get('textarea[placeholder=\'Type "Start" to begin\']')
  })

  it('Should start the game', () => {
    cy.intercept('Post', 'https://api.openai.com/v1/chat/completions', {
        status: 201,
        body: {
          "choices": [{
            "message": {
              "role": "assistant",
              "content": "\n\nWhat action will you take?",
            }
          }]
        }
    }).as("gptAPI")
    cy.visit('http://localhost:3000/play')
    cy.get('textarea[placeholder=\'Type "Start" to begin\']').type("start").should("have.value", "start")
    cy.get('button').click()
    cy.get('.message').eq(1)
    .contains("p", "What action will you take?")
  })

  it('Should have a conversation', () => {
    cy.intercept('Post', 'https://api.openai.com/v1/chat/completions', {
        status: 201,
        body: {
          "choices": [{
            "message": {
              "role": "assistant",
              "content": "\n\nWhat action will you take?",
            }
          }]
        }
    }).as("gptAPI")
    cy.visit('http://localhost:3000/play')
    cy.get('textarea[placeholder=\'Type "Start" to begin\']').type("start").should("have.value", "start")
    cy.get('button').click()
    cy.get('.message').eq(1)
    .contains("p", "What action will you take?")
    cy.intercept('Post', 'https://api.openai.com/v1/chat/completions', {
      status: 201,
      body: {
        "choices": [{
          "message": {
            "role": "assistant",
            "content": "\n\nSo you're choosing to continue?",
          }
        }]
      }
    }).as("gptAPI")
    cy.get('textarea').type("continue").should("have.value", "continue")
    cy.get('button').click()
    cy.get('.message').eq(3)
    .contains("p", "So you're choosing to continue?")
  })

  it('Should take damage', () => {
    cy.intercept('Post', 'https://api.openai.com/v1/chat/completions', {
        status: 201,
        body: {
          "choices": [{
            "message": {
              "role": "assistant",
              "content": "\n\nYou lose 1 health.",
            }
          }]
        }
    }).as("gptAPI")
    cy.visit('http://localhost:3000/play')
    cy.get('textarea[placeholder=\'Type "Start" to begin\']').type("%%damage").should("have.value", "%%damage")
    cy.get('button').click()
    cy.get('.message').eq(1)
    .contains("p", "You lose 1 health.")
    cy.get('.health').find('img[alt="heart container"]').should('have.length', 4)
  })

  it('Should die', () => {
    cy.intercept('Post', 'https://api.openai.com/v1/chat/completions', {
        status: 201,
        body: {
          "choices": [{
            "message": {
              "role": "assistant",
              "content": "\n\nYou lose 1 health.",
            }
          }]
        }
    }).as("gptAPI")
    cy.visit('http://localhost:3000/play')
    cy.get('textarea[placeholder=\'Type "Start" to begin\']').type("%%damage").should("have.value", "%%damage")
    cy.get('button').click()
    cy.get('textarea').type("%%damage").should("have.value", "%%damage")
    cy.get('button').click()
    cy.get('textarea').type("%%damage").should("have.value", "%%damage")
    cy.get('button').click()
    cy.get('textarea').type("%%damage").should("have.value", "%%damage")
    cy.get('button').click()
    cy.get('textarea').type("%%damage").should("have.value", "%%damage")
    cy.get('button').click()
    cy.get('.health').find('img[alt="heart container"]').should('have.length', 0)
    cy.get('.message').eq(10)
    .contains("p", "You Died")
    cy.get('button')
    .contains("New Game").click()
    cy.get('.health').find('img[alt="heart container"]').should('have.length', 5)
    cy.get('textarea[placeholder=\'Type "Start" to begin\']')
  })


})