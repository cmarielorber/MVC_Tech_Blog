const commentFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const postID = document.querySelector('input[name="post-id"]').value.trim();
  const body = document
    .querySelector('textarea[name="comment-body"]')
    .value.trim();

  if (body) {
    const response = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({ post_ID: postID, comment_text: body }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert("Failed to log in");
    }
  }
};

document
  .querySelector("#new-comment-form")
  .addEventListener("submit", commentFormHandler);
