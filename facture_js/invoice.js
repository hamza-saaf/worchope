
  // add initital total calculation first
  //here

  // these are selection helpers
  const invoiceTable = document
    .getElementById("invoiceTable")
    .getElementsByTagName("tbody")[0];
  const invoiceTotal = document.getElementById("invoiceTotal");

  // This function updates the total amount in each row ( item price * Qte )
  function updateItemTotal() {
    let quantity = document.getElementsByClassName("quantity").value;
    let unitPrice = document.getElementsByClassName("unitPrice").value;
    var Total = parseInt(quantity) * parseInt(unitPrice);
    document.getElementsByClassName("itemTotal").innerHTML= Total;

  }

  // This function updates the total amount of the invoice (sum all Item totals)
  function updateInvoiceTotal() {}

  // Ajouter un nouveau item
  function addNewItem() {}

  // If you finish the above functions, consider adding a delete button
