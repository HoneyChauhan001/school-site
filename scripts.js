document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic form validation
    if (name === '' || email === '' || message === '') {
        document.getElementById('formMessage').innerText = 'Please fill out all fields.';
        return;
    }

    // Simulate form submission
    document.getElementById('formMessage').innerText = 'Thank you for your message, ' + name + '! We will get back to you soon.';

    // Clear the form
    document.getElementById('contactForm').reset();
});
