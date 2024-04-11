document.getElementById("addPostBtn").addEventListener("click", function() {
    document.getElementById("restaurantFormContainer").classList.remove("hidden");
});

function handleSubmit(event) {
    event.preventDefault(); 
    const newPost = document.createElement("div");
    newPost.classList.add("blogPost");
    newPost.classList.add("slideIn");

    const title = document.getElementById("Title").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const description = document.getElementById("description").value;
    const recommendInput = document.querySelector('input[name="recommendation"]:checked');
    const recommend = recommendInput ? recommendInput.value : "";

    const formData = {
        title: title,
        startDate: startDate,
        endDate: endDate,
        description: description,
        recommend: recommend,
    };
    console.log(formData); 

    const postTitle = document.createElement("h2");
    postTitle.textContent = title; 
    newPost.appendChild(postTitle);

    const dateRange = document.createElement("p");
    dateRange.textContent = `Date: ${startDate} - ${endDate}`;
    newPost.appendChild(dateRange);

    const desc = document.createElement("p");
    desc.textContent = `Description: ${description}`;
    newPost.appendChild(desc);

    const recommendText = document.createElement("p");
    recommendText.textContent = "Recommend: " + (recommend === "yes" ? "Yes" : "No");
    newPost.appendChild(recommendText);

    const photoUpload = document.getElementById("photoUpload").files;

    for (let i = 0; i < photoUpload.length; i++) {
        const imageUrl = URL.createObjectURL(photoUpload[i]);
        const img = document.createElement("img");
        img.src = imageUrl;
        img.classList.add("postImage");
        newPost.appendChild(img);
    }

    const blogPostsContainer = document.getElementById("poop");
    blogPostsContainer.appendChild(newPost);
    document.getElementById("restaurantForm").reset();

    setTimeout(() => {
        newPost.style.transform = "translateY(0)"; 
    }, 100); 

  
    document.getElementById("restaurantFormContainer").classList.add("hidden");
}

document.getElementById("restaurantForm").addEventListener("submit", handleSubmit);