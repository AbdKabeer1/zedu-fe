const assertNoHorizontalOverflow = () => {
  cy.document().then((document) => {
    expect(document.documentElement.scrollWidth).to.be.at.most(
      document.documentElement.clientWidth
    );
  });
};

describe("Migrate to Zedu", () => {
  beforeEach(() => {
    cy.visit("/migrate");
  });

  it("presents a clear migration path and working conversion actions", () => {
    cy.get("h1").should(
      "contain.text",
      "Move your learning community out of scattered chats"
    );

    cy.get('a[href="/contact-sales"]')
      .contains(/book a demo/i)
      .should("be.visible");
    cy.get('a[href="/auth/sign-up"]')
      .contains(/start for free/i)
      .should("be.visible");

    cy.get('section[aria-labelledby="before-after-heading"]')
      .should("contain.text", "Before Zedu")
      .and("contain.text", "With Zedu");
    cy.get('ol[aria-label="Migration steps"] > li').should("have.length", 3);
    cy.get('section[aria-labelledby="migration-faq-heading"] details').should(
      "have.length",
      5
    );
  });

  [
    { name: "desktop", width: 1440, height: 900 },
    { name: "mobile", width: 390, height: 844 },
  ].forEach(({ name, width, height }) => {
    it(`does not overflow horizontally on ${name}`, () => {
      cy.viewport(width, height);
      assertNoHorizontalOverflow();
    });
  });
});
