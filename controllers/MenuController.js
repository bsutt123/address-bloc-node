const inquirer = require("inquirer");

module.exports = class MenuController {
  constructor() {
    this.mainMenuQuestions = {
      type: "list",
      name: "mainMenuChoice",
      message:"Pleace choose from an option below: ",
      choices: [
        "Add New Contact",
        "Exit",
      ],
    };

    this.contacts = [];
    this.responder = function(res) {
      switch(res.mainMenuChoice) {
      case "Add New Contact":
        this.addContact();
        break;
      case "Exit":
        this.exit();
      default:
        console.log("Invalid input");
        this.main();
      }
    }.bind(this);

    this.responder2 = this.responder2.bind(this);
  }

  responder2(res) {
    switch(res.mainMenuChoice) {
    case "Add New Contact":
      this.addContact();
      break;
    case "Exit":
      this.exit();
    default:
      console.log("Invalid input");
      this.main();
    }
  }
  main() {
    console.log("Welcome to Address Bloc");
    inquirer.prompt(this.mainMenuQuestions).
      then(this.responder2).
      catch( err => {
        console.error(err);
      })
  }
  clear() {
    console.log("\x1Bc");
  }

  addContact() {
    this.clear();
    console.log("contact added");
    this.main();
  }

  exit() {
    console.log("thanks for using address bloc!");
    process.exit();
  }
}
