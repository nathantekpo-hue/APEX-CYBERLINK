async function apexContent() {
  let fileData = null;
  try {
    const res = await fetch("data/content.json", { cache: "no-store" });
    if (res.ok) fileData = await res.json();
  } catch (e) {}
  let draft = null;
  try { draft = JSON.parse(localStorage.getItem("apex-content-draft") || "null"); } catch (e) {}
  return draft || fileData;
}

function waLink(number, text) {
  return "https://wa.me/" + number + "?text=" + encodeURIComponent(text || "Hi, I want a website for my business.");
}

function applyContent(data) {
  if (!data) return;
  document.querySelectorAll("[data-bind]").forEach((el) => {
    const key = el.dataset.bind;
    if (data[key] != null) el.textContent = data[key];
  });
  document.querySelectorAll("[data-wa]").forEach((el) => {
    el.href = waLink(data.whatsapp, el.dataset.wa);
  });
  document.querySelectorAll("[data-phone]").forEach((el) => {
    el.textContent = data.phone;
    if (el.tagName === "A") el.href = "tel:" + data.phone;
  });
  document.querySelectorAll("[data-email]").forEach((el) => {
    el.textContent = data.email;
    if (el.tagName === "A") el.href = "mailto:" + data.email;
  });
  const grid = document.querySelector("#services-grid");
  if (grid && Array.isArray(data.services)) {
    grid.innerHTML = data.services.map((s) => `
      <article class="card">
        <h3>${s.name}</h3>
        <p>${s.text}</p>
        <ul class="clean">${(s.points || []).map((p) => `<li>${p}</li>`).join("")}</ul>
        <p class="price">From GHS ${s.price}</p>
        <a class="btn btn-dark" href="${waLink(data.whatsapp, "Hi, I want " + s.name + " for my business.")}">Request</a>
      </article>`).join("");
  }
  const work = document.querySelector("#work-grid");
  if (work && Array.isArray(data.projects)) {
    work.innerHTML = data.projects.map((p) => `
      <article class="card"><span class="tag">${p.tag}</span><h3>${p.name}</h3><p>${p.text}</p><b>${p.result}</b></article>`).join("");
  }
  const momo = document.querySelector("#momo-line");
  if (momo) momo.textContent = data.momoName + " — " + data.momoNumber;
}

apexContent().then(applyContent);
