(function () {
  var revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  var heroBg = document.querySelector('.hero-bg-image');
  if (heroBg && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          var y = Math.min(window.scrollY, 500);
          heroBg.style.transform = 'translateY(' + (y * 0.12) + 'px) scale(1.08)';
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }
})();
