var database = firebase.database();

firebase.auth().onAuthStateChanged(function(user){
  var fb = database.ref();
  var user = firebase.auth().currentUser;
  fb.child('users/'+user.uid+'/make').once('value', function (snap) {
        document.getElementById("make").value = (snap.val());
  });
  fb.child('users/'+user.uid+'/model').once('value', function (snap) {
        document.getElementById("model").value = (snap.val());
  });
  fb.child('users/'+user.uid+'/year').once('value', function (snap) {
        document.getElementById("year").value = (snap.val());
  });
  fb.child('users/'+user.uid+'/jerryCans').once('value', function (snap) {
        document.getElementById("jerryCans").value = (snap.val());
        if ((snap.val()) > 0) {
          document.getElementById("check1").checked = true;
        }
  });
  fb.child('users/'+user.uid+'/jerryCanSize').once('value', function (snap) {
        document.getElementById("jerryCanSize").value = (snap.val());
  });
  fb.child('users/'+user.uid+'/fuelGrade').once('value', function (snap) {
    if (snap.val() == "Regular") {
        document.getElementById("check4").checked = true;
        document.getElementById("regular").checked = true;
    }
    if (snap.val() == "Midgrade") {
        document.getElementById("check4").checked = true;
        document.getElementById("midgrade").checked = true;
    }
    if (snap.val() == "Premium") {
        document.getElementById("check4").checked = true;
        document.getElementById("premium").checked = true;
    }
    if (snap.val() == "Diesel") {
        document.getElementById("check4").checked = true;
        document.getElementById("diesel").checked = true;
    }
  });
});

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
