
import{auth,signInWithEmailAndPassword}from "./firbase.js"




// Submit button event listener
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
  event.preventDefault();
  
  // Get input values
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Create user with email and password
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User signed up
      const user = userCredential.user;
      alert("susscefully sign in ...");
      window.location.href = "user.html"; 
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Error: " + errorMessage);
    });
});




