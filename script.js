// 1
// Get modal element
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Open the modal when the button is clicked
btn.onclick = function () {
    modal.style.display = "block";
}

// Close the modal when the 'x' is clicked
span.onclick = function () {
    modal.style.display = "none";
}

// Close the modal when clicking anywhere outside of it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// 2
// Plan prices (Monthly and Annually)
const pricingData = {
    monthly: {
        premium: 2099,
        smallBusiness: 6099,
        enterprise: 8099
    },
    annually: {
        premium: 19999,
        smallBusiness: 69999,
        enterprise: 89999
    }
};

// DOM elements
const premiumPrice = document.getElementById('premium-price');
const smallBusinessPrice = document.getElementById('small-business-price');
const enterprisePrice = document.getElementById('enterprise-price');
const premiumPeriod = document.getElementById('premium-period');
const smallBusinessPeriod = document.getElementById('small-business-period');
const enterprisePeriod = document.getElementById('enterprise-period');
const annuallyBtn = document.getElementById('annually-btn');
const monthlyBtn = document.getElementById('monthly-btn');

// Function to update prices and labels
function updatePrices(planType) {
    premiumPrice.textContent = pricingData[planType].premium;
    smallBusinessPrice.textContent = pricingData[planType].smallBusiness;
    enterprisePrice.textContent = pricingData[planType].enterprise;

    const periodText = planType === 'annually' ? 'per annum' : 'per month';

    premiumPeriod.textContent = periodText;
    smallBusinessPeriod.textContent = periodText;
    enterprisePeriod.textContent = periodText;
}

// Event listeners for buttons
annuallyBtn.addEventListener('click', () => {
    updatePrices('annually');
    annuallyBtn.classList.add('active');
    monthlyBtn.classList.remove('active');
});

monthlyBtn.addEventListener('click', () => {
    updatePrices('monthly');
    monthlyBtn.classList.add('active');
    annuallyBtn.classList.remove('active');
});

// Default load as monthly
updatePrices('monthly');

// 3

const faqs = document.querySelectorAll('.faq-question');

  faqs.forEach(faq => {
    faq.addEventListener('click', () => {
      const answer = faq.nextElementSibling;
      const icon = faq.querySelector('.faq-icon');
      
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
        icon.textContent = '+';
      } else {
        answer.style.display = 'block';
        icon.textContent = '-';
      }
    });
  });

//   4
const slides = document.querySelector('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    let interval;

    function showTestimonial(index) {
      // Move the slide
      slides.style.transform = `translateX(${-index * 320}px)`; // Match the width of the cards

      // Update dots
      document.querySelector('.dot.active').classList.remove('active');
      dots[index].classList.add('active');

      // Set the current index
      currentIndex = index;
    }

    function nextTestimonial() {
      const nextIndex = (currentIndex + 1) % dots.length;
      showTestimonial(nextIndex);
    }

    function startAutoScroll() {
      interval = setInterval(nextTestimonial, 4000); // Auto scroll every 4 seconds
    }

    function stopAutoScroll() {
      clearInterval(interval);
    }

    // Manual dot navigation
    dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        stopAutoScroll();
        const index = parseInt(e.target.getAttribute('data-index'));
        showTestimonial(index);
        startAutoScroll(); // Restart auto scroll after manual selection
      });
    });

    // Start auto scroll on page load
    startAutoScroll();
