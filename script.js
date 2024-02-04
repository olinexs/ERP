console.log('Script loaded');
function login(event) {
    event.preventDefault(); // Prevent default form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Create an object to send to the server
    const data = {
        username: username,
        password: password
    };

    // Use fetch API to send a POST request to the server
    fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
    // Handle the response from the server
    console.log(data);

    if (data.message === 'Login successful') {
        // Redirect to masuk.html on successful login
        window.location.href = 'masuk.html';
    } else {
        alert(data.error); // Display an error message for unsuccessful login
    }
    })
    .catch((error) => {
    console.error('Error:', error);
    });
}
