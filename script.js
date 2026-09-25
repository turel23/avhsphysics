/* =========================================================================
   AVHS Physics Club
   1. Scroll-linked hero → top bar collapse
   2. Scroll-triggered section reveals
   ========================================================================= */

(function () {
  'use strict';

  /* ---------------------------------------------------------------------
     0. Hero quote

     Add, remove or reword freely — the rotation picks up whatever is here.
     --------------------------------------------------------------------- */

  var QUOTES = [
    ['We must know. We will know.', 'David Hilbert'],
    ['The universe is under no obligation to make sense to you.', 'Neil deGrasse Tyson'],
    ['Not only is the universe stranger than we imagine, it is stranger than we can imagine.', 'Arthur Eddington'],
    ['If your experiment needs statistics, you ought to have done a better experiment.', 'Ernest Rutherford'],
    ["If we knew what we were doing, it wouldn't be called research, would it?", 'Albert Einstein'],
    ["A physicist is just an atom's way of looking at itself.", 'Niels Bohr'],
    ['God does not play dice with the universe.', 'Albert Einstein'],
    ['Nothing in life is to be feared, it is only to be understood.', 'Marie Curie'],
    ['The first principle is that you must not fool yourself — and you are the easiest person to fool.', 'Richard Feynman'],
    ['I think I can safely say that nobody understands quantum mechanics.', 'Richard Feynman'],
    ['Anyone who is not shocked by quantum theory has not understood it.', 'Niels Bohr'],
    ['We are a way for the cosmos to know itself.', 'Carl Sagan'],
    ['Look up at the stars and not down at your feet.', 'Stephen Hawking'],
    ['Somewhere, something incredible is waiting to be known.', 'Carl Sagan']
  ];

  var quoteBox = document.getElementById('hero-quote');

  if (quoteBox && QUOTES.length > 1) {
    // Remember the last one so a reload never repeats the quote you just read.
    var previous = -1;
    try { previous = parseInt(sessionStorage.getItem('avhs-quote'), 10); } catch (e) {}

    var pick = Math.floor(Math.random() * QUOTES.length);
    if (pick === previous) pick = (pick + 1) % QUOTES.length;

    try { sessionStorage.setItem('avhs-quote', String(pick)); } catch (e) {}

    quoteBox.querySelector('.quote-text').textContent = QUOTES[pick][0];
    quoteBox.querySelector('.quote-author').textContent = QUOTES[pick][1];
  }

  /* ---------------------------------------------------------------------
     1. Hero collapse

     The hero is position:fixed and .hero-spacer holds its place in the flow.
     We turn scroll position into a single 0 → 1 number and hand it to CSS as
     --p; every size, position and opacity in the hero is a calc() off it.
     --------------------------------------------------------------------- */

  var hero = document.getElementById('hero');
  var spacer = document.getElementById('hero-spacer');

  if (hero && spacer) {
    var distance = 1;   // scroll travel from full hero to bar
    var ticking = false;
    var last = -1;

    function barHeight() {
      var raw = getComputedStyle(hero).getPropertyValue('--bar');
      var px = parseFloat(raw);
      return isNaN(px) ? 76 : px;
    }

    function measure() {
      distance = Math.max(spacer.offsetHeight - barHeight(), 1);
      apply();
    }

    function apply() {
      var y = window.scrollY || window.pageYOffset || 0;
      var p = y / distance;
      if (p < 0) p = 0;
      if (p > 1) p = 1;

      if (p !== last) {
        hero.style.setProperty('--p', p.toFixed(4));
        // Past this point the tagline and scroll cue have fully faded; the
        // class takes them out of the tab order too.
        hero.classList.toggle('is-bar', p > 0.55);
        last = p;
      }
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(apply);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure);
    window.addEventListener('orientationchange', measure);
    window.addEventListener('load', measure);
    measure();
  }

  /* ---------------------------------------------------------------------
     2. Reveal on scroll
     --------------------------------------------------------------------- */

  var targets = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    // No observer support: just show everything.
    Array.prototype.forEach.call(targets, function (el) {
      el.classList.add('in-view');
    });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);   // reveal once, then stop watching
        }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0 });

    Array.prototype.forEach.call(targets, function (el) {
      observer.observe(el);
    });
  }

  /* ---------------------------------------------------------------------
     3. Mobile menu
     --------------------------------------------------------------------- */

  var toggle = document.getElementById('nav-toggle');
  var menu = document.getElementById('mobile-menu');

  if (toggle && menu) {
    var setMenu = function (open) {
      menu.hidden = !open;
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      // Stop the page scrolling behind the overlay.
      document.body.style.overflow = open ? 'hidden' : '';
      if (!open) toggle.focus();
    };

    toggle.addEventListener('click', function () {
      setMenu(menu.hidden);
    });

    // Tapping a link jumps to the section, so close up behind it.
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' || e.target === menu) setMenu(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !menu.hidden) setMenu(false);
    });

    // Leaving the narrow breakpoint with the menu open would strand the
    // overlay over a page whose toggle button is no longer visible.
    window.addEventListener('resize', function () {
      if (!menu.hidden && window.innerWidth > 720) setMenu(false);
    });
  }

  /* ---------------------------------------------------------------------
     4. Odds and ends
     --------------------------------------------------------------------- */

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
