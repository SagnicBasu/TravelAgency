// Get form elements
const bookingForm = document.querySelector('#booking-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const dateInput = document.querySelector('#date');
const timeInput = document.querySelector('#time');
const peopleInput = document.querySelector('#people');

// Function to validate form input
function validateForm() {
  // Check if all inputs are filled
  if (
    nameInput.value === '' ||
    emailInput.value === '' ||
    phoneInput.value === '' ||
    dateInput.value === '' ||
    timeInput.value === '' ||
    peopleInput.value === ''
  ) {
    alert('Please fill in all fields.');
    return false;
  }

  // Check if email is valid
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(emailInput.value)) {
    alert('Please enter a valid email address.');
    return false;
  }

  // Check if phone number is valid
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phoneInput.value)) {
    alert('Please enter a valid phone number.');
    return false;
  }

  // Check if date is in the future
  const today = new Date();
  const selectedDate = new Date(dateInput.value);
  if (selectedDate < today) {
    alert('Please select a date in the future.');
    return false;
  }

  // Check if time is after current time
  const currentTime = new Date();
  const selectedTime = new Date();
  selectedTime.setHours(timeInput.value.split(':')[0]);
  selectedTime.setMinutes(timeInput.value.split(':')[1]);
  if (selectedTime <= currentTime) {
    alert('Please select a time after the current time.');
    return false;
  }

  // Check if number of people is valid
  if (peopleInput.value < 1) {
    alert('Please enter a valid number of people.');
    return false;
  }

  // If all checks pass, submit the form
  return true;
}

// Function to submit form data
function submitFormData() {
  // Collect form data
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    date: dateInput.value,
    time: timeInput.value,
    people: peopleInput.value
  };

  // Send form data to server
  // You can use fetch API, axios, or any other HTTP request library
  // For example:
  fetch('/api/booking', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.json())
    .then(data => {
      // Handle response from server
      if (data.success) {
        alert('Your booking has been submitted!');
      } else {
        alert('There was an error submitting your booking.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was an error submitting your booking.');
    });
}

// Add event listener to form
bookingForm.addEventListener('submit', e => {
  e.preventDefault();

  // Validate form input
  if (validateForm()) {
    // Submit form data
    submitFormData();
  }
});

window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 0);
});