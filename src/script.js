document.addEventListener("DOMContentLoaded", function () {
  const aside = document.getElementsByTagName("aside")[0];
  const mainContent = document.getElementById("main-content");
  const menuToggle = document.getElementById("menu-toggle");

  menuToggle.addEventListener("click", function () {
    aside.classList.toggle("active");
    mainContent.classList.toggle("active");
  });

  const form = document.getElementById("contact-form");
  const formGroups = document.getElementsByClassName("form-group");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    for (input of formGroups) {
      let inputValue = input.firstElementChild.value.trim();
      let inputName = input.firstElementChild.getAttribute("name");

      if (input.lastElementChild.className.includes("error")) {
        input.lastElementChild.remove();
      }

      if (inputValue == "") {
        const errorMessage = document.createElement("p");
        errorMessage.classList.add("error");
        errorMessage.style.color = "red";
        errorMessage.textContent = `Required ${inputName}`;

        input.appendChild(errorMessage);
      }
    }
  });
});

// Products Services
const url = "https://dummyjson.com/products/category/smartphones";

async function displayProducts(url) {
  try {
    const response = await fetch(url, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    // Select the product-list element
    const productList = document.getElementById("product-list");
    const productCards = data.products
      .map(
        (product) => `
        <div class="bg-white rounded-lg shadow-lg p-4 w-full">
          <img src="${product.thumbnail}" alt="${product.title}" class="w-full h-48 object-cover rounded-t-lg">
          <div class="p-4">
            <h2 class="text-xl font-semibold">${product.title}</h2>
            <p class="text-black font-bold mt-4">$${product.description}</p>
            <p class="text-black font-bold mt-4">$${product.price}</p>
            <p class="text-black font-bold mt-4">Brand: ${product.brand}</p>
            <p class="text-black font-bold mt-4">Policy: ${product.returnPolicy}</p>
            <p class="text-black font-bold mt-4">Stock Price: $${product.stock}</p>
          </div>
        </div>
      `
      )
      .join("");
    productList.innerHTML = productCards;
  } catch (error) {
    console.error("Error fetching product data:", error);
    throw error;
  }
}

displayProducts(url);

// FAQ Services
const faqData =
  "https://dummyjson.com/recipes?limit=10&skip=10&select=name,instructions";

async function displayFaq(url) {
  try {
    const response = await fetch(url, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Select all the faq-list elements
    const faqLists = document.getElementsByClassName("faq-list");

    // Loop through each faq list and set the inner HTML
    Array.from(faqLists).forEach((faqList) => {
      // Faq Form for the current list
      const faqForm = data.recipes
        .slice(0, 5)
        .map(
          (recipe, index) => `
          <div class="border-b border-gray-200">
          <div class="py-4 flex justify-between items-center cursor-pointer toggle-button">
          <p class="text-gray-700">
          ${recipe.name} 
          </p>
          <i class="fas fa-chevron-down text-gray-500"></i>
          </div>
          <p class="hidden toggle-content">
          ${recipe.instructions}
          </p>
          </div>
          `
        )
        .join("");

      faqList.innerHTML = faqForm;

      // Add event listeners for toggle buttons in the current faq list
      const toggleButtons = faqList.getElementsByClassName("toggle-button");

      Array.from(toggleButtons).forEach((button, index) => {
        const toggleContent = button.nextElementSibling;
        button.addEventListener("click", function () {
          toggleContent.classList.toggle("hidden");

          const icon = this.querySelector("i");
          icon.classList.toggle("fa-chevron-down");
          icon.classList.toggle("fa-chevron-up");
        });
      });
    });
  } catch (error) {
    console.error("Error fetching product data:", error);
    throw error;
  }
}

displayFaq(faqData);

// Basic Questions Services
const basicQuestions = "https://dummyjson.com/products";

async function displayBasicQuestion(url) {
  try {
    const response = await fetch(url, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    // Select the id question
    const questionForm = document.getElementById("questions");

    // Create questions using product data
    const questions = data.products
      .slice(0, 3)
      .map(
        (product) => `
        <div class="mt-4">
        <h3 class="text-blue-600 font-semibold mb-2">
          ${product.id}. ${product.title}?
        </h3>
        <p class="text-gray-700">
          ${product.description}
        </p>
        </div>
      `
      )
      .join("");

    questionForm.innerHTML = questions;

    console.log(data);
  } catch (error) {
    console.error("Error fetching product data:", error);
    throw error;
  }
}

displayBasicQuestion(basicQuestions);

// Form Services
function validateForm(event) {
  event.preventDefault();

  // Hide all error messages
  const errorElements = document.querySelectorAll(".text-red-500");
  errorElements.forEach((error) => error.classList.add("hidden"));

  let isValid = true;

  // Validate Name
  const name = document.getElementById("name").value.trim();
  if (!name) {
    document.getElementById("nameError").classList.remove("hidden");
    isValid = false;
  }

  // Validate Email
  const email = document.getElementById("email").value.trim();
  if (!email) {
    document.getElementById("emailError").classList.remove("hidden");
    isValid = false;
  }

  // Validate Password
  const password = document.getElementById("password").value.trim();
  if (!password) {
    document.getElementById("passwordError").classList.remove("hidden");
    isValid = false;
  }

  // Validate Address
  const address = document.getElementById("address").value.trim();
  if (!address) {
    document.getElementById("addressError").classList.remove("hidden");
    isValid = false;
  }

  // Validate Address2
  const address2 = document.getElementById("address2").value.trim();
  if (!address2) {
    document.getElementById("address2Error").classList.remove("hidden");
    isValid = false;
  }

  // Validate City
  const city = document.getElementById("city").value.trim();
  if (!city) {
    document.getElementById("cityError").classList.remove("hidden");
    isValid = false;
  }

  // Validate State
  const state = document.getElementById("state").value;
  if (!state) {
    document.getElementById("stateError").classList.remove("hidden");
    isValid = false;
  }

  // Validate Zip
  const zip = document.getElementById("zip").value.trim();
  if (!zip) {
    document.getElementById("zipError").classList.remove("hidden");
    isValid = false;
  }

  // If valid, you can submit the form or perform other actions
  if (isValid) {
    alert("Form submitted successfully!");
  }
}

function resetForm() {
  // Clear form fields
  document.getElementById("myForm").reset();

  // Hide all error messages
  const errorElements = document.querySelectorAll(".text-red-500");
  errorElements.forEach((error) => error.classList.add("hidden"));
}

// Profile Page Services
const tabs = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((button) =>
      button.classList.remove("active-tab")
    );
    tab.classList.add("active-tab");

    contents.forEach((content) => content.classList.add("hidden"));
    contents[index].classList.remove("hidden");
  });
});
