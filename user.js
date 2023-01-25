const postListEl = document.querySelector('.post-list')

async function onSearchChange(event) {
    const id = event.target.value
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const postsData = await post.json();
    postListEl.innerHTML = postsData.map(post => `
    <div class="post">
        <div class="post__title">
        ${post.title}
        </div>
        <p class="post__body">
        ${post.body}
        </p>
    </div>
    `).join('')
}

async function main() {
    const id = localStorage.getItem("id")
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const postsData = await post.json();
    postListEl.innerHTML = postsData.map(post => `
    <div class="post">
        <div class="post__title">
        ${post.title}
        </div>
        <p class="post__body">
        ${post.body}
        </p>
    </div>
    `).join('')
}


main();