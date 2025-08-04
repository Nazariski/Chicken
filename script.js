// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const navMenu = document.getElementById("navMenu")

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active")

      // Toggle icon
      const icon = mobileMenuBtn.querySelector("i")
      if (navMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-times")
      } else {
        icon.classList.remove("fa-times")
        icon.classList.add("fa-bars")
      }
    })

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll(".nav-link")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active")
        const icon = mobileMenuBtn.querySelector("i")
        icon.classList.remove("fa-times")
        icon.classList.add("fa-bars")
      })
    })

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
      if (!navMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
        navMenu.classList.remove("active")
        const icon = mobileMenuBtn.querySelector("i")
        icon.classList.remove("fa-times")
        icon.classList.add("fa-bars")
      }
    })
  }
})

// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]')
  anchorLinks.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
})


// Add scroll-to-top functionality
function addScrollToTop() {
  // Create scroll to top button
  const scrollBtn = document.createElement("button")
  scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>'
  scrollBtn.className = "scroll-to-top"
  scrollBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background: #3b82f6;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    z-index: 1000;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  `

  document.body.appendChild(scrollBtn)

  // Show/hide button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollBtn.style.display = "block"
    } else {
      scrollBtn.style.display = "none"
    }
  })

  // Scroll to top when clicked
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // Add hover effect
  scrollBtn.addEventListener("mouseenter", function () {
    this.style.background = "#1d4ed8"
    this.style.transform = "scale(1.1)"
  })

  scrollBtn.addEventListener("mouseleave", function () {
    this.style.background = "#3b82f6"
    this.style.transform = "scale(1)"
  })
}

// Initialize scroll to top button
document.addEventListener("DOMContentLoaded", addScrollToTop)

// Add fade-in animation for cards
function addFadeInAnimation() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe all cards and sections
  const animatedElements = document.querySelectorAll(
    ".feature-card, .member-card, .skill-card, .achievement-item, .impression-card, .timeline-item",
  )

  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
}

// Initialize fade-in animations
document.addEventListener("DOMContentLoaded", addFadeInAnimation)

// Add form validation function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

// Add print functionality
function addPrintStyles() {
  const printStyles = `
    @media print {
      .header, .footer, .back-link, .mobile-menu-btn, .scroll-to-top {
        display: none !important;
      }
      
      body {
        background: white !important;
        color: black !important;
      }
      
      .feature-card, .member-card, .skill-card, .impression-card {
        break-inside: avoid;
        box-shadow: none !important;
        border: 1px solid #ddd;
      }
      
      .page-header h2 {
        color: black !important;
      }
    }
  `

  const styleSheet = document.createElement("style")
  styleSheet.textContent = printStyles
  document.head.appendChild(styleSheet)
}

// Initialize print styles
document.addEventListener("DOMContentLoaded", addPrintStyles)
