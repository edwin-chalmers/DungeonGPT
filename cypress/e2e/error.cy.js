describe('Error page', () => {
  
  it('Should load error page', () => {
    cy.visit('http://localhost:3000/error')
    cy.get('div')
    .contains("h1", "Dungeon404")
    cy.get('div')
    .contains("p", "Lost amidst the tangled paths of cyberspace, you have wandered into a realm where few are meant to tread. Here, in the shadowed corridors of an error-laden wasteland, the digital winds whisper of misdirection and the broken links of a thousand lost souls.")
    cy.get('div')
    .contains("p", "This is a place untouched by the light of successful navigation, where the echo of '404' haunts the air. Fear not, brave traveler, for all is not lost. Retrace your steps and summon the magic of your browser's might.")
    cy.get('div')
    .contains("p", "Your journey awaits—let not this minor misstep deter your quest. Your saga to return home begins with a single click.")
  })
  
  it('Should naviagte home', () => {
    cy.visit('http://localhost:3000/error')
    cy.get('a')
    .contains("Begin Again").click()
    cy.url().should('eq', 'http://localhost:3000/play')
  })
  
  it('Should load error page from a bad route', () => {
    cy.visit('http://localhost:3000/potatoes')
    cy.get('div')
    .contains("p", "Lost amidst the tangled paths of cyberspace, you have wandered into a realm where few are meant to tread. Here, in the shadowed corridors of an error-laden wasteland, the digital winds whisper of misdirection and the broken links of a thousand lost souls.")
    cy.get('div')
    .contains("p", "This is a place untouched by the light of successful navigation, where the echo of '404' haunts the air. Fear not, brave traveler, for all is not lost. Retrace your steps and summon the magic of your browser's might.")
    cy.get('div')
    .contains("p", "Your journey awaits—let not this minor misstep deter your quest. Your saga to return home begins with a single click.")
  })

  it('Should return a server error', () => {
    cy.intercept('Post', 'https://api.openai.com/v1/chat/completions', {
        status: 201,
        body: {}
    }).as("gptAPI")
    cy.visit('http://localhost:3000/play')
    cy.get('textarea[placeholder=\'Type "Start" to begin\']').type("start").should("have.value", "start")
    cy.get('button').click()
    cy.get('div')
    .contains("p", "Alas, a slight enchantment has disrupted our realm. Please refresh the page or return shortly to continue your journey.")
  })

})