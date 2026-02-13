document.addEventListener("DOMContentLoaded", function () {
    var skillsCarousel = document.getElementById("skillsCarousel");
    if (skillsCarousel && !skillsCarousel.dataset.initialized) {
        var skillImages = [
            "Untitled-1.png", "Untitled-2.png", "Untitled-3.png",
            "Untitled-4.png", "Untitled-5.png", "Untitled-6.png",
            "Untitled-7.png", "Untitled-8.png", "Untitled-9.png",
            "Untitled-10.png", "Untitled-11.png", "Untitled-12.png",
            "Untitled-13.png"
        ];

        var itemsToShow = skillImages.length * 2;
        for (var i = 0; i < itemsToShow; i++) {
            var imageName = skillImages[i % skillImages.length];
            var item = document.createElement("div");
            item.className = "skills-carousel-item";
            item.innerHTML = '<img src="assets/img/skills/' + imageName + '" alt="Skill ' + (i % skillImages.length + 1) + '" loading="lazy">';
            skillsCarousel.appendChild(item);
        }

        skillsCarousel.dataset.initialized = "true";
    }

    var skillsCarouselWrapper = document.querySelector(".skills-carousel-wrapper");
    if (!skillsCarouselWrapper) {
        return;
    }

    var isDragging = false;
    var dragStartX = 0;
    var startScrollLeft = 0;
    var lastPointerX = 0;
    var lastPointerTime = 0;
    var momentumVelocity = 0;
    var momentumFrameId = null;

    var stopMomentum = function () {
        if (momentumFrameId !== null) {
            cancelAnimationFrame(momentumFrameId);
            momentumFrameId = null;
        }
    };

    var startMomentum = function () {
        var friction = 0.95;
        var minVelocity = 0.02;

        var step = function () {
            momentumVelocity *= friction;
            if (Math.abs(momentumVelocity) < minVelocity) {
                stopMomentum();
                return;
            }
            skillsCarouselWrapper.scrollLeft -= momentumVelocity * 16;
            momentumFrameId = requestAnimationFrame(step);
        };

        stopMomentum();
        momentumFrameId = requestAnimationFrame(step);
    };

    skillsCarouselWrapper.addEventListener("pointerdown", function (event) {
        stopMomentum();
        isDragging = true;
        dragStartX = event.pageX - skillsCarouselWrapper.offsetLeft;
        startScrollLeft = skillsCarouselWrapper.scrollLeft;
        lastPointerX = event.pageX;
        lastPointerTime = Date.now();
        momentumVelocity = 0;
        skillsCarouselWrapper.classList.add("is-dragging");
        skillsCarouselWrapper.setPointerCapture(event.pointerId);
    });

    skillsCarouselWrapper.addEventListener("pointerup", function (event) {
        if (!isDragging) return;
        isDragging = false;
        skillsCarouselWrapper.classList.remove("is-dragging");
        skillsCarouselWrapper.releasePointerCapture(event.pointerId);
        if (Math.abs(momentumVelocity) > 0.02) {
            startMomentum();
        }
    });

    skillsCarouselWrapper.addEventListener("pointerleave", function () {
        if (!isDragging) return;
        isDragging = false;
        skillsCarouselWrapper.classList.remove("is-dragging");
        if (Math.abs(momentumVelocity) > 0.02) {
            startMomentum();
        }
    });

    skillsCarouselWrapper.addEventListener("pointermove", function (event) {
        if (!isDragging) return;
        event.preventDefault();
        var currentX = event.pageX - skillsCarouselWrapper.offsetLeft;
        var walk = (currentX - dragStartX) * 1.1;
        skillsCarouselWrapper.scrollLeft = startScrollLeft - walk;

        var now = Date.now();
        var deltaX = event.pageX - lastPointerX;
        var deltaTime = Math.max(now - lastPointerTime, 1);
        momentumVelocity = deltaX / deltaTime;
        lastPointerX = event.pageX;
        lastPointerTime = now;
    });
});
