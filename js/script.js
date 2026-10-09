const menuButton = document.querySelector('.menu-toggle');
const siteNavigation = document.querySelector('.site-nav');

const closeDropdowns = (except = null) => {
  document.querySelectorAll('.nav-dropdown').forEach((dropdown) => {
    if (dropdown === except) return;
    dropdown.classList.remove('is-open');
    dropdown.querySelector('.nav-dropdown-toggle')?.setAttribute('aria-expanded', 'false');
  });
};

if (menuButton && siteNavigation) {
  menuButton.addEventListener('click', () => {
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isExpanded));
    menuButton.setAttribute('aria-label', isExpanded ? 'Open navigation menu' : 'Close navigation menu');
    siteNavigation.classList.toggle('is-open', !isExpanded);
    if (isExpanded) closeDropdowns();
  });
}

document.querySelectorAll('.nav-dropdown-toggle').forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const dropdown = toggle.closest('.nav-dropdown');
    if (!dropdown) return;
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    closeDropdowns(dropdown);
    dropdown.classList.toggle('is-open', !isExpanded);
    toggle.setAttribute('aria-expanded', String(!isExpanded));
  });
});

document.addEventListener('click', (event) => {
  if (!(event.target instanceof Element) || !event.target.closest('.nav-dropdown')) {
    closeDropdowns();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  const openDropdown = document.querySelector('.nav-dropdown.is-open');
  if (!openDropdown) return;
  closeDropdowns();
  openDropdown.querySelector('.nav-dropdown-toggle')?.focus();
});

const enquiryForm = document.querySelector('#enquiry-form');
const formStatus = document.querySelector('#form-status');

if (enquiryForm && formStatus) {
  enquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formStatus.textContent = 'Thanks for sharing your thoughts with me. This demo form does not send messages yet; please call or email me so I can help with your flowers.';
    enquiryForm.reset();
  });
}