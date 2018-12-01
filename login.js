//inputs information into firebase authentication
function logIn(){
  var userEmail = document.getElementById('email').value;
  var userPassword = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    
    window.alert("\nError code: " + errorCode + "\n" + errorMessage);
  });
}

// Nav changes and myAccount.html changes depending on user state (log in/log out)
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById('notSignedIn').style.display="none";
    document.getElementById('signedIn').style.display="block";

    var user = firebase.auth().currentUser;
    /*document.getElementById('accountEmail').innerHTML = "Your Email: " + email;
    document.getElementById('accountEmail').innerHTML = "Your Email: " + email;
    document.getElementById('').innerHTML = "Your Email: " + email;
    document.getElementById('').innerHTML = "Your Email: " + email;
    document.getElementById('').innerHTML = "Your Email: " + email;*/   
    
  } else {
    document.getElementById('signedIn').style.display="none";
    document.getElementById('notSignedIn').style.display="block";
    // No user is signed in.
  }
});

// logging out of account
function logOut(){

  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    window.location.href="index.html";
    window.alert("Log out successful");
  }).catch(function(error) {
    // An error happened.
    window.alert("\nError code: " + errorCode + "\n" + errorMessage);
  });
}

//account preferences, information is put into database
var database = firebase.database();
var ref = database.ref('users');

function edit() {
  var make = document.getElementById("make").value;
  var model = document.getElementById("model").value;
  var year = document.getElementById("year").value; 
  //var station = document.getElementById("year").value; 
  var jerryCans = document.getElementById("jerryCans").value; 
  var hours = document.getElementById("timeH").value;
  var minutes = document.getElementById("timeM").value;  
  var maxDistance = document.getElementById("maxDistance").value; 

  var user = firebase.auth().currentUser;
  firebase.database().ref('users/'+user.uid).update( {
    "make": make,
    "model": model,
    "year": year,
    //"station" : station,
    "jerry cans" : jerryCans,
    "hours" : hours,
    "minutes" : minutes,
    "maxDistance" : maxDistance
  });

  //ref.push(data);
  window.location.href="myAccount.html"; 
}

  /*self.ref.child("users").child(user.uid).setValue(["make": make])
  self.ref.child("users").child(user.uid).setValue(["model": model])
  self.ref.child("users").child(user.uid).setValue(["year": year])*/ 
 
  /* var ui = new firebaseui.auth.AuthUI(firebase.auth());
  var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: 'main.html',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      //firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      //firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      //firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: 'main.html',
  };

  // The start method will wait until the DOM is loaded.
  ui.start('#firebaseui-auth-container', uiConfig);

/*
<script src="/__/firebase/5.5.8/firebase-app.js"></script>
<script src="/__/firebase/5.5.8/firebase-auth.js"></script>
<script src="/__/firebase/init.js"></script>

function toggleSignIn() {
  if (firebase.auth().currentUser) {
    // [START signout]
    firebase.auth().signOut();
    // [END signout]
  } else {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email.length < 4) {
      alert('Please enter an email address.');
      return;
    }
    if (password.length < 4) {
      alert('Please enter a password.');
      return;
    }

*/