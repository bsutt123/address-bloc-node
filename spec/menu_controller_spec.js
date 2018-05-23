const MenuController = require("../controllers/MenuController");

describe("MenuController", () => {
  describe("gets correct contract count", () => {
    let menu;
    beforeEach(() => {
      menu = new MenuController();
    })
    it("should return 0 when there are no contacts", () => {
      expect(menu.getContactCount()).toBe(0);
    })

    it("should return 1 after adding a contact", () => {
      menu.contacts.push("New Contact");
      expect(menu.getContactCount()).toBe(1);
    })
  })

  describe("#remindMe method testing", () => {
    let menu;
    beforeEach( () => {
      menu = new MenuController();
    })

    it ("should return correct string", () => {
      expect(menu.remindMe()).toBe("Learning is a life-long pursuit.");
    })
  })
})
