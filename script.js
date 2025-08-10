
      const headers = document.querySelectorAll(".headerText h1");
      const paragraphs = document.querySelectorAll(".section p");
      const images = document.querySelectorAll(".section img");
      const figcaption = document.querySelectorAll(".section figcaption");

      headers.forEach((header) => {
        header.addEventListener("click", () => {
          const category = header.dataset.category;

          // Toggle the header's active state
          if (
            header.style.color === "rgb(0, 51, 179)" ||
            header.style.color === "#0033b3"
          ) {
            header.style.color = "rgb(0, 0, 0)";
          } else {
            header.style.color = "#0033b3";
          }

          // Toggle the corresponding paragraphs' active state
          paragraphs.forEach((paragraph) => {
            if (paragraph.classList.contains(category)) {
              paragraph.classList.toggle("active");
            }
          });

          // Toggle the corresponding images' active state
          images.forEach((image) => {
            if (image.classList.contains(category)) {
              image.classList.toggle("active");
            }
          });
          figcaption.forEach((figcaption) => {
            if (figcaption.classList.contains(category)) {
              figcaption.classList.toggle("active");
            }
          });
        });
      });
