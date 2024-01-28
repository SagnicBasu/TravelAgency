
// Menu page script
const vegCards = [
    {
      name: 'Veg Starter 1',
      price: 50,
      image: 'veg-starter-1.jpg'
    },
    // Add more veg cards here
  ];
  
  const nonVegCards = [
    {
      name: 'Non-Veg Starter 1',
      price: 75,
      image: 'non-veg-starter-1.jpg'
    },
    // Add more non-veg cards here
  ];
  
  function createCard(cardData, cardType) {
    const card = document.createElement('div');
    card.classList.add('card');
  
    const image = document.createElement('img');
    image.src = cardData.image;
    card.appendChild(image);
  
    const name = document.createElement('h3');
    name.textContent = cardData.name;
    card.appendChild(name);
  
    const price = document.createElement('p');
    price.textContent = `₹ ${cardData.price}`;
    card.appendChild(price);
  
    if (cardType === 'menu') {
      document.querySelector('.card-container').appendChild(card);
    } else if (cardType === 'booking') {
      // Add the card to the booking page here
    }
  }
  
  vegCards.forEach(cardData => createCard(cardData, 'menu'));
  nonVegCards.forEach(cardData => createCard(cardData, 'menu'));
  
  // Booking page script
  document.querySelector('#booking-form').addEventListener('submit', e => {
    e.preventDefault();
  
    // Get form data and send it to the server here
  
    alert('Your booking has been submitted!');
  });

  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 0);
  });

  