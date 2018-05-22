const inquirer = require("inquirer");

module.exports = class MenuController {
  constructor() {
    this.mainMenuQuestions = {
      type: "list",
      name: "mainMenuChoice",
      message:"Pleace choose from an option below: ",
      choices: [
        "Add New Contact",
        "Print Today's Date",
        "Exit",
      ],
    };

    this.contacts = [];

    this.responder = this.responder.bind(this);
  }

  responder(res) {
    switch(res.mainMenuChoice) {
    case "Add New Contact":
      this.addContact();
      break;
    case "Exit":
      this.exit();
    case "Print Today's Date":
      this.getDate();
      break;
    default:
      console.log("Invalid input");
      this.main();
    }
  }
  main() {
    console.log("Welcome to Address Bloc");
    inquirer.prompt(this.mainMenuQuestions).
      then(this.responder).
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

  getDate() {
    this.clear();
    var date = new Date();
    console.log(date.toLocaleString());
    this.main();
  }
}
