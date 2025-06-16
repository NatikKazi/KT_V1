// js/comments.js

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("comments-section");

  if (!container) return;

  fetch("data/comments.json")
    .then((response) => response.json())
    .then((comments) => {
      comments.forEach((item) => {
        const stars = getStarRating(item.rating);
        const card = document.createElement("div");
        card.className = "col-md-4";

        card.innerHTML = `
          <div class="card border-0 shadow-sm h-100 testimonial-card">
            <div class="card-body p-4">
              <div class="mb-3 text-warning">${stars}</div>
              <p class="card-text mb-4">"${item.comment}"</p>
              <div class="d-flex align-items-center">
                <img src="${item.photo}" alt="${item.name}" class="rounded-circle me-3" width="50" height="50">
                <div>
                  <h6 class="mb-0 text-violet">${item.name}</h6>
                  <small class="text-muted">${item.role}</small>
                </div>
              </div>
            </div>
          </div>
        `;

        container.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Error loading comments:", error);
      container.innerHTML = "<p class='text-danger'>Unable to load testimonials at the moment.</p>";
    });
});

function getStarRating(rating) {
  let fullStars = Math.floor(rating);
  let halfStar = rating % 1 >= 0.5 ? 1 : 0;
  let emptyStars = 5 - fullStars - halfStar;

  return (
    `<i class="fas fa-star"></i>`.repeat(fullStars) +
    `<i class="fas fa-star-half-alt"></i>`.repeat(halfStar) +
    `<i class="far fa-star"></i>`.repeat(emptyStars)
  );
}
