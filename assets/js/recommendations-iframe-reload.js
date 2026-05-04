document.addEventListener("DOMContentLoaded", function () {
    var recommendationIframes = document.querySelectorAll('iframe[title="LinkedIn Recommendations"]');

    function resizeIframe(iframe) {
        if (iframe.contentWindow) {
            try {
                var doc = iframe.contentWindow.document;
                var height = Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight);
                iframe.style.position = 'static';
                iframe.style.height = (height + 20) + 'px'; // Add some buffer
                // Also adjust the wrapper if needed
                var wrapper = iframe.parentElement;
                if (wrapper && wrapper.classList.contains('iframe-wrapper')) {
                    wrapper.style.height = (height + 20) + 'px';
                    wrapper.style.paddingBottom = '0';
                }
            } catch (e) {
                // Cross-origin or other error
            }
        }
    }

    recommendationIframes.forEach(function (iframe) {
        // Resize on load
        iframe.onload = function() {
            setTimeout(function() {
                resizeIframe(iframe);
            }, 1000); // Delay to allow content to render
        };

        // Also resize on intersection if needed
        if (window.IntersectionObserver) {
            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        var src = iframe.src;
                        iframe.src = "";
                        setTimeout(function () {
                            iframe.src = src;
                        }, 100);
                        // After reload, resize
                        setTimeout(function() {
                            resizeIframe(iframe);
                        }, 1100);
                    }
                });
            }, {
                threshold: 0.3
            });

            observer.observe(iframe);
        }
    });
});
