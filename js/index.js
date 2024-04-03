let ul = document.querySelector("ul");

fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>response.json())
.then(data=>{
    data.forEach(user => {
        let li = document.createElement("li");
        li.setAttribute("data-id", user.id);
        li.innerText = user.username;
        ul.appendChild(li);

        li.addEventListener("click", function(){
            let userId = user.id;
            let hr = document.createElement("hr");
            let userHeader = document.createElement("h1");
            userHeader.innerText = `Posts for ${user.username}`;
            ul.appendChild(hr);
            ul.appendChild(userHeader);
            
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(response => response.json())
            .then(posts => {
                let ul2 = document.createElement("ul");
                posts.forEach(post => {
                    let li2 = document.createElement("li");
                    let link = document.createElement("a");
                    link.setAttribute("href", `post.html?postId=${post.id}`);
                    link.innerText = post.title;
                    li2.appendChild(link);
                    ul2.appendChild(li2); 
                });
                ul.appendChild(ul2);
            })
            .catch(error => {
                console.error('Posts yüklenmedi: ', error);
            });
        });
    }); 
})
.catch(error => {
    console.error('Users yuklenmedi: ', error);
});
