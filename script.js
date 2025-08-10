document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".headerText h1");
  const paragraphs = document.querySelectorAll(".section p");
  const images = document.querySelectorAll(".section img");
  const figcaptions = document.querySelectorAll(".section figcaption");

  function toggleCategoryElements(elements, category) {
    elements.forEach((el) => {
      if (el.classList.contains(category)) {
        el.classList.toggle("active");
      }
    });
  }

  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const category = header.dataset.category;

      // Toggle header color
      if (
        header.style.color === "rgb(0, 51, 179)" ||
        header.style.color === "#0033b3"
      ) {
        header.style.color = "rgb(0, 0, 0)";
      } else {
        header.style.color = "#0033b3";
      }

      // Toggle matching elements
      toggleCategoryElements(paragraphs, category);
      toggleCategoryElements(images, category);
      toggleCategoryElements(figcaptions, category);
    });
  });
});
