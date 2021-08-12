console.log("wel-come to contact menu");

// Displaying
let main = document.getElementById("main");
let button1 = document.getElementById("submitForm");
let button2 = document.getElementById("submitExperiense");

// information 
button1.addEventListener("click", function(e) {
    // button to normal
    main.innerHTML = `
    <div id="fun" class="box font-Mid">Thanks for submiting
    <div>Your information is not used it is only for testing purpose and how is you experience on this website write down below.</div>
    <form>
    <textarea class="rectInput margin-m " cols="30" rows="5" placeholder="Enter your experience"></textarea>
    <button id="submitExperiense" class="rectInput">Submit</button>
    </form>
    </div>
    `

});


// for experience

// button2.addEventListener("click", function(e) {
//     e.preventDefault();
//     main.innerHTML = `
// <div class="box">
//     <h1>Contact Menu</h1>
//     <hr>
//     <form action="submit">
//         <!-- name -->
//         <label for="fullName">Full Name</label>
//         <input id="fullName" class="rectInput" type="text" placeholder="Enter your name">
//         <!-- email -->
//         <label for="email">Email</label>
//         <input id="email" type="email" class="rectInput" placeholder="Enter your email">
//         <!-- phone no -->
//         <label for="phone">Phone no</label>
//         <input id="phone" type="tel" class="rectInput" placeholder="Enter your phone no">
//         <!-- reason -->
//         <label for="reason">Reason of contact</label>
//         <textarea id="reason" class="rectInput" cols="30" rows="5" placeholder="Enter your reason for contact"></textarea>
//         <!-- submit -->
//         <button id="submitForm" class="rectInput">Submit</button>
//     </form>
// </div>
// `
// });