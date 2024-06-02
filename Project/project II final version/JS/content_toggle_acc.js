$(document).ready(function() {
    $('.content_toggle_btn').click(function() {
        $('.FAQ-accordion').toggle();
        if ($('.content_toggle_btn').text() === 'Show') {
            $('.content_toggle_btn').text('Hide');
        } else {
            $('.content_toggle_btn').text('Show');
        }
    });
});
