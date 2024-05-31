const reviewForm = document.getElementById('reviewForm');
const userReview = document.getElementById('userReview');
const submitReviewButton = document.getElementById('submitReview');
const reviewsContainer = document.getElementById('reviewsContainer');

// Fetch reviews from JSON file
fetch('/json/reviews2.json')
  .then(response => response.json())
  .then(reviews => {
    reviews.forEach(review => {
      showReview(review);
    });
  })
  .catch(error => console.error('Error fetching reviews:', error));

submitReviewButton.addEventListener('click', function() {
  const reviewText = userReview.value.trim();
  
  if (reviewText !== '') {
    const newReview = { id: Date.now(), text: reviewText };
    showReview(newReview);
    userReview.value = '';
    displaySuccessMessage('Review added successfully!');
  }
});

function showReview(review) {
  const reviewContainer = document.createElement('div');
  reviewContainer.classList.add('review-container');
  reviewContainer.setAttribute('data-id', review.id);

  const reviewText = document.createElement('div');
  reviewText.textContent = review.text;
  reviewText.classList.add('review-text');

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.addEventListener('click', function() {
    userReview.value = review.text;
    reviewsContainer.removeChild(reviewContainer);
  });
  
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function() {
    reviewsContainer.removeChild(reviewContainer);
    displaySuccessMessage('Review deleted successfully!');
  });

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');
  buttonContainer.appendChild(editButton);
  buttonContainer.appendChild(deleteButton);

  reviewContainer.appendChild(reviewText);
  reviewContainer.appendChild(buttonContainer);

  reviewsContainer.appendChild(reviewContainer);
}

function displaySuccessMessage(message) {
  const successMessage = document.createElement('div');
  successMessage.textContent = message;
  successMessage.classList.add('success-message');
  reviewForm.appendChild(successMessage);

  setTimeout(() => {
    reviewForm.removeChild(successMessage);
  }, 2000);
}
