// Load the ads data from the JSON file
fetch('data/members.json')
  .then(response => response.json())
  .then(data => {
    //Filter membership
    const filteredAds = data.members.filter(ad => ad.membership === 'Gold' || ad.membership === 'Silver');
    // Shuffle the array of ad objects
    const shuffledAds = shuffle(filteredAds);
    
    // Select the first 3 ads from the shuffled array
    const selectedAds = shuffledAds.slice(0, 3);

    // Create HTML elements for each selected ad
    const adElements = selectedAds.map(ad => {

      // Create the ad container element
      const adContainer = document.createElement('div');
      adContainer.classList.add('announcement');

      // Create the ad div title container
      const adContainerHeader = document.createElement('div');
      adContainerHeader.classList.add('announcement-header');
      adContainer.appendChild(adContainerHeader);

      // Create the ad title element
      const adTitle = document.createElement('h3');
      adTitle.textContent = ad.name;
      adContainerHeader.appendChild(adTitle);

      // Create the ad div body container
      const adContainerBody = document.createElement('div');
      adContainerBody.classList.add('announcement-body');
      adContainer.appendChild(adContainerBody);

      // Create the ad image element
      const adImage = document.createElement('img');
      adImage.classList.add('announcement-image');
      adImage.src = ad.logo;
      adContainerBody.appendChild(adImage);
      
      // Create the ad description element
      const adWebsite = document.createElement('p');
      adWebsite.textContent = ad.website;
      adContainerBody.appendChild(adWebsite);

      // Create the ad services element
      const adService = document.createElement('p');
      adService.textContent = `Services: ${ad.service}`;
      adContainerBody.appendChild(adService);

      // Create the ad description element
      const adLevel = document.createElement('p');
      adLevel.textContent = `Membership Level: ${ad.membership}`;
      adContainerBody.appendChild(adLevel);
      
      return adContainer;
    });
    
    // Add the ad elements to the ads container on the page
    const adsContainer = document.getElementById('announcements-card');
    adElements.forEach(adElement => adsContainer.appendChild(adElement));
  })
  .catch(error => console.error(error));

// Helper function to shuffle an array
function shuffle(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
