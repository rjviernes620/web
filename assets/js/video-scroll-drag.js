document.addEventListener("DOMContentLoaded", function () {
    var container = document.querySelector(".scrollable-video-container");
    if (!container) {
        return;
    }

    var maxScrollLeft = container.scrollWidth - container.clientWidth;
    if (maxScrollLeft > 0) {
        container.scrollLeft = Math.floor(maxScrollLeft * 0.1);
    }

    var isDown = false;
    var startX;
    var scrollLeft;

    container.addEventListener("mousedown", function (e) {
        isDown = true;
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
        container.style.cursor = "grabbing";
    });

    container.addEventListener("mouseleave", function () {
        isDown = false;
        container.style.cursor = "grab";
    });

    container.addEventListener("mouseup", function () {
        isDown = false;
        container.style.cursor = "grab";
    });

    container.addEventListener("mousemove", function (e) {
        if (!isDown) return;
        e.preventDefault();
        var x = e.pageX - container.offsetLeft;
        var walk = (x - startX) * 1.0;
        container.scrollLeft = scrollLeft - walk;
    });

    container.style.cursor = "grab";
});
