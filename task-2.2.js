document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like-btn');
    const commentButtons = document.querySelectorAll('.comment-btn');
    const shareButtons = document.querySelectorAll('.share-btn');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Liked!');
        });
    });

    commentButtons.forEach(button => {
        button.addEventListener('click', () => {
            const comment = prompt('Enter your comment:');
            if (comment) {
                alert('Comment added: ' + comment);
            }
        });
    });

    shareButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Shared!');
        });
    });
});
