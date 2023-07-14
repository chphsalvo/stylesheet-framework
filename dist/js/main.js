
var viewportEls = document.querySelectorAll('.viewport');

if (viewportEls.length > 0) {

    var observer = new IntersectionObserver(function (entries) {
        // isIntersecting is true when element and viewport are overlapping
        // isIntersecting is false when element and viewport don't overlap

        entries.forEach(function (entry) {
            entry.target.classList.toggle('is-in-viewport', entry.isIntersecting);
        });
        
    }, { threshold: [0] }); // rootMargin: half ? '0px 0px -50% 0px' : '0px'

    viewportEls.forEach(function (el) {
        observer.observe(el);
    });

};
//# sourceMappingURL=main.js.map
