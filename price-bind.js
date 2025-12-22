document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-price]").forEach(el => {
    const path = el.dataset.price.split(".");
    let value = PRICES;

    path.forEach(p => value = value[p]);

    el.textContent = value + " TL";
  });
});
