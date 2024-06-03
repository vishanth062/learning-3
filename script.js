const card_button = document.querySelectorAll(".card-button");
window.addEventListener('resize',window_call);

function window_call(){
    console.log(window.innerWidth)
    if(window.innerWidth<900){
        card_button.forEach(button=>{
            button.style.width="auto"
        })

    }
    else{
        card_button.forEach(button=>{
            button.style.width="246px";
        })
       

    }
}


// const cards= document.querySelector(".cards");
// const cardscopy=document.querySelectorAll(".cards-copy");

// function copy(){
//     var copy = cards.cloneNode(true);
//     cardscopy.forEach(function(container) {
//         container.appendChild(copy.cloneNode(true));
//     });
// }


//     copy();


// Get the elements
const visible = document.querySelector('#visible');
const visible1 = document.querySelector('#visible1');
const visible2=document.querySelector('#visible2')
const visible_button = document.querySelector('#visible-button');
const visible_button1 = document.querySelector('#visible-button1');
const visible_button2 = document.querySelector('#visible-button2');

// Set initial display to none
visible.style.display = "none";
visible1.style.display = "none";
visible2.style.display="none";

// Add event listeners to buttons
visible_button.addEventListener('click', () => visible_fun(visible, visible_button));
visible_button1.addEventListener('click', () => visible_fun(visible1, visible_button1));
visible_button2.addEventListener('click', () => visible_fun(visible2, visible_button2));

// Define function to toggle visibility
function visible_fun(visibleElement, button) {
    if (button.textContent === 'show more') {
        visibleElement.style.display = "block";
        button.textContent = 'show less';
    } else {
        visibleElement.style.display = "none";
        button.textContent = 'show more';
    }
}



// const overlay= document.querySelector("#overlay");

// const card_buttons = document.querySelectorAll(".card-button");
// card_buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         overlay.style.display = 'block';
//     });
// });


const contact_form=document.querySelector("#contact-form");
const form=document.querySelector("#form");
const Display=document.querySelector('#display');

const main=document.querySelector('main')
const footer=document.querySelector('footer')

contact_form.addEventListener('click',()=>{
    form.style.display="flex"

    main.remove()

   document.querySelector("body").style.backgroundColor="#F7F3F0"
//    footer.style.display='none'

   document.querySelector(".head-upper01 p").textContent="Custom Enquiry"

   

})








// const cards=document.querySelector(".cards p");
// cards.innerHTML="hii there <br>well"

