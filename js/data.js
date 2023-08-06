// script.js

// Function to generate a star rating based on the rating value
function generateRatingStars(rating) {
    const maxRating = 5;
    const filledStars = '★'.repeat(rating);
    const emptyStars = '☆'.repeat(maxRating - rating);
    return filledStars + emptyStars;
  }
  
  // Function to generate review cards
  function generateReviewCards() {
    const reviewContainer = document.getElementById('review-container');
    reviewContainer.innerHTML = ''; // Clear existing content
  
    for (const review of window.reviewData) {
      const card = document.createElement('div');
      card.classList.add('review-card');
  
      const stars = generateRatingStars(review.rating);
      const date = new Date(review.date).toLocaleDateString();
  
      card.innerHTML = `
        <h3>${review.name}</h3>
        <p>Date: ${date}</p>
        <p>Rating: ${stars}</p>
        <p>${review.review}</p>
      `;
  
      reviewContainer.appendChild(card);
    }
  }
  
  // Function to add a new review
  function addNewReview(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const rating = parseInt(document.getElementById('rating').value);
    const reviewText = document.getElementById('review').value;
  
    const newReview = {
      name: name,
      date: date,
      rating: rating,
      review: reviewText
    };
  
    window.reviewData.push(newReview);
    generateReviewCards();
    document.getElementById('new-review-form').reset();
  }
  
  // Attach event listener to the form's submit button
  document.getElementById('new-review-form').addEventListener('submit', addNewReview);
  
  // Generate review cards on page load
  generateReviewCards();
  