describe('empty spec', () => {
  beforeEach(()=>{
    // cy.intercept("GET"," http://localhost:4004/todos",{
    //   fixtures:"gettodo.json",

    // }).as("gettodos")
    cy.visit('http://localhost:3000/')
  })
  it('passes', () => {
    
   // cy.get("[data-testid=inputtag]").type("hello")
   // cy.focused().should("have.data-testid","inputtag")
    cy.focused().should("have.class","iptag").type("prat")
    cy.get("[data-testid=inputtag]").should("have.value","prat")
   cy.get("[data-testid=list]").should("have.length",0)
  })

  it("should add element to list",()=>{
    cy.intercept("POST","",{fixture:"posttodo.json"})
    .as("posttodo")
    let value="Prathyush X"
    cy.get("[data-testid=inputtag]").type(value)
    cy.get("[data-testid=addbtn]").click()
    cy.wait("@posttodo")
    cy.get("[data-testid=list]").should("have.length",1)
    cy.get("[data-testid=inditask]").eq(-1).should("contain",value)
    cy.get("[data-testid=checkbox]").eq(-1).should("not.be.checked")
  })

  it('passes', () => {
    
    // cy.get("[data-testid=inputtag]").type("hello")
    // cy.focused().should("have.data-testid","inputtag")
     cy.focused().should("have.class","iptag").type("prat")
     cy.get("[data-testid=inputtag]").should("have.value","prat")
    cy.get("[data-testid=list]").should("have.length",0)
   })
 
   it("testing for error",()=>{

    cy.intercept('POST', ' http://localhost:4004/todos', {
      statusCode: 500,
      body: {
        "id":2,"value":"Prathyush X","isCompleted":true
    },
    }).as("errorcapture")
    cy.get("[data-testid=inputtag]").type("study coding")
    cy.get("[data-testid=addbtn]").click()
    cy.wait("@errorcapture")
     cy.get("[data-testid=error]").should("be.visible")
     //cy.get("[data-testid=list]").should("have.length",1)
   })

  
   it.only("checking functionality of delete button",()=>{
    cy.get("[data-testid=deletebtn]").should("have.length",1)
    cy.get("[data-testid=deletebtn]").click()
    cy.get("[data-testid=list]").should("have.length",0)

    
   })


})