console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const replicateHeader = document.createElement("h1");
replicateHeader.textContent = "Social Media Post";
document.body.append(replicateHeader);

const replicatePost = document.createElement("article");
replicatePost.classList.add("post");
document.body.append(replicatePost);

const replicatePostContent = document.createElement("p");
replicatePostContent.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipsicing elit.";
replicatePostContent.classList.add("post__content");
replicatePost.append(replicatePostContent);

const replicateFooter = document.createElement("footer");
replicateFooter.classList.add("post__footer");
replicatePost.append(replicateFooter);

const replicatePostUsername = document.createElement("span");
replicatePostUsername.innerHTML = `<span class="post__username">@username</span>`;
replicateFooter.append(replicatePostUsername);

const replicateButton = document.createElement("button");
//replicateButton.innerHTML = `<button type="button" class="post__button" data-js="replicate-like-button">
//       ♥ Like
//    </button>`;

replicateButton.classList.add("post__button");
replicateButton.textContent = "♥ Like";
replicateButton.setAttribute("data-js", "replicate-like-button");

replicateFooter.append(replicateButton);

const replicateLikeButton = document.querySelector(
  '[data-js="replicate-like-button"]'
);

replicateLikeButton.addEventListener("click", handleLikeButtonClick);
