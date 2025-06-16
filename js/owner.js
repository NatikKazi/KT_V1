// js/owner.js

document.addEventListener("DOMContentLoaded", () => {
  const ownerContainer = document.getElementById("owner-section");
  if (!ownerContainer) return;

  fetch("data/owner.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((person) => {
        ownerContainer.innerHTML = `
          <div class="card border-0 shadow p-5 bg-white">
            <div class="text-center">
              <i class="fas fa-quote-left fa-2x text-violet mb-3"></i>
              <blockquote class="blockquote">
                <p class="fst-italic text-muted fs-5">"${person.message}"</p>
              </blockquote>
              <hr class="my-4" />
              <footer class="blockquote-footer text-violet fw-semibold">
                ${person.name} <cite class="text-muted">– ${person.title}</cite>
              </footer>
            </div>
          </div>
        `;
      });
    })
    .catch((err) => {
      console.error("Owner section error:", err);
      ownerContainer.innerHTML = "<p class='text-danger text-center'>Unable to load owner's message at the moment.</p>";
    });
});
