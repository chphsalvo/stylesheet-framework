document.querySelectorAll('[data-target]').forEach(trigger => {
    trigger.addEventListener('click', function () {
        const selectors = this.getAttribute('data-target').split(',').map(s => s.trim());
        const className = this.getAttribute('data-class') || 'open';
        selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(targetEl => {
                targetEl.classList.toggle(className);
            });
        });
    });
});

document.querySelectorAll('[data-scroll]').forEach(trigger => {
  trigger.addEventListener('click', function() {
    const selectors = this.getAttribute('data-scroll').split(',').map(s => s.trim());
    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(targetEl => {

        const rootStyles = getComputedStyle(document.documentElement);
        const offsetPx = rootStyles.getPropertyValue('--scroll-offset').trim();
        let offset = 0;
        if (offsetPx) { offset = parseInt(offsetPx.replace('px', ''), 10) || 0; };
        const y = targetEl.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({ top: y, behavior: 'smooth' });
      });
    });
  });
});