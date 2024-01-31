declare namespace Cypress {
  interface Chainable {
    tid(name?: string): Chainable;
    init(): Chainable;
    textVisible(text?: string): Chainable;
    textExists(text?: string): Chainable;
    textNotExists(text?: string): Chainable;
    buttonClick(text?: string): Chainable;
  }
}
