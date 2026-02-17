//
//
//            All URL s
//
//
//
// Buttons URL
const categoriesBtnURL = "https://fakestoreapi.com/products/categories";
// All products URL
const allProductsURL = "https://fakestoreapi.com/products";
//
//
//         End URL s
//
//

//
//
//             Load & Display Buttons Start
//
//
// load categories buttons
const loadCategoriesButton = async () => {
  const loadButtons = await fetch(categoriesBtnURL);
  const buttons = await loadButtons.json();
  displayCategoriesButtons(buttons);
};
loadCategoriesButton();
// display categories buttons
const displayCategoriesButtons = (buttons) => {
  const targetButtonSection = document.getElementById("btnCategories");
  if (!targetButtonSection) return;

  // targetButtonSection.innerHTML = "";

  buttons.forEach((category) => {
    const btn = document.createElement("button");

    btn.textContent = category;

    // default style
    btn.className = "categoryBtn btn rounded-3xl bg-gray-200 text-black px-4";

    // click event
    btn.addEventListener("click", function () {
      // 🔹 Remove active from all category buttons
      document.querySelectorAll(".categoryBtn").forEach((b) => {
        b.classList.remove("bg-primary", "text-white");
        b.classList.add("bg-gray-200", "text-black");
      });

      // 🔹 Add active to clicked button
      this.classList.remove("bg-gray-200", "text-black");
      this.classList.add("bg-primary", "text-white");

      // 🔹 Load products
      loadCategoryProducts(category);
    });

    targetButtonSection.appendChild(btn);
  });
};

// ====================
//(Add Active / Remove Others)
// ====================

//
//
//             Load & Display Buttons End
//
//

//
//
//             Load & Display All Products  Start
//
//

// Load Top Rated Products
const loadTopRatedProducts = async () => {
  try {
    const res = await fetch(allProductsURL);
    const data = await res.json();

    // Sort by rating (highest first)
    const topRated = data
      .sort((a, b) => b.rating.rate - a.rating.rate)
      .slice(0, 3); // Take top 3

    displayTopProducts(topRated);
  } catch (error) {
    console.log("Error loading products:", error);
  }
};

// Display Top Rated 3 Products
const displayTopProducts = (products) => {
  const container = document.getElementById("topRatedContainer");
  container.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("div");

    card.className = "card bg-base-100 shadow-md";

    card.innerHTML = `
      <div class="card bg-base-100 w-full md:w-96 shadow-md mx-auto">
            <!-- Product Image -->
            <figure>
              <img
                src="${product.image}"
                alt="Men's Shoes"
                class="w-full h-96"
              />
            </figure>

            <!-- Card Body -->
            <div class="card-body">
              <!-- Category & Rating -->
              <div class="flex justify-between items-center py-2">
                <!-- Category Badge -->
                <span
                  class="text-xs rounded-lg bg-indigo-100 text-indigo-600 px-2 py-1"
                >
                  ${product.category}
                </span>

                <!-- Rating -->
                <span class="text-sm font-medium">⭐ ${product.rating.rate} (${product.rating.count})</span>
              </div>

              <!-- Product Title -->
              <h3 class="card-title text-lg truncate">${product.title}</h3>

              <!-- Product Description (Single line with truncate) -->
              <p class="truncate text-sm text-gray-600">${product.description}</p>

              <!-- Product Price -->
              <p class="font-bold text-lg"><span>$</span>${product.price}</p>

              <!-- Card Actions -->
              <div class="card-actions justify-between mt-3">
                <!-- Details Button -->
                <button onclick="loadProductDetails(${product.id})" class="btn btn-outline btn-sm">
                  <i class="fa-regular fa-eye"></i>
                  Details
                </button>

                <!-- Add to Cart Button -->
                <button class="btn btn-primary btn-sm">
                  <i class="fa-solid fa-cart-shopping"></i>
                  Add
                </button>
              </div>
            </div>
          </div>
    `;

    container.appendChild(card);
  });
};

loadTopRatedProducts();

// load all products
const loadAllProducts = async () => {
  const loadProducts = await fetch(allProductsURL);
  const jsonProducts = await loadProducts.json();
  displayAllProducts(jsonProducts);
};
// display all products
const displayAllProducts = (products) => {
  const targetProductsSection = document.getElementById("allProducts");
  targetProductsSection.innerHTML = "";
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `
        <div class="card bg-base-100 w-full md:w-96 shadow-md mx-auto">
            <!-- Product Image -->
            <figure>
              <img
                src="${product.image}"
                alt="Men's Shoes"
                class="w-full h-96"
              />
            </figure>

            <!-- Card Body -->
            <div class="card-body">
              <!-- Category & Rating -->
              <div class="flex justify-between items-center py-2">
                <!-- Category Badge -->
                <span
                  class="text-xs rounded-lg bg-indigo-100 text-indigo-600 px-2 py-1"
                >
                  ${product.category}
                </span>

                <!-- Rating -->
                <span class="text-sm font-medium">⭐ ${product.rating.rate} (${product.rating.count})</span>
              </div>

              <!-- Product Title -->
              <h3 class="card-title text-lg truncate">${product.title}</h3>

              <!-- Product Description (Single line with truncate) -->
              <p class="truncate text-sm text-gray-600">${product.description}</p>

              <!-- Product Price -->
              <p class="font-bold text-lg"><span>$</span>${product.price}</p>

              <!-- Card Actions -->
              <div class="card-actions justify-between mt-3">
                <!-- Details Button -->
                <button onclick="loadProductDetails(${product.id})" class="btn btn-outline btn-sm">
                  <i class="fa-regular fa-eye"></i>
                  Details
                </button>

                <!-- Add to Cart Button -->
                <button class="btn btn-primary btn-sm">
                  <i class="fa-solid fa-cart-shopping"></i>
                  Add
                </button>
              </div>
            </div>
          </div>
    `;
    targetProductsSection.append(productDiv);
  });
};
// Load Product Details
const loadProductDetails = async (id) => {
  const loadProductDetailsURL = `https://fakestoreapi.com/products/${id}`;
  const res = await fetch(loadProductDetailsURL);
  const details = await res.json();
  displayProductDetails(details);
};
// Display product details
const displayProductDetails = (product) => {
  const modalContainer = document.getElementById("modalDetails");
  modalContainer.innerHTML = "";
  //
  const productDiv = document.createElement("div");
  productDiv.innerHTML = `
        <div class="card bg-base-100 w-full md:w-96 shadow-md mx-auto">
            <!-- Product Image -->
            <figure>
              <img
                src="${product.image}"
                alt="Men's Shoes"
                class="w-full h-96"
              />
            </figure>

            <!-- Card Body -->
            <div class="card-body">
              <!-- Category & Rating -->
              <div class="flex justify-between items-center py-2">
                <!-- Category Badge -->
                <span
                  class="text-xs rounded-lg bg-indigo-100 text-indigo-600 px-2 py-1"
                >
                  ${product.category}
                </span>

                <!-- Rating -->
                <span class="text-sm font-medium">⭐ ${product.rating.rate} (${product.rating.count})</span>
              </div>

              
              <h3 class="card-title text-lg">${product.title}</h3>

              
              <p class="text-sm text-gray-600">${product.description}</p>

              <!-- Product Price -->
              <p class="font-bold text-lg"><span>$</span>${product.price}</p>

              <!-- Card Actions -->
              <div class="card-actions mt-3 justify-end">
                

                <!-- Add to Cart Button -->
                <button class="btn btn-primary btn-sm">
                  <i class="fa-solid fa-cart-shopping"></i>
                  Add
                </button>
              </div>
            </div>
          </div>
    `;
  modalContainer.append(productDiv);
  //
  document.getElementById("modal").showModal();
};
// function called
loadAllProducts();
//
//
//             Load & Display All Products End
//
//

//
//
//             Load Products by Categories Start
//
//
const loadCategoryProducts = (category) => {
  const loadCategoryProductsURL = `https://fakestoreapi.com/products/category/${category}`;
  fetch(loadCategoryProductsURL)
    .then((res) => res.json())
    .then((products) => displayCategoryProducts(products));
};
//
//
//             Load Products by Categories END
//

//
//
//
//             Display Products by Categories Start
//
//
const displayCategoryProducts = (products) => {
  const targetProductsSection = document.getElementById("allProducts");
  targetProductsSection.innerHTML = "";
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `
        <div class="card bg-base-100 w-full md:w-96 shadow-md mx-auto">
            <!-- Product Image -->
            <figure>
              <img
                src="${product.image}"
                alt="Men's Shoes"
                class="w-full h-96"
              />
            </figure>

            <!-- Card Body -->
            <div class="card-body">
              <!-- Category & Rating -->
              <div class="flex justify-between items-center py-2">
                <!-- Category Badge -->
                <span
                  class="text-xs rounded-lg bg-indigo-100 text-indigo-600 px-2 py-1"
                >
                  ${product.category}
                </span>

                <!-- Rating -->
                <span class="text-sm font-medium">⭐ ${product.rating.rate} (${product.rating.count})</span>
              </div>

              <!-- Product Title -->
              <h3 class="card-title text-lg truncate">${product.title}</h3>

              <!-- Product Description (Single line with truncate) -->
              <p class="truncate text-sm text-gray-600">${product.description}</p>

              <!-- Product Price -->
              <p class="font-bold text-lg"><span>$</span>${product.price}</p>

              <!-- Card Actions -->
              <div class="card-actions justify-between mt-3">
                <!-- Details Button -->
                <button onclick="loadProductDetails(${product.id})" class="btn btn-outline btn-sm">
                  <i class="fa-regular fa-eye"></i>
                  Details
                </button>

                <!-- Add to Cart Button -->
                <button class="btn btn-primary btn-sm">
                  <i class="fa-solid fa-cart-shopping"></i>
                  Add
                </button>
              </div>
            </div>
          </div>
    `;
    targetProductsSection.append(productDiv);
  });
};
//
//
//             Display Products by Categories END
//
//

// ====================
//(Add Active / Remove Others)
// ====================
const navLinks = document.querySelectorAll(".navLink");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // 🔹 Remove active from all links
    navLinks.forEach((item) => {
      item.classList.remove("text-primary", "font-semibold");
    });

    // 🔹 Add active to clicked link
    this.classList.add("text-primary", "font-semibold");
  });
});
