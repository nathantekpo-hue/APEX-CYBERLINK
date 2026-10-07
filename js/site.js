const WA = "233552611663";
function wa(text) {
  return `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
}
document.querySelectorAll("[data-wa]").forEach((el) => {
  el.href = wa(el.dataset.wa);
});
const menu = document.querySelector(".menu-btn");
const links = document.querySelector(".links");
if (menu && links) menu.addEventListener("click", () => links.classList.toggle("open"));

const banner = document.querySelector(".cookie");
if (banner) {
  if (localStorage.getItem("apex-cookie") === "yes") banner.remove();
  banner.querySelector("button")?.addEventListener("click", () => {
    localStorage.setItem("apex-cookie", "yes");
    banner.remove();
  });
}

document.querySelectorAll(".filters button").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filters button").forEach((b) => b.classList.remove("on"));
    btn.classList.add("on");
    const filter = btn.dataset.filter;
    document.querySelectorAll("[data-cat]").forEach((card) => {
      card.style.display = filter === "all" || card.dataset.cat === filter ? "" : "none";
    });
  });
});

const form = document.querySelector("#contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const text = `Hi, I am ${data.get("name")}. Phone: ${data.get("phone") || "-"}. Email: ${data.get("email") || "-"}. Service: ${data.get("service")}. Message: ${data.get("message")}`;
    window.location.href = wa(text);
  });
}

const pay = document.querySelector("#pay-form");
if (pay) {
  pay.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(pay);
    const text = `Payment confirmation. Name: ${data.get("name")}. Phone: ${data.get("phone")}. Service: ${data.get("service")}. Amount: GHS ${data.get("amount")}. Reference: ${data.get("reference")}. Network: ${data.get("network")}.`;
    window.location.href = wa(text);
  });
}
