document.addEventListener('DOMContentLoaded', () => {

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

  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if (revealElements.length > 0) {
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealElements.forEach(el => el.classList.add('is-revealed'));
    } else {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      });

      revealElements.forEach(el => revealObserver.observe(el));
    }
  }

  const tabVideoProduct = document.getElementById('tab-video-product');
  const tabVideoTeam = document.getElementById('tab-video-team');
  const panelVideoProduct = document.getElementById('panel-video-product');
  const panelVideoTeam = document.getElementById('panel-video-team');

  function switchVideoTab(activeTab) {
    if (!tabVideoProduct || !tabVideoTeam || !panelVideoProduct || !panelVideoTeam) return;

    if (activeTab === 'team') {
      tabVideoTeam.classList.add('active');
      tabVideoTeam.setAttribute('aria-selected', 'true');
      tabVideoProduct.classList.remove('active');
      tabVideoProduct.setAttribute('aria-selected', 'false');

      panelVideoTeam.classList.add('active');
      panelVideoTeam.removeAttribute('hidden');
      panelVideoProduct.classList.remove('active');
      panelVideoProduct.setAttribute('hidden', '');
    } else {
      tabVideoProduct.classList.add('active');
      tabVideoProduct.setAttribute('aria-selected', 'true');
      tabVideoTeam.classList.remove('active');
      tabVideoTeam.setAttribute('aria-selected', 'false');

      panelVideoProduct.classList.add('active');
      panelVideoProduct.removeAttribute('hidden');
      panelVideoTeam.classList.remove('active');
      panelVideoTeam.setAttribute('hidden', '');
    }
  }

  if (tabVideoProduct && tabVideoTeam) {
    tabVideoProduct.addEventListener('click', () => switchVideoTab('product'));
    tabVideoTeam.addEventListener('click', () => switchVideoTab('team'));
  }

  function getTestimoniesList() {
    if (window.NoxwayI18n && typeof window.NoxwayI18n.getLocalizedTestimonies === 'function') {
      return window.NoxwayI18n.getLocalizedTestimonies();
    }
    return [
      {
        indexStr: '01',
        name: 'Jorge Luis Huamán',
        role: 'Private Security · 38 yrs old',
        quote: '“I used to leave at 6:00 a.m. dreading the desolate bus stop. Now I know which avenues are lit up and I return home without fear.”',
        location: 'Usual route: Los Olivos ⇄ Downtown Lima',
        metric: '100% of night commutes safely confirmed on time'
      },
      {
        indexStr: '02',
        name: 'Rosa Elena Paredes',
        role: 'Trusted Contact · 48 yrs old',
        quote: '“Staying awake all night waiting for news was exhausting. With the companion view, I have complete certainty my son got home safe.”',
        location: 'San Juan de Lurigancho · Mother of night worker',
        metric: '0 distress phone calls in the last 3 months'
      },
      {
        indexStr: '03',
        name: 'Valeria Ríos',
        role: 'On-Duty Nurse · 29 yrs old',
        quote: '“Finding a trustworthy open pharmacy or hot meal at 3:00 a.m. used to be impossible in Lima. The Noxway community protects all of us.”',
        location: 'Emergency Hospital · Central Lima',
        metric: 'Over 15 verified 24h services reported'
      }
    ];
  }

  let currentTestimonyIdx = 0;
  let isTransitioning = false;

  const testimonyTabs = document.querySelectorAll('.testimonial-tab-btn');
  const prevTestimonyBtn = document.getElementById('prev-testimony-btn');
  const nextTestimonyBtn = document.getElementById('next-testimony-btn');
  const testimonyCounter = document.getElementById('testimony-counter');
  const testimonyWatermark = document.getElementById('testimony-watermark');
  const testimonyQuote = document.getElementById('testimony-quote');
  const authorName = document.getElementById('author-name');
  const authorLocation = document.getElementById('author-location');
  const authorMetric = document.getElementById('author-metric');
  const testimonyMeta = document.getElementById('testimony-meta');
  const testimonialsSection = document.getElementById('comunidad');

  function updateTestimonial(newIdx, forceImmediate = false) {
    const list = getTestimoniesList();
    if (!list || !list[newIdx]) return;
    if (newIdx === currentTestimonyIdx && !forceImmediate && !isTransitioning) return;
    if (isTransitioning && !forceImmediate) return;

    const data = list[newIdx];

    testimonyTabs.forEach((tab, i) => {
      const isActive = i === newIdx;
      tab.classList.toggle('active', isActive);
      tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
      const roleEl = document.getElementById(`testimony-role-${i}`);
      if (roleEl && list[i]) {
        roleEl.textContent = list[i].role;
      }
    });

    if (testimonyCounter) {
      testimonyCounter.textContent = `${data.indexStr} / 0${list.length}`;
    }

    if (prefersReducedMotion || forceImmediate) {
      if (testimonyWatermark) testimonyWatermark.textContent = data.indexStr;
      if (testimonyQuote) testimonyQuote.textContent = data.quote;
      if (authorName) authorName.textContent = data.name;
      if (authorLocation) authorLocation.textContent = data.location;
      if (authorMetric) authorMetric.textContent = data.metric;
      currentTestimonyIdx = newIdx;
      return;
    }

    isTransitioning = true;

    if (testimonyQuote) testimonyQuote.classList.add('anim-exit');
    if (testimonyMeta) testimonyMeta.classList.add('anim-exit');
    if (testimonyWatermark) {
      testimonyWatermark.style.opacity = '0';
      testimonyWatermark.style.transform = 'translateY(-50%) scale(0.92)';
    }

    setTimeout(() => {
      if (testimonyWatermark) testimonyWatermark.textContent = data.indexStr;
      if (testimonyQuote) testimonyQuote.textContent = data.quote;
      if (authorName) authorName.textContent = data.name;
      if (authorLocation) authorLocation.textContent = data.location;
      if (authorMetric) authorMetric.textContent = data.metric;

      if (testimonyQuote) {
        testimonyQuote.classList.remove('anim-exit');
        testimonyQuote.classList.add('anim-enter');
      }

      setTimeout(() => {
        if (testimonyMeta) {
          testimonyMeta.classList.remove('anim-exit');
          testimonyMeta.classList.add('anim-enter');
        }
        if (testimonyWatermark) {
          testimonyWatermark.style.opacity = '';
          testimonyWatermark.style.transform = '';
        }
      }, 60);

      setTimeout(() => {
        if (testimonyQuote) testimonyQuote.classList.remove('anim-enter');
        if (testimonyMeta) testimonyMeta.classList.remove('anim-enter');
        isTransitioning = false;
        currentTestimonyIdx = newIdx;
      }, 480);
    }, 240);
  }

  testimonyTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const idx = parseInt(tab.getAttribute('data-index'), 10);
      updateTestimonial(idx);
    });
  });

  if (prevTestimonyBtn) {
    prevTestimonyBtn.addEventListener('click', () => {
      const list = getTestimoniesList();
      const nextIdx = (currentTestimonyIdx - 1 + list.length) % list.length;
      updateTestimonial(nextIdx);
    });
  }

  if (nextTestimonyBtn) {
    nextTestimonyBtn.addEventListener('click', () => {
      const list = getTestimoniesList();
      const nextIdx = (currentTestimonyIdx + 1) % list.length;
      updateTestimonial(nextIdx);
    });
  }

  if (testimonialsSection) {
    testimonialsSection.addEventListener('keydown', (e) => {
      const list = getTestimoniesList();
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIdx = (currentTestimonyIdx + 1) % list.length;
        updateTestimonial(nextIdx);
        testimonyTabs[nextIdx]?.focus();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIdx = (currentTestimonyIdx - 1 + list.length) % list.length;
        updateTestimonial(prevIdx);
        testimonyTabs[prevIdx]?.focus();
      }
    });
  }

  const billingMonthlyBtn = document.getElementById('billing-monthly-btn');
  const billingAnnualBtn = document.getElementById('billing-annual-btn');
  const pricingRows = document.querySelectorAll('.pricing-row');
  const summaryPlanName = document.getElementById('summary-plan-name');
  const pricingCtaText = document.getElementById('pricing-cta-text');
  const formPlanLabel = document.getElementById('form-plan-label');
  const selectedPlanInput = document.getElementById('selected-plan-input');
  const btnPricingCta = document.getElementById('btn-pricing-cta');

  let currentBillingCycle = 'monthly';

  function updatePricingDisplay() {
    const isEn = !window.NoxwayI18n || window.NoxwayI18n.getCurrentLanguage() === 'en_US';

    pricingRows.forEach(row => {
      const priceVal = row.querySelector('.price-currency-value');
      const pricePeriod = row.querySelector('.price-period');
      const priceSubtext = row.querySelector('.price-subtext');

      const isFree = row.getAttribute('data-plan-id') === 'esencial';

      if (currentBillingCycle === 'annual') {
        if (priceVal) priceVal.textContent = row.getAttribute('data-price-annual');
        if (pricePeriod) pricePeriod.textContent = isFree ? (isEn ? '/ year' : '/ año') : (isEn ? '/ month' : '/ mes');
        if (priceSubtext) priceSubtext.textContent = isEn ? row.getAttribute('data-subtext-annual') : (isFree ? 'Gratis para siempre' : (row.getAttribute('data-plan-id') === 'centinela-pro' ? 'Facturado S/. 110 al año (-25%)' : 'Facturado S/. 240 al año (-20%)'));
      } else {
        if (priceVal) priceVal.textContent = row.getAttribute('data-price-monthly');
        if (pricePeriod) pricePeriod.textContent = isEn ? '/ month' : '/ mes';
        if (priceSubtext) priceSubtext.textContent = isEn ? row.getAttribute('data-subtext-monthly') : (isFree ? 'Gratis para siempre' : (row.getAttribute('data-plan-id') === 'centinela-pro' ? 'Facturación mensual estándar' : 'Facturación mensual compartida'));
      }

      if (row.classList.contains('selected')) {
        const pName = row.getAttribute('data-plan-name');
        const pPrice = currentBillingCycle === 'annual'
          ? `${row.getAttribute('data-price-annual')} ${isEn ? '/ month' : '/ mes'}`
          : `${row.getAttribute('data-price-monthly')} ${isEn ? '/ month' : '/ mes'}`;

        const ctaPrefix = window.NoxwayI18n ? window.NoxwayI18n.getTranslation('pricing.summary_cta_prefix') : 'Get Started with ';
        if (summaryPlanName) summaryPlanName.textContent = `${pName} (${pPrice})`;
        if (pricingCtaText) pricingCtaText.textContent = `${ctaPrefix}${pName}`;
        if (formPlanLabel) formPlanLabel.textContent = `${pName} (${currentBillingCycle === 'annual' ? (isEn ? 'Annual Billing' : 'Facturación Anual') : (isEn ? 'Monthly Billing' : 'Facturación Mensual')})`;
        if (selectedPlanInput) selectedPlanInput.value = `${pName} - ${currentBillingCycle}`;
      }
    });
  }

  if (billingMonthlyBtn && billingAnnualBtn) {
    billingMonthlyBtn.addEventListener('click', () => {
      if (currentBillingCycle === 'monthly') return;
      currentBillingCycle = 'monthly';
      billingMonthlyBtn.classList.add('active');
      billingMonthlyBtn.setAttribute('aria-pressed', 'true');
      billingAnnualBtn.classList.remove('active');
      billingAnnualBtn.setAttribute('aria-pressed', 'false');
      updatePricingDisplay();
    });

    billingAnnualBtn.addEventListener('click', () => {
      if (currentBillingCycle === 'annual') return;
      currentBillingCycle = 'annual';
      billingAnnualBtn.classList.add('active');
      billingAnnualBtn.setAttribute('aria-pressed', 'true');
      billingMonthlyBtn.classList.remove('active');
      billingMonthlyBtn.setAttribute('aria-pressed', 'false');
      updatePricingDisplay();
    });
  }

  function selectPlanRow(targetRow) {
    if (!targetRow) return;
    pricingRows.forEach(row => {
      const isTarget = row === targetRow;
      row.classList.toggle('selected', isTarget);
      row.setAttribute('aria-checked', isTarget ? 'true' : 'false');
    });
    updatePricingDisplay();
  }

  pricingRows.forEach(row => {
    row.addEventListener('click', () => {
      selectPlanRow(row);
    });

    row.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        selectPlanRow(row);
      } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        const next = row.nextElementSibling;
        if (next && next.classList.contains('pricing-row')) {
          selectPlanRow(next);
          next.focus();
        }
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const prev = row.previousElementSibling;
        if (prev && prev.classList.contains('pricing-row')) {
          selectPlanRow(prev);
          prev.focus();
        }
      }
    });
  });

  if (btnPricingCta) {
    btnPricingCta.addEventListener('click', () => {
      setTimeout(() => {
        const nameField = document.getElementById('full-name');
        if (nameField) nameField.focus();
      }, 450);
    });
  }

  const faqButtons = document.querySelectorAll('.faq-question-btn');

  function closeFaqItem(btn) {
    const item = btn.closest('.faq-item');
    const panelId = btn.getAttribute('aria-controls');
    const panel = document.getElementById(panelId);
    if (!item || !panel) return;

    btn.setAttribute('aria-expanded', 'false');
    item.classList.remove('is-open');

    if (prefersReducedMotion) {
      panel.style.height = '0';
      panel.setAttribute('hidden', '');
      return;
    }

    panel.style.height = `${panel.scrollHeight}px`;
    panel.offsetHeight;
    panel.style.height = '0';

    setTimeout(() => {
      if (btn.getAttribute('aria-expanded') === 'false') {
        panel.setAttribute('hidden', '');
      }
    }, 350);
  }

  function openFaqItem(btn) {
    const item = btn.closest('.faq-item');
    const panelId = btn.getAttribute('aria-controls');
    const panel = document.getElementById(panelId);
    if (!item || !panel) return;

    faqButtons.forEach(otherBtn => {
      if (otherBtn !== btn && otherBtn.getAttribute('aria-expanded') === 'true') {
        closeFaqItem(otherBtn);
      }
    });

    btn.setAttribute('aria-expanded', 'true');
    item.classList.add('is-open');
    panel.removeAttribute('hidden');

    if (prefersReducedMotion) {
      panel.style.height = 'auto';
      return;
    }

    panel.style.height = '0';
    panel.offsetHeight;
    panel.style.height = `${panel.scrollHeight}px`;

    setTimeout(() => {
      if (btn.getAttribute('aria-expanded') === 'true') {
        panel.style.height = 'auto';
      }
    }, 350);
  }

  faqButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeFaqItem(btn);
      } else {
        openFaqItem(btn);
      }
    });

    btn.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextBtn = faqButtons[(index + 1) % faqButtons.length];
        nextBtn?.focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevBtn = faqButtons[(index - 1 + faqButtons.length) % faqButtons.length];
        prevBtn?.focus();
      }
    });
  });

  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm) {
    const fullNameInput = document.getElementById('full-name');
    const contactInfoInput = document.getElementById('contact-info');
    const roleSelect = document.getElementById('user-profile-role');
    const submitBtn = contactForm.querySelector('.btn-linear-submit');

    [fullNameInput, contactInfoInput, roleSelect].forEach(input => {
      if (!input) return;
      input.addEventListener('input', () => {
        const group = input.closest('.linear-field-group');
        if (group) group.classList.remove('has-error');
        if (formFeedback) {
          formFeedback.textContent = '';
          formFeedback.className = 'form-live-feedback';
        }
      });
      input.addEventListener('change', () => {
        const group = input.closest('.linear-field-group');
        if (group) group.classList.remove('has-error');
      });
    });

    const roleTargetLinks = document.querySelectorAll('[data-role-target]');
    roleTargetLinks.forEach(link => {
      link.addEventListener('click', () => {
        const targetRole = link.getAttribute('data-role-target');
        if (roleSelect && targetRole) {
          roleSelect.value = targetRole;
          const group = roleSelect.closest('.linear-field-group');
          if (group) group.classList.remove('has-error');
        }
      });
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let hasError = false;
      let firstInvalidInput = null;

      if (!fullNameInput || fullNameInput.value.trim().length < 2) {
        hasError = true;
        fullNameInput.closest('.linear-field-group')?.classList.add('has-error');
        if (!firstInvalidInput) firstInvalidInput = fullNameInput;
      }

      if (!contactInfoInput || contactInfoInput.value.trim().length < 5) {
        hasError = true;
        contactInfoInput.closest('.linear-field-group')?.classList.add('has-error');
        if (!firstInvalidInput) firstInvalidInput = contactInfoInput;
      }

      if (!roleSelect || !roleSelect.value) {
        hasError = true;
        roleSelect.closest('.linear-field-group')?.classList.add('has-error');
        if (!firstInvalidInput) firstInvalidInput = roleSelect;
      }

      if (hasError) {
        const errMsg = window.NoxwayI18n ? window.NoxwayI18n.getTranslation('contact.feedback_error') : 'Please fill in all required fields to request your safe access.';
        if (formFeedback) {
          formFeedback.textContent = errMsg;
          formFeedback.className = 'form-live-feedback error';
        }
        if (firstInvalidInput) firstInvalidInput.focus();
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        const submitSpan = submitBtn.querySelector('span');
        const originalText = submitSpan ? submitSpan.textContent : '';
        const loadingText = window.NoxwayI18n ? window.NoxwayI18n.getTranslation('contact.submitting') : 'Confirming access...';
        if (submitSpan) submitSpan.textContent = loadingText;

        setTimeout(() => {
          contactForm.reset();
          const normalSubmitText = window.NoxwayI18n ? window.NoxwayI18n.getTranslation('contact.submit') : (originalText || 'Join the Safe Network');
          if (submitSpan) submitSpan.textContent = normalSubmitText;
          submitBtn.disabled = false;

          const successMsg = window.NoxwayI18n ? window.NoxwayI18n.getTranslation('contact.feedback_success') : 'Welcome to Noxway’s active network!';
          if (formFeedback) {
            formFeedback.textContent = successMsg;
            formFeedback.className = 'form-live-feedback success';
            formFeedback.setAttribute('tabindex', '-1');
            formFeedback.focus();
          }
        }, 550);
      }
    });
  }

  const termsModal = document.getElementById('terms-modal');
  const openTermsBtns = document.querySelectorAll('.btn-open-terms');
  const closeTermsBtnX = document.getElementById('btn-close-modal-x');
  const closeTermsBtnBottom = document.getElementById('btn-close-modal-bottom');
  let lastActiveElement = null;

  function openTermsModal(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (!termsModal) return;
    lastActiveElement = document.activeElement;
    termsModal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    const closeBtn = termsModal.querySelector('#btn-close-modal-x');
    if (closeBtn) closeBtn.focus();
  }

  function closeTermsModal() {
    if (!termsModal) return;
    termsModal.setAttribute('hidden', '');
    document.body.style.overflow = '';
    if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
      lastActiveElement.focus();
    }
  }

  openTermsBtns.forEach(btn => {
    btn.addEventListener('click', openTermsModal);
  });

  if (closeTermsBtnX) closeTermsBtnX.addEventListener('click', closeTermsModal);
  if (closeTermsBtnBottom) closeTermsBtnBottom.addEventListener('click', closeTermsModal);

  if (termsModal) {
    termsModal.addEventListener('click', (e) => {
      if (e.target === termsModal) {
        closeTermsModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !termsModal.hasAttribute('hidden')) {
        closeTermsModal();
      }
    });
  }

  if (window.location.hash === '#terms-modal' || window.location.hash === '#terminos-modal') {
    openTermsModal();
  }

  window.addEventListener('noxway:languageChanged', (e) => {
    updateTestimonial(currentTestimonyIdx, true);
    updatePricingDisplay();
  });
});
