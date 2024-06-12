const baseUrl = "https://lowcodedev.azurewebsites.net/api"; 
const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiZW1haWwiOiJ0aGlhZ2FyYWphbkBpbm5jcmV3aW4uY29tIiwiaWQiOiIxIiwiZXhwIjoxNzE4MjAxMDYwfQ.fCUCo9oGGwJq-JA9uAaavdgbtQhwy3ULF_IpqiS1h9E";
const userId = 1;
const projectId = 124;

function contact(event, id) {
    event.preventDefault(); 
    console.log(id, "this is the id of form passed!!!");

    const form = document.getElementById(id);
    const firstName = form.querySelector('#firstName').value;
    const lastName = form.querySelector('#lastName').value;
    const email = form.querySelector('#email').value;
    const message = form.querySelector('#message').value;

    if (firstName && lastName && email && message) {
        console.log(firstName, "First Name");
        console.log(lastName, "Last Name");
        console.log(email, "Email");
        console.log(message, "Message");

        sendEmail({
            firstName,
            lastName,
            email,
            message
        });
    } else {
        displayMessage('Please fill in all fields.', 'error');
    }
}

function sendEmail(data) {
    const route = `/${userId}/Project/${projectId}/ContatUs`;;
    const url = `${baseUrl}${route}`;
    
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            displayMessage('Email sent successfully!', 'success');
        } else {
            displayMessage(data.error || 'An error occurred.', 'error');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        displayMessage('An error occurred.', 'error');
    });
}

function displayMessage(message, type) {
    const responseMessageDiv = document.getElementById('responseMessage');
    responseMessageDiv.textContent = message;
    if (type === 'success') {
        responseMessageDiv.style.color = 'green';
    } else {
        responseMessageDiv.style.color = 'red';
    }
}