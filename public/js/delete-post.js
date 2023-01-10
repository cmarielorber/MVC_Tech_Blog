const deletePostHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
    // Gather the data from the form elements on the page
    const postID = document.getElementById('post-id').value.trim();

    if (postID) {
        const response = await fetch('/api/post', {
            method: 'delete',
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to log in');
        }
    }
};

document
    .querySelector('#delete-btn')
    .addEventListener('click', deletePostHandler);