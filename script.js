document.addEventListener("DOMContentLoaded", () => {
    const filterItem = document.querySelector(".items");
    const filterImg = document.querySelectorAll(".gallery .img");
  
    filterItem.addEventListener("click", (event) => {
      if (event.target.classList.contains("item")) {
        document.querySelector(".item.active").classList.remove("active");
        event.target.classList.add("active");
        let filterName = event.target.getAttribute("data-name");
        filterImg.forEach((image) => {
          let filterImageName = image.getAttribute("data-name").toLowerCase();
          if (filterImageName === filterName || filterName === "all") {
            image.classList.remove("hide");
            image.classList.add("show");
          } else {
            image.classList.add("hide");
            image.classList.remove("show");
          }
        });
      }
    });
  
    // Preview Image
    filterImg.forEach((image) => {
      image.addEventListener("click", () => preview(image));
    });
  });
  
  const previewBox = document.querySelector(".preview-box"),
    categoryName = previewBox.querySelector(".title p"),
    previewImg = previewBox.querySelector("img"),
    closeIcon = previewBox.querySelector(".icon"),
    shadow = document.querySelector(".shadow");
  function preview(element) {
    document.querySelector("body").style.overflow = "hidden";
    let selectedPrevImg = element.querySelector("img").src;
    let selectedImgCategory = element.getAttribute("data-name");
    previewImg.src = selectedPrevImg;
    categoryName.textContent = selectedImgCategory;
    previewBox.classList.add("show");
    shadow.classList.add("show");
    closeIcon.onclick = () => {
      previewBox.classList.remove("show");
      shadow.classList.remove("show");
      document.querySelector("body").style.overflow = "auto";
    };
  }