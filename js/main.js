document.addEventListener('DOMContentLoaded', () => {

  // === NAVEGACIÓN Y MENÚ MÓVIL ===
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .btn-mobile-login, .btn-mobile-app');
  const header = document.querySelector('.site-header');

  const heroVideo = document.getElementById('hero-video');
  const heroSection = document.querySelector('.hero-section');

  function openMobileMenu() {
    if (!hamburgerBtn || !mobileDrawer) return;
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    mobileDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (!hamburgerBtn || !mobileDrawer) return;
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    mobileDrawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn && mobileDrawer) {
    hamburgerBtn.addEventListener('click', () => {
      const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
        closeMobileMenu();
        hamburgerBtn.focus();
      }
    });
  }

  // === EFECTO SCROLL EN CABECERA ===
  function handleHeaderScroll() {
    if (!header) return;
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // === PREFERENCIA DE MOVIMIENTO REDUCIDO Y VIDEO HERO ===
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (heroVideo) {
    if (prefersReducedMotion) {
      heroVideo.pause();
    } else if ('IntersectionObserver' in window && heroSection) {
      const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            heroVideo.play().catch(() => {});
          } else {
            heroVideo.pause();
          }
        });
      }, {
        threshold: 0.15
      });

      videoObserver.observe(heroSection);
    }
  }

  // [PUNTO DE INSERCIÓN PARA AVANCES 2, 3, 4 y 5]

});