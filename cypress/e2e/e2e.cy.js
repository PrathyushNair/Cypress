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
   
  })

  // it("should add element to list",()=>{
  //   cy.intercept("POST","",{fixture:"posttodo.json"})
  //   .as("posttodo")
  //   let value="Prathyush X"
  //   cy.get("[data-testid=inputtag]").type(value)
  //   cy.get("[data-testid=addbtn]").click()
  //   cy.wait("@posttodo")
  //   cy.get("[data-testid=inditask]").eq(-1).should("contain",value)
  //   cy.get("[data-testid=checkbox]").eq(-1).should("not.be.checked")
  // })
})