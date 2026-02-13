document.addEventListener("DOMContentLoaded", function () {
    var recommendationsIframe = document.querySelector('iframe[title="LinkedIn Recommendations"]');

    if (recommendationsIframe && window.IntersectionObserver) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var src = recommendationsIframe.src;
                    recommendationsIframe.src = "";
                    setTimeout(function () {
                        recommendationsIframe.src = src;
                    }, 100);
                }
            });
        }, {
            threshold: 0.3
        });

        observer.observe(recommendationsIframe);
    }
});
