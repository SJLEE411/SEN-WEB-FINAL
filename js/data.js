
  const zoomableImages = document.querySelectorAll('.zoomable-image');
  
  zoomableImages.forEach(image => {
    image.addEventListener('click', function() {
      this.classList.toggle('zoomed');
    });
  });


  window.reviewData = [
    {
        name: "Vladmir Psdyegde",
        date: "2023-08-10",
        rating: 4,
        reviewText: "Great game! Enjoyed every moment of it."
    },
    {
        name: "Seowon Kim",
        date: "2023-08-11",
        rating: 5,
        reviewText: "Diablo 4 exceeded all my expectations. Must-play!"
    },
    {
        name: "Sanghoon Lee",
        date: "2023-08-05",
        rating: 2,
        reviewText: "Games too bring, id rather play something else"
    },
    {
        name: "WonHwan Lee",
        date: "2023-06-18",
        rating: 5,
        reviewText: "I play this with my son, he loves it!!"
    },
    {
        name: "KyoungLan Ro",
        date: "2023-07-11",
        rating: 1,
        reviewText: "Too scary"
    },
];


document.addEventListener("DOMContentLoaded", function() {
  const reviewCardsContainer = document.getElementById("review-cards");
  const addReviewForm = document.getElementById("addReviewForm");
  const createReviewButton = document.getElementById("createReviewButton");

  //function to generate reviuew
  function generateReviewCards() {
      reviewCardsContainer.innerHTML = "";

      //loop through the review card that is inputted by user
      reviewData.forEach(review => {
          const card = document.createElement("div");
          card.classList.add("review-card");
          card.innerHTML = `
              <h3>${review.name}</h3>
              <p>Date: ${review.date}</p>
              <p>Rating: ${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</p>
              <p>${review.reviewText}</p>
          `;
          //Append the card to the reviews cards
          reviewCardsContainer.appendChild(card);
      });
  }

  generateReviewCards();
//when create button clicked
//retrieves values

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