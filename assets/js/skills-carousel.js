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

    var getLoopWidth = function () {
        var list = document.getElementById("skillsCarousel");
        if (!list) {
            return 0;
        }
        return list.scrollWidth / 2;
    };

    var normalizeScrollPosition = function () {
        var loopWidth = getLoopWidth();
        if (!loopWidth) {
            return;
        }
        if (skillsCarouselWrapper.scrollLeft >= loopWidth) {
            skillsCarouselWrapper.scrollLeft -= loopWidth;
        } else if (skillsCarouselWrapper.scrollLeft < 0) {
            skillsCarouselWrapper.scrollLeft += loopWidth;
        }
    };

    requestAnimationFrame(function () {
        var loopWidth = getLoopWidth();
        if (loopWidth) {
            skillsCarouselWrapper.scrollLeft = loopWidth;
        }
    });

    var isDragging = false;
    var dragStartX = 0;
    var startScrollLeft = 0;
    var lastPointerX = 0;
    var lastPointerTime = 0;
    var momentumVelocity = 0;
    var momentumFrameId = null;
    var autoScrollFrameId = null;
    var autoScrollSpeed = 0.25;
    var isAutoScrollPaused = false;
    var prefersReducedMotion = false;

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
            normalizeScrollPosition();
            momentumFrameId = requestAnimationFrame(step);
        };

        stopMomentum();
        momentumFrameId = requestAnimationFrame(step);
    };

    var stopAutoScroll = function () {
        if (autoScrollFrameId !== null) {
            cancelAnimationFrame(autoScrollFrameId);
            autoScrollFrameId = null;
        }
    };

    var startAutoScroll = function () {
        if (prefersReducedMotion || autoScrollFrameId !== null) {
            return;
        }
        var step = function () {
            if (!isDragging && !isAutoScrollPaused) {
                skillsCarouselWrapper.scrollLeft += autoScrollSpeed;
                normalizeScrollPosition();
            }
            autoScrollFrameId = requestAnimationFrame(step);
        };
        autoScrollFrameId = requestAnimationFrame(step);
    };

    if (window.matchMedia) {
        prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }

    skillsCarouselWrapper.addEventListener("pointerdown", function (event) {
        stopMomentum();
        stopAutoScroll();
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
        startAutoScroll();
    });

    skillsCarouselWrapper.addEventListener("pointerleave", function () {
        if (!isDragging) return;
        isDragging = false;
        skillsCarouselWrapper.classList.remove("is-dragging");
        if (Math.abs(momentumVelocity) > 0.02) {
            startMomentum();
        }
        startAutoScroll();
    });

    skillsCarouselWrapper.addEventListener("pointermove", function (event) {
        if (!isDragging) return;
        event.preventDefault();
        var currentX = event.pageX - skillsCarouselWrapper.offsetLeft;
        var walk = (currentX - dragStartX) * 1.1;
        skillsCarouselWrapper.scrollLeft = startScrollLeft - walk;
        normalizeScrollPosition();

        var now = Date.now();
        var deltaX = event.pageX - lastPointerX;
        var deltaTime = Math.max(now - lastPointerTime, 1);
        momentumVelocity = deltaX / deltaTime;
        lastPointerX = event.pageX;
        lastPointerTime = now;
    });

    skillsCarouselWrapper.addEventListener("scroll", normalizeScrollPosition);

    skillsCarouselWrapper.addEventListener("mouseenter", function () {
        isAutoScrollPaused = true;
    });

    skillsCarouselWrapper.addEventListener("mouseleave", function () {
        isAutoScrollPaused = false;
        startAutoScroll();
    });

    startAutoScroll();
});
