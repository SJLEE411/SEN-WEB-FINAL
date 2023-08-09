
  const zoomableImages = document.querySelectorAll('.zoomable-image');
  
  zoomableImages.forEach(image => {
    image.addEventListener('click', function() {
      this.classList.toggle('zoomed');
    });
  });


  window.reviewData = [
    {
        name: "John Doe",
        date: "2023-08-10",
        rating: 4,
        reviewText: "Great game! Enjoyed every moment of it."
    },
    {
        name: "Jane Smith",
        date: "2023-08-11",
        rating: 5,
        reviewText: "Diablo 4 exceeded all my expectations. Must-play!"
    },
];


document.addEventListener("DOMContentLoaded", function() {
  const reviewCardsContainer = document.getElementById("review-cards");
  const addReviewForm = document.getElementById("addReviewForm");
  const createReviewButton = document.getElementById("createReviewButton");

  function generateReviewCards() {
      reviewCardsContainer.innerHTML = "";

      reviewData.forEach(review => {
          const card = document.createElement("div");
          card.classList.add("review-card");
          card.innerHTML = `
              <h3>${review.name}</h3>
              <p>Date: ${review.date}</p>
              <p>Rating: ${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</p>
              <p>${review.reviewText}</p>
          `;
          reviewCardsContainer.appendChild(card);
      });
  }

  generateReviewCards();

  createReviewButton.addEventListener("click", function() {
      const name = document.getElementById("name").value;
      const date = document.getElementById("date").value;
      const rating = parseInt(document.getElementById("rating").value);
      const reviewText = document.getElementById("reviewText").value;

      if (name && date && rating && reviewText) {
          reviewData.push({
              name: name,
              date: date,
              rating: rating,
              reviewText: reviewText
          });

          generateReviewCards();

          addReviewForm.reset();
      }
  });
});