import{auth,createUserWithEmailAndPassword} from "./firbase.js";





// Submit button event listener
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
  event.preventDefault();

  // Get input values
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Create user with email and password
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User signed up
      const user = userCredential.user;
      alert("Creating Account...");
      // window.location.href = "userprofile.html"; // Ensure the URL is correct
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Error: " + errorMessage);
    });
});