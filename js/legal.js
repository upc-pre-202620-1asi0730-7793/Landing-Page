(function () {
  'use strict';

  function initLegalLang() {
    const langToggleBtn = document.getElementById('langToggleBtn');
    const langBtns = document.querySelectorAll('.lang-btn[data-lang]');
    const homeLink = document.getElementById('homeLink');
    const blocks = document.querySelectorAll('.lang-block');
    const dualTextEls = document.querySelectorAll('[data-en][data-es]');

    const pageTitles = {
      terms: {
        en: 'Noxway | Terms of Service & Code of Ethics',
        es: 'Noxway | Términos y Condiciones y Código de Ética'
      },
      privacy: {
        en: 'Noxway | Data Privacy Policy',
        es: 'Noxway | Política de Privacidad de Datos'
      },
      accessibility: {
        en: 'Noxway | Web Accessibility Statement (WCAG 2.1 AA)',
        es: 'Noxway | Declaración de Accesibilidad Web (WCAG 2.1 AA)'
      },
      consent: {
        en: 'Noxway | Informed Consent & Companion View Protocol',
        es: 'Noxway | Consentimiento Informado y Protocolo Companion View'
      },
      security: {
        en: 'Noxway | End-to-End Encryption & Telemetry Security',
        es: 'Noxway | Cifrado de Extremo a Extremo y Seguridad de Telemetría'
      }
    };

    const pageKey = document.body.getAttribute('data-page') || '';

    function getSavedLang() {
      try {
        const saved = localStorage.getItem('noxway_lang');
        if (saved === 'es_419' || saved === 'es') {
          return 'es';
        }
        if (saved === 'en_US' || saved === 'en') {
          return 'en';
        }
      } catch (e) {}
      return 'en';
    }

    let currentLang = getSavedLang();

    function applyLanguage(lang, persist = true) {
      const normalized = (lang === 'es_419' || lang === 'es') ? 'es' : 'en';
      const storageVal = normalized === 'es' ? 'es_419' : 'en_US';

      currentLang = normalized;
      document.documentElement.lang = normalized;

      if (persist) {
        try {
          localStorage.setItem('noxway_lang', storageVal);
        } catch (e) {}
      }

      blocks.forEach((block) => {
        const blockLang = block.getAttribute('data-lang');
        block.classList.toggle('active', blockLang === normalized);
      });

      dualTextEls.forEach((el) => {
        const text = el.getAttribute(normalized === 'es' ? 'data-es' : 'data-en');
        if (text) {
          el.textContent = text;
        }
      });

      if (langToggleBtn) {
        const badgeEn = langToggleBtn.querySelector('.lang-en');
        const badgeEs = langToggleBtn.querySelector('.lang-es');
        if (badgeEn) badgeEn.classList.toggle('active', normalized === 'en');
        if (badgeEs) badgeEs.classList.toggle('active', normalized === 'es');
        langToggleBtn.setAttribute(
          'aria-label',
          normalized === 'en' ? 'Switch language to Spanish' : 'Cambiar idioma a Inglés'
        );
      }

      langBtns.forEach((btn) => {
        const target = btn.getAttribute('data-lang');
        const isActive =
          (normalized === 'en' && (target === 'en' || target === 'en_US')) ||
          (normalized === 'es' && (target === 'es' || target === 'es_419'));
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      });

      if (homeLink) {
        homeLink.textContent = normalized === 'en' ? '← Back to Home' : '← Volver al Inicio';
      }

      if (pageKey && pageTitles[pageKey] && pageTitles[pageKey][normalized]) {
        document.title = pageTitles[pageKey][normalized];
      }
    }

    if (langToggleBtn) {
      langToggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const nextLang = currentLang === 'en' ? 'es' : 'en';
        applyLanguage(nextLang, true);
      });
    }

    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.lang-btn[data-lang]');
      if (btn) {
        const target = btn.getAttribute('data-lang');
        if (target) {
          applyLanguage(target, true);
        }
      }
    });

    applyLanguage(currentLang, false);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLegalLang);
  } else {
    initLegalLang();
  }
})();
