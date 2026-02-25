document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".swiper-wrapper");

  // Build slides grouped by section
  const lineOrder = ["hyaluron","peptide","bbsun","acne","vc","special","ceramide","centel","blemy","entangle","tint"];

  lineOrder.forEach(lineId => {
    const sec = SECTIONS.find(s => s.id === lineId);
    const products = PRODUCTS.filter(p => p.line === lineId);

    // Section divider slide
    const divider = document.createElement("div");
    divider.className = "swiper-slide slide-section";
    divider.innerHTML = `
      <div class="section-content">
        <span class="section-number">${sec.num}</span>
        <h2 class="section-title">${sec.title}</h2>
        <p class="section-desc-ru">${sec.descRu}</p>
        <p class="section-desc">${sec.desc} · ${products.length} Products</p>
      </div>`;
    wrapper.appendChild(divider);

    // Product slides
    products.forEach(p => {
      const slide = document.createElement("div");
      slide.className = "swiper-slide slide-product";
      slide.innerHTML = `
        <div class="product-card">
          <div class="product-image-wrap">
            <img src="${p.img}" alt="${p.en}" class="product-image" loading="lazy">
          </div>
          <div class="product-info">
            <span class="product-number">#${String(p.id).padStart(2,"0")}</span>
            <h3 class="product-name-en">${p.en}</h3>
            <p class="product-name-ru">${p.ru}</p>
            <p class="product-name-kr">${p.kr}</p>
            <span class="product-volume">${p.vol}</span>
            <div class="product-price">
              <span class="price-usd">${p.usd}</span>
              <span class="price-krw">₩${p.krw}</span>
            </div>
          </div>
        </div>`;
      wrapper.appendChild(slide);
    });
  });

  // Remove the placeholder section slide from HTML
  const placeholders = wrapper.querySelectorAll(".slide-section");
  if (placeholders.length > lineOrder.length) {
    // Remove the one that was in the static HTML (last extra)
    placeholders[0].remove();
  }

  const totalSlides = wrapper.children.length;

  // Init Swiper
  const swiper = new Swiper("#catalog", {
    direction: "horizontal",
    effect: "fade",
    fadeEffect: { crossFade: true },
    speed: 600,
    keyboard: { enabled: true },
    mousewheel: { sensitivity: 1 },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 5,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChange: function () {
        document.getElementById("slideCounter").textContent =
          `${this.activeIndex + 1} / ${totalSlides}`;
      },
    },
  });

  document.getElementById("slideCounter").textContent = `1 / ${totalSlides}`;
});
