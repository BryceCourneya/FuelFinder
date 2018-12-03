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