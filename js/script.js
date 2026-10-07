const menuButton = document.querySelector('.menu-toggle');
const siteNavigation = document.querySelector('.site-nav');

if (menuButton && siteNavigation) {
  menuButton.addEventListener('click', () => {
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isExpanded));
    menuButton.setAttribute('aria-label', isExpanded ? 'Open navigation menu' : 'Close navigation menu');
    siteNavigation.classList.toggle('is-open', !isExpanded);
  });
}

const enquiryForm = document.querySelector('#enquiry-form');
const formStatus = document.querySelector('#form-status');

if (enquiryForm && formStatus) {
  enquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formStatus.textContent = 'Thanks for your enquiry. This demo form does not send messages; please contact us by phone or email.';
    enquiryForm.reset();
  });
}