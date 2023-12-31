import { Product } from "./Product.js";
import { UI } from "./UI.js";

// DOM Events
document
  .getElementById("product-form")
  .addEventListener("submit", function (e) {
    // Override the default Form behaviour
    e.preventDefault();

    // Getting Form Values
    const name = document.getElementById("name").value,
      precio = document.getElementById("precio").value,
      cantidad=document.getElementById("cantidad").value,
      year = document.getElementById("year").value;

    // Create a new Oject Product
    const product = new Product(name, precio, cantidad, year);

    // Create a new UI instance
    const ui = new UI();

    // Input User Validation
    if (name === "" || precio === "" || cantidad=="" || year === "") {
      ui.showMessage("Please Insert data in all fields", "danger");
    }

    // Save Product
    ui.addProduct(product);
    ui.showMessage("Product Added Successfully", "success");
    ui.resetForm();
  });

document.getElementById("product-list").addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteProduct(e.target);
  e.preventDefault();
});
