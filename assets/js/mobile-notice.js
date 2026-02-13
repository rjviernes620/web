document.addEventListener("DOMContentLoaded", function () {
    var mobileNotice = document.getElementById("mobileNotice");
    var mobileNoticeDismiss = document.getElementById("mobileNoticeDismiss");
    var isMobile = window.matchMedia && window.matchMedia("(max-width: 767px)").matches;
    var isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (mobileNotice && (isMobile || isTouchDevice)) {
        mobileNotice.classList.add("is-visible");
        if (mobileNoticeDismiss) {
            mobileNoticeDismiss.addEventListener("click", function () {
                mobileNotice.classList.remove("is-visible");
            });
        }
    }
});
