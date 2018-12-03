var database = firebase.database();

//Creates an account under certain restrictions
function createAccount(){
  var userEmail = document.getElementById('createEmail').value;
  var userPassword = document.getElementById('createPass').value;
  var passwordVerif = document.getElementById('passVerif').value;

  if(userPassword == passwordVerif){
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).then(function() {

      window.location.href="myAccount.html";

    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;      
      window.alert("\nError code: " + errorCode + "\n" + errorMessage);
    });   
  } else {
    window.alert("passwords are not equal");
  }
  window.alert(user.uid);
}

//Logs in into firebase authentication
function logIn(){
  var userEmail = document.getElementById('email').value;
  var userPassword = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).then(function() {
    window.location.href="myAccount.html";
  
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    
    window.alert("\nError code: " + errorCode + "\n" + errorMessage);
    window.location.href="logIn.html";
  }); 
}

// Nav changes and myAccount.html changes depending on user state (log in/log out)
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var fb = database.ref();
    var user = firebase.auth().currentUser;

    user.getIdToken().then(function(accessToken) {
      document.getElementById('notSignedIn').style.display="none";
      document.getElementById('signedIn').style.display="block";
      document.getElementById('accountName').innerHTML = user.email;
    });

    //Car make
    fb.child('users/'+user.uid+'/make').once('value', function(snap){
      var userMake = document.createTextNode(snap.val());
      document.getElementById('make').appendChild(userMake);      
    });

    //Car model
    fb.child('users/'+user.uid+'/model').once('value', function(snap){
      var userModel = document.createTextNode(snap.val());
      document.getElementById('model').appendChild(userModel);      
    });

    //Car year
    fb.child('users/'+user.uid+'/year').once('value', function(snap){
      var userYear = document.createTextNode(snap.val());
      document.getElementById('year').appendChild(userYear);      
    });

    //Gas station
    fb.child('users/'+user.uid+'/station').once('value', function(snap){
      var userStation = document.createTextNode(snap.val());
      document.getElementById('station').appendChild(userStation);      
    });

    //# of jerry cans
    fb.child('users/'+user.uid+'/jerryCans').once('value', function(snap){
      var userJerryCans = document.createTextNode(snap.val());
      document.getElementById('jerryCans').appendChild(userJerryCans);      
    });

    //Size of jerry cans
    fb.child('users/'+user.uid+'/jerryCanSize').once('value', function(snap){
      var userJerryCanSize = document.createTextNode(snap.val());
      document.getElementById('jerryCanSize').appendChild(userJerryCanSize);      
    });
    
    //Fuel grade
    fb.child('users/'+user.uid+'/fuelGrade').once('value', function(snap){
      var userFuelGrade = document.createTextNode(snap.val());
      document.getElementById('fuelGrade').appendChild(userFuelGrade);      
    });

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

function editP(){
  window.location.href="preferences.html";
}

//account preferences, information is put into database
function edit() {

  var make = document.getElementById("make").value;
  var model = document.getElementById("model").value;
  var year = document.getElementById("year").value; 

  if (document.getElementById('closest').checked) {
    var station = "Closest US";
  }

  if (document.getElementById('lowest').checked) {
    var station = document.getElementById("lowestKM").value;
  }

  if (document.getElementById('check1').checked) {
    var jerryCans = document.getElementById("jerryCans").value;
    var jerryCanSize = document.getElementById("jerryCanSize").value;
  } else {
    var jerryCans = 0;
    var jerryCanSize = 0;
  }

  if (document.getElementById('check4').checked) {

    if (document.getElementById('regular').checked) {
      var fuelGrade = "Regular";
    }
    if (document.getElementById('midgrade').checked) {
      var fuelGrade = "Midgrade";
    }
    if (document.getElementById('premium').checked) {
      var fuelGrade = "Premium";
    }
    if (document.getElementById('diesel').checked) {
      var fuelGrade = "Diesel";
    }
  } else {
      var fuelGrade = "Regular";
  }

  if (make.trim() == "" || model.trim() == "" || year.trim() == "") {
    var notComplete = true;
  } else {
    var notComplete = false;
  }

  /* Car types */
  if (((make.toLowerCase() == "honda" && model.toLowerCase() == "civic")
  || (make.toLowerCase() == "toyota" && model.toLowerCase() == "corolla"))) {
    var carSupport = true;
  } else {
    var carSupport = false;
  }

  if (notComplete == false && carSupport == true) {

    var user = firebase.auth().currentUser;    
    database.ref('users/'+user.uid).update( {
      "model" : model,
      "make" : make,
      "year" : year,
      "station" : station,
      "jerryCans" : jerryCans,
      "jerryCanSize" : jerryCanSize,
      "fuelGrade" : fuelGrade
    });
    
    window.location.href="myAccount.html";

  } else if (notComplete == true) {
    window.alert("You must enter the make, model, and year of the car!");
  } else if (carSupport == false) {
    window.alert("Sorry! The Savings Calculator does not support your vehicle at this time. \nPlease enter another vehicle");
  }

}