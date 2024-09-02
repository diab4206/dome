document.addEventListener("DOMContentLoaded", () => {
    // Function to update the total price
    function updateTotalPrice() {
      let total = 0;
      document.querySelectorAll(".card").forEach(card => {
        const unitPrice = parseFloat(card.querySelector(".unit-price").textContent.replace("$", "").trim());
        const quantity = parseInt(card.querySelector(".quantity").textContent);
        total += unitPrice * quantity;
      });
      document.querySelector(".total").textContent = `${total} $`;
    }
  
    // Event delegation to handle clicks on all cards
    document.querySelector(".list-products").addEventListener("click", (event) => {
      const target = event.target;
  
      // Handle quantity increase
      if (target.classList.contains("fa-plus-circle")) {
        const quantitySpan = target.parentElement.querySelector(".quantity");
        quantitySpan.textContent = parseInt(quantitySpan.textContent) + 1;
        updateTotalPrice();
      }
  
      // Handle quantity decrease
      if (target.classList.contains("fa-minus-circle")) {
        const quantitySpan = target.parentElement.querySelector(".quantity");
        let currentQuantity = parseInt(quantitySpan.textContent);
        if (currentQuantity > 0) {
          quantitySpan.textContent = currentQuantity - 1;
          updateTotalPrice();
        }
      }
  
      // Handle item deletion
      if (target.classList.contains("fa-trash-alt")) {
        target.closest(".card-body").remove();
        updateTotalPrice();
      }
  
      // Handle item liking
      if (target.classList.contains("fa-heart")) {
        target.classList.toggle("liked");
      }
    });
  });
  