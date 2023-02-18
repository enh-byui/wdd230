// Get the current day of the week (0 = Sunday, 1 = Monday, etc.)
const today = new Date().getDay();

// Check if today is Monday, Tuesday, or Wednesday
if (today === 1 || today === 2 || today === 3) {
  // Create the banner element
  const banner = document.createElement('section');
  banner.classList.add('banner');
  banner.textContent = 'Join us for the Chamber of Commerce Meet and Greet on Wednesday at 7:00 p.m.';

  // Add the banner to the page
  const homePageBanner = document.querySelector('#page-title');
  homePageBanner.appendChild(banner);
}