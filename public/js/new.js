const newFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();

    // Gather the data from the form elements on the page
    const title = document.querySelector('#input[name="post-title"]').value.trim();
    const body = document.querySelector('#textarea[name="post-body').value.trim();
    const token = localStorage.getItem('token');

    if (body) {
        const response = await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({ title, body }),
            headers: { 'Content-Type': 'application/json', authorization: `Bearer ${token}` },
        });
        if (response.ok) {
            document.location.replace("/dashboard");
        } else {
            alert('Failed to log in');
        }
    }
};

document
    .querySelector('#new-post-form')
    .addEventListener('submit', newFormHandler);