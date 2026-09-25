---
hide:
  toc: true
---
<!-- Hero Section (Full Width) -->
<div class="hero-section" style="
  width:100vw;
  position:relative;
  left:50%;
  margin-left:-50vw;
  background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('assets/banner.jpg');
  background-position: center 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-color:#004080;
  color:white;
  text-align:center;
  padding:30px 20px;
">
  <h1 style="font-size:3.5em; font-weight:bold; margin-bottom:15px;">A320 Emulator</h1>
  <h3 style="font-size:1.8em; font-style:italic; color:#ccc; margin-bottom:40px;">
    Learning to fly has never been easier
  </h3>
  <p style="font-size:1.3em; max-width:700px; margin:0 auto 50px auto; line-height:1.8;">
    Explore the systems of the Airbus A320, the bestselling and most advanced passenger jet in history. This site provides step-by-step documentation to help you master everything from cockpit familiarization to advanced procedures.
  </p>
  <a href="getting-started/" style="
    display:inline-block;
    background-color:#005bbb;
    color:white;
    padding:14px 28px;
    border-radius:8px;
    font-size:1.3em;
    font-weight:bold;
    text-decoration:none;
    transition: background-color 0.2s ease;
  ">
    Get Started →
  </a>
</div>

<!-- Section 1 -->
<div class="section rectangle-1" style="width:100vw; position:relative; left:50%; margin-left:-50vw; background-color:#111; color:white; text-align:center; padding:100px 20px;">
  <h2 class="animated-text" style="font-size:2.5em; margin-bottom:20px;">Getting Started</h2>
  <p class="animated-text" style="font-size:1.2em; max-width:700px; margin:0 auto;">
    Learn about cockpit layout, controls, and basic startup procedures.
  </p>
</div>

<!-- Section 2 -->
<div class="section rectangle-2" style="width:100vw; background-image: url('assets/banner1.png'); background-position: center; background-repeat: no-repeat; background-size: cover; position:relative; left:50%; margin-left:-50vw; background-color:#1a1a1a; color:white; text-align:center; padding:100px 20px;">
  <h2 class="animated-text" style="font-size:2.5em; margin-bottom:20px;">Systems Overview</h2>
  <p class="animated-text" style="font-size:1.2em; max-width:700px; margin:0 auto;">
    Electrical, hydraulics, fuel, and other systems are explained in detail.
  </p>
</div>

<!-- Section 3 -->
<div class="section rectangle-3" style="width:100vw; position:relative; left:50%; margin-left:-50vw; background-color:#111; color:white; text-align:center; padding:100px 20px;">
  <h2 class="animated-text" style="font-size:2.5em; margin-bottom:20px;">Procedures</h2>
  <p class="animated-text" style="font-size:1.2em; max-width:700px; margin:0 auto;">
    Step-by-step normal, abnormal, and emergency procedures.
  </p>
</div>

<!-- Section 4 -->
<div class="section rectangle-4" style="width:100vw; background-image: url('assets/1966.png'); background-position: center; background-repeat: no-repeat; background-size: cover;position:relative; left:50%; margin-left:-50vw; background-color:#1a1a1a; color:white; text-align:center; padding:100px 20px;">
  <h2 class="animated-text" style="font-size:2.5em; margin-bottom:20px;">Tips & Tricks</h2>
  <p class="animated-text" style="font-size:1.2em; max-width:700px; margin:0 auto;">
    Learn how to operate the A320 like a pro with efficiency and realism in mind.
  </p>
</div>

<!-- Footer Banner -->
<footer class="footer-banner" style="width:100vw; position:relative; left:50%; margin-left:-50vw; background-color:#000000; color:white; padding:40px 20px;">
  <div class="footer-content" style="display:flex; justify-content:space-between; align-items:center; max-width:1200px; margin:0 auto; flex-wrap:wrap;">

    <!-- Logo -->
    <div class="footer-logo">
      <img src="assets/logo.png" alt="A320 Emulator Logo" style="height:75px;">
    </div>

    <!-- Contact Info -->
    <div class="footer-contact" style="text-align:right;">
      <h3 style="font-size:1.2em; color:#ccc; margin:0 0 5px 0;">Contact:</h3>
      <p style="margin:0;"><a href="mailto:daniel56huang@gmail.com" style="color:#bbb; text-decoration:none;">daniel56huang@gmail.com</a></p>
    </div>

    <!-- Copyright -->
    <div class="footer-copy" style="flex-basis:100%; text-align:center; margin-top:20px; font-size:0.9em; color:#777;">
      © 2025 A320 Emulator. All rights reserved. Simulation purposes only.
    </div>
  </div>
</footer>

<!-- Section 5 (fixed markup) -->
<div class="section rectangle-5" style="width:100vw; position:relative; left:50%; margin-left:-50vw; background-color:#212536; color:white; text-align:center; padding:10px 20px;">
  <!-- optional content -->
</div>

<!-- Single parallax script (one copy only) -->

<script>
(function() {
  const hero = document.querySelector('.hero-section');
  if (!hero) return;

  function setHeroPos() {
    const scrollY = window.scrollY || window.pageYOffset;
    hero.style.backgroundPosition = `center ${scrollY * 0.5}px`;
  }

  // rAF-throttled scroll handler
  let ticking = false;
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        setHeroPos();
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('load', setHeroPos);
  // also set immediately
  setHeroPos();
})();
</script>
<!-- Hero parallax script -->
<script>
  function updateHeroBackground() {
    const hero = document.querySelector('.hero-section');
    const scrollY = window.scrollY;
    hero.style.backgroundPosition = `center ${scrollY * 0.5}px`;
  }

  window.addEventListener('scroll', () => {
    requestAnimationFrame(updateHeroBackground);
  });

  window.addEventListener('load', updateHeroBackground);
</script>

<!-- Scroll-triggered text animation -->
<script>
document.addEventListener('DOMContentLoaded', () => {
  const animatedTexts = document.querySelectorAll('.animated-text');

  const observerOptions = {
    root: null, // viewport
    rootMargin: '0px 0px -25% 0px', // trigger when element is within bottom quarter
    threshold: 0 // trigger as soon as any part intersects
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target); // trigger only once
      }
    });
  }, observerOptions);

  animatedTexts.forEach(el => observer.observe(el));
});
</script>


