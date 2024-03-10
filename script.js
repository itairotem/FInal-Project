document.getElementById("restaurantBtn").addEventListener("click", function() {
    document.getElementById("restaurantFormContainer").classList.remove("hidden");
});

document.getElementById("accommodationBtn").addEventListener("click", function() {
    document.getElementById("restaurantFormContainer").classList.remove("hidden");
});

document.getElementById("activityBtn").addEventListener("click", function() {
    document.getElementById("restaurantFormContainer").classList.remove("hidden");
});




function handleSubmit(event) {
    
    event.preventDefault(); 
    const newPost = document.createElement("div");
    newPost.classList.add("blogPost");
    newPost.classList.add("slideIn");

    
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const description = document.getElementById("description").value;
    const recommendInput = document.querySelector('input[name="recommend"]:checked');
    const recommend = recommendInput ? recommendInput.value : "";


    
    
        var formData = {
        startDate: startDate,
        endDate: endDate,
        description: description,
        recommendation: recommendation,
    };
   console.log(formData); 

 
    
    

   

    
    const title = document.createElement("h2");
    title.textContent = "Restaurant"; 
    newPost.appendChild(title);

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
        newPost.style.transform = "translateY(0)"; // Move to final position
    }, 100); // Delay for reflow

}


   



document.getElementById("restaurantForm").addEventListener("submit", handleSubmit);
