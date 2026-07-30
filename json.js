const menuBtn = document.getElementById("menu-btn");
const formBtn = document.getElementById("subbtn");
const formName = document.getElementById("name");
const formMessahe = document.getElementById("message");
const menuIcon = document.getElementById("menu-icon");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-link");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  if (mobileMenu.classList.contains("hidden")) {
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  } else {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
  }
});

// Close menu when clicking a link

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  });
});

// 1. QUANTITY BUTTON LOGIC
  // Select all product cards to handle quantity independently
  const productCards = document.querySelectorAll(".group");

  productCards.forEach((card) => {
    const minusBtn = card.querySelector(".minus-btn");
    const plusBtn = card.querySelector(".plus-btn");
    const qtyInput = card.querySelector(".qty-input");

    if (minusBtn && plusBtn && qtyInput) {
      // Decrease Quantity
      minusBtn.addEventListener("click", () => {
        let currentValue = parseInt(qtyInput.value) || 1;
        if (currentValue > 1) {
          qtyInput.value = currentValue - 1;
        }
      });

      // Increase Quantity
      plusBtn.addEventListener("click", () => {
        let currentValue = parseInt(qtyInput.value) || 1;
        if (currentValue < 99) {
          qtyInput.value = currentValue + 1;
        }
      });

      // Prevent entering manual negative values, zero, or text
      // qtyInput.addEventListener("change", () => {
      //   let currentValue = parseInt(qtyInput.value);
      //   if (isNaN(currentValue) || currentValue < 1) {
      //     qtyInput.value = 1;
      //   } else if (currentValue > 99) {
      //     qtyInput.value = 99;
      //   }
      // });
    }
  });

  // 2. CONTACT US BUTTON LOGIC
  // Pass the product name and selected quantity to the contact form when clicked
  const contactButtons = document.querySelectorAll('a[href="#contact"]');
  const card = document.querySelector(".group");
  contactButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      if (card) {
        const productName = e.target.parentElement.parentElement.children[0].children[0].innerText;
        const quantity = e.target.parentElement.children[0].children[1].value || 1;

        // Prefill the contact form message textarea
        const message = `Hello, I am interested in Inquiring about ${quantity}pcs(s) of the ${productName}.`;

        const whatsappURL = `http://wa.me/8125754371?text=${message}`;

        window.open(whatsappURL, "_blank").focus();
      }
    });
  });


formBtn.addEventListener('click', () => {
   if(formName.value !== '' && formMessahe.value !== ''){

      const whatsappURL = `http://wa.me/8125754371?text=Good Day, I am ${formName.value},%0A${formMessahe.value}`;

        window.open(whatsappURL, "_blank").focus();

   }else{
     document.getElementById('worrning').classList.remove('hidden')
     setTimeout(() => {
     document.getElementById('worrning').classList.add('hidden')
      
     }, 2000);
   }

})