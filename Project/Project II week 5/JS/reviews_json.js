
  $(document).ready(function () {
    $.ajax({
      url: 'reviews.json',
      method: 'GET',
      dataType: 'json',
      success: function (data) {
        const reviewsContainer = $('#reviews-container');

        data.forEach(function (review) {
          const reviewElement = $('<div>').addClass('review');

          const reviewName = $('<h3>').text(review.name);
          const reviewContent = $('<p>').text(review.review);

          reviewElement.append(reviewName).append(reviewContent);
          reviewsContainer.append(reviewElement);
        });
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.error('Error fetching reviews:', textStatus, errorThrown);
      }
    });
  }); 