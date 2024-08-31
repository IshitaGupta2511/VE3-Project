document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Extract form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display a response message
    document.getElementById('responseMessage').innerText = `Thank you, ${name}! We have received your message and will get back to you at ${email}.`;
});

