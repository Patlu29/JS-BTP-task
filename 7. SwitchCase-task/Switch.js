let input = require("prompt-sync")();

let totalBill = 0;
let orderNumber;

do {
  console.log("~~~~~~~Welcome to CD Restaurant~~~~~~~");
  const menu = {
    1: "Biriyani - 150",
    2: "Parotta - 100",
    3: "Pizza - 200",
    4: "SouthIndian - 120",
    5: "Chinese - 100",
    6: "Exit",
  };
  for (let [itemNo, item] of Object.entries(menu)) {
    console.log(`${itemNo}: ${item}`);
  }

  let orderNumber = input("Enter your order number: ");

  switch (orderNumber) {
    case "1":
      totalBill += 150;
      console.log(
        `\n\nYour order ${
          menu[orderNumber].split(" ")[0]
        } is ready and your bill is $${totalBill}\nThank you....Is there anything you want\n`
      );
      break;
    case "2":
      totalBill += 100;
      console.log(
        `\n\nYour order ${
          menu[orderNumber].split(" ")[0]
        } is ready and your bill is $${totalBill}\nThank you....Is there anything you want\n`
      );
      break;
    case "3":
      totalBill += 200;
      console.log(
        `\n\nYour order ${
          menu[orderNumber].split(" ")[0]
        } is ready and your bill is $${totalBill}\nThank you....Is there anything you want\n`
      );
      break;
    case "4":
      totalBill += 120;
      console.log(
        `\n\nYour order ${
          menu[orderNumber].split(" ")[0]
        } is ready and your bill is $${totalBill}\nThank you....Is there anything you want\n`
      );
      break;
    case "5":
      totalBill += 100;
      console.log(
        `\n\nYour order ${
          menu[orderNumber].split(" ")[0]
        } is ready and your bill is $${totalBill}\nThank you....Is there anything you want\n`
      );
      break;
    case "6":
      console.log(
        `\n\nTotal bill: ${totalBill}\nExisting from menu Thank you!\n\n`
      );
      return;
    default:
      console.log("\n\nEnter correct menu number..");
  }
} while (orderNumber !== "6");
