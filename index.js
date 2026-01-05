// Write your code here!
const postList = document.getElementById("post-list");

/**
 * Display posts in the DOM
 * @param {Array} posts
 */
function displayPosts(posts) {
  postList.innerHTML = ""; // clear previous content

  posts.forEach(post => {
    // Create elements
    const li = document.createElement("li");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    // Add text content
    h1.textContent = post.title;
    p.textContent = post.body;

    // Append elements
    li.appendChild(h1);
    li.appendChild(p);
    postList.appendChild(li);
  });
}

/**
 * Fetch posts using async/await
 */
async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    displayPosts(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

// Call function after fetch
fetchPosts();