var database = firebase.database();

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var fb = database.ref();
    var user = firebase.auth().currentUser;

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