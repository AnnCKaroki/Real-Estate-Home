document.addEventListener('DOMContentLoaded', function() {
  // 1. Fetch data from db.json
  fetch('db.json')
    .then(response => response.json())
    .then(data => {
      // 2. Filter only featured properties
      const featuredProperties = data.properties.filter(property => property.featured);

      // 3. Display the filtered properties
      displayProperties(featuredProperties);
    })
    .catch(error => console.error('Error loading properties:', error));

  // 4. Function to create and display property cards
  function displayProperties(properties) {
    const container = document.getElementById('propertyContainer');

    // 5. Clear previous content (if any)
    container.innerHTML = '';

    // 6. Loop through each property
    properties.forEach(property => {
      // 7. Create card element
      const card = document.createElement('div');
      card.className = 'property-card';

      // 8. Create HTML content for the card
      card.innerHTML = `
  <img src="assets/${property.image}" alt="${property.title}" class="property-image">
  <div class="property-info">
    <h3>${property.title}</h3>
    <p class="property-address">${property.address}</p>
    <p class="property-price">${property.price}</p>
    <div class="property-features">
      <div class="feature">🛏 <span>${property.bedrooms} Br</span></div>
      <div class="feature">🚿 <span>${property.bathrooms} Ba</span></div>
      <div class="feature">📏 <span>${property.area}</span></div>
      ${property.garage ? `<div class="feature">🚗 <span>${property.garage} Gr</span></div>` : ''}
    </div>
  </div>
`;


      // 9. Add card to container
      container.appendChild(card);
    });
  }
});
