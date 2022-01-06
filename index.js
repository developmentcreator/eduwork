import Table from "./module.js";

const table = new Table({
  columns: ["Name", "Email", "Phone Number", "Hoby"],
  data: [
    ["Bagus", "bagus.addin313@gmail.com", "085707536380", "coding"],
    ["Addin", "bagus.addin354@gmail.com", "085707536380", "gaming"],
  ],
});
const app = document.getElementById("app");
table.render(app);
