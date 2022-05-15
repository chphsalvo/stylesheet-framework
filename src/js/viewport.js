var viewpoertEls = document.querySelectorAll('.viewport');

if (viewpoertEls) {

    var observer = new IntersectionObserver(function (entries) {
        // isIntersecting is true when element and viewport are overlapping
        // isIntersecting is false when element and viewport don't overlap

        entries.forEach((entry) => {
            if (entry.isIntersecting === true) {
                entry.target.classList.add('is-in-viewport');
            } else {
                entry.target.classList.remove('is-in-viewport');
            }
        })

    }, { threshold: [0] });

    viewpoertEls.forEach((el) => {
        observer.observe(el);
    });

};