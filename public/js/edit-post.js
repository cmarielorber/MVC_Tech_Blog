const editFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
    // Gather the data from the form elements on the page
    const titlePost = document.getElementById('post-title').value.trim();
    const bodyPost = document.getElementById('post-body').value.trim();
    const postID = document.getElementById('post-id').value.trim();

    if (bodyPost) {
        const response = await fetch(`/api/post/${postID}`, {
            method: 'PUT',
            body: JSON.stringify({
                title: titlePost,
                body: bodyPost,
            }),
            headers: {'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to update');
        }
    }
};

document
    .querySelector('#edit-post-form')
    .addEventListener('submit', editFormHandler);