document.addEventListener('DOMContentLoaded', function() {
    const currentUrl = new URL(window.location.href);
    const searchParams = new URLSearchParams(currentUrl.search);
    const blogId = searchParams.get("id");

    fetch(`https://my-brand-manzi-backend.onrender.com/api/blogs/${blogId}/comments`)
        .then(response => response.json())
        .then(data => {
            const commentsBody = document.getElementById('comments-body');
            // Clear existing comments
            commentsBody.innerHTML = '';
            console.log(blogId);

            // Add new comments
            data.forEach(comment => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${comment.email}</td>
                    <td>${comment.comment}</td>
                `;
                commentsBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching comments:', error);
        });
});
