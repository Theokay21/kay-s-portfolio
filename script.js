document.addEventListener('DOMContentLoaded', function() {
      // Loading Screen
      const loadingScreen = document.querySelector('.loading');
      
      // Hide loading screen when page is fully loaded
      window.addEventListener('load', function() {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.visibility = 'hidden';
      });

      // Mobile Navigation
      const hamburger = document.querySelector('.hamburger');
      const navLinks = document.querySelector('.nav-links');
      
      hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
      });

      // Close mobile menu when clicking links
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          navLinks.classList.remove('active');
        });
      });

      // Sticky Header
      const header = document.getElementById('header');
      
      window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
          header.style.backgroundColor = 'rgba(15, 15, 27, 0.95)';
          header.style.padding = '15px 0';
          header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
          header.style.backgroundColor = 'rgba(15, 15, 27, 0.9)';
          header.style.padding = '20px 0';
          header.style.boxShadow = 'none';
        }
      });

      // Portfolio Filtering
      const filterBtns = document.querySelectorAll('.filter-btn');
      const portfolioItems = document.querySelectorAll('.portfolio-item');
      
      filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          // Remove active class from all buttons
          filterBtns.forEach(b => b.classList.remove('active'));
          
          // Add active class to clicked button
          this.classList.add('active');
          
          const filter = this.getAttribute('data-filter');
          
          portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
              item.style.display = 'block';
              setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
              }, 50);
            } else {
              item.style.opacity = '0';
              item.style.transform = 'translateY(20px)';
              setTimeout(() => {
                item.style.display = 'none';
              }, 400);
            }
          });
        });
      });

      // Scroll to Top Button
      const scrollTopBtn = document.querySelector('.scroll-top');
      
      window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
          scrollTopBtn.classList.add('active');
        } else {
          scrollTopBtn.classList.remove('active');
        }
      });
      
      scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });

      // Form Submission
      const contactForm = document.getElementById('contactForm');
      
      if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Show loading state
          const submitBtn = this.querySelector('button[type="submit"]');
          const originalText = submitBtn.innerHTML;
          submitBtn.innerHTML = 'Sending...';
          submitBtn.disabled = true;
          
          // Simulate form submission
          setTimeout(() => {
            alert('Message sent successfully!');
            this.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
          }, 1500);
        });
      }
    });