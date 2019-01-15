describe("Main page", function() {
  it("test table", function() {
    cy.server();
    cy.route("GET", "https://jsonplaceholder.typicode.com/posts", "fixture:posts");

    cy.visit("localhost:4200/table");
    cy.contains("Add 1000 rows").click();
    cy.get("table tbody tr").should("have.length", 1000);
    cy.contains("Update rows").click();
    cy.contains("Swap rows").click();
    cy.contains("Clear rows").click();
    cy.get("table tbody tr").should("have.length", 0);
  });
});
