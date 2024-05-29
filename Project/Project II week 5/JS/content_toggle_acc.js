$(document).ready(function() {
    $('.content_toggle_btn').click(function() {
        $('.FAQ-accordion').toggle(); // Toggle the visibility of the accordion content
        // Toggle the button text between "Show" and "Hide"
        if ($('.content_toggle_btn').text() === 'Show') {
            $('.content_toggle_btn').text('Hide');
        } else {
            $('.content_toggle_btn').text('Show');
        }
    });
});
