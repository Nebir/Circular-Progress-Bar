$(document).ready(function() {
    var progress_circle = $(".my-progress-bar").gmpc({
        line_width: 6,
        color: "#ccc",
        starting_position: 25,
        percent: 25,
        percentage: true,
        text: "More power behind every pixel"
    }).gmpc('animate', 99, 3000);
});
