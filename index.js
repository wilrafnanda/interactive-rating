const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container")

let  selectedRating ="";


ratingEls.forEach((ratingsEl )=> {
    ratingsEl.addEventListener("click", (event)=>{
          removeActive();
          selectedRating = event.target.innerText 
          event.target.classList.add("active");
          event.target.parentNode.classList.add("active");
          

          
            

    })
    
});



btnEl.addEventListener("click", ()=>{
    if (selectedRating!= ""){
        containerEl.innerHTML =`
        <div class="container3">
        <div class="image-respond"><img src="images/illustration-thank-you.svg"></div>
        <div class="respond"> You selected ${selectedRating} out of 5</div>
        <div class="container2">
        <h1>Thank You!</h1>
        <p class="info-2">We appreciate you taking the time to give a rating.
        if you ever need more support, don't hesitate to get in touch
        </p>

        </div>
        </div>
        `
    } else alert("Please choose a rating before clicking");
})

function removeActive(){
    ratingEls.forEach((ratingsEl)=>{
        ratingsEl.classList.remove("active");
    });
}