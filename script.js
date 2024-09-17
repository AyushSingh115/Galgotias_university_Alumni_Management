document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Capture form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const event = document.getElementById('event').value;
  const date = document.getElementById('date').value;
  const message = document.getElementById('message').value;

  // Prepare data to be sent
  const data = {
      name: name,
      email: email,
      event: event,
      date: date,
      message: message
  };

  // Make a POST request to the server
  fetch('/api/book-event', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
      if(data.success) {
          document.getElementById('response').textContent = 'Booking successful!';
      } else {
          document.getElementById('response').textContent = 'Booking failed. Please try again.';
      }
  })
//.catch(error => {
    //  document.getElementById('response').textContent = 'Error: ' + error.message;
  });
});