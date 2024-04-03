
    let urlParams = new URLSearchParams(window.location.search);
    let postId = urlParams.get('postId');
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
        let postTitle = document.getElementById("post-title");
        postTitle.innerText = post.title;     
        let postBody = document.getElementById("post-body");
        postBody.innerText = post.body;
    })
    .catch(error => {
        console.error('Post melumatlari: ', error);
    });
