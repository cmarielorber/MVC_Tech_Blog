const signupFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();

    // Gather the data from the form elements on the page
    const userName = document.querySelector('#username-input-signup').value.trim();
    const passWord = document.querySelector('#password-input-signup').value.trim();

    if (signup) {
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({ username: userName.value, password: passWord.value  }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to log in');
        }
    }
};

document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);