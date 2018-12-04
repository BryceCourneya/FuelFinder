var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide-animation");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlides(n) {
    showSlides(slideIndex = n);
}

var ratingtext = parseInt(document.getElementById("ratingtext").textContent);

var ratingtextdiv = document.getElementById("ratingtext");

if (ratingtext >= 8.0) {
    ratingtextdiv.style.backgroundColor = "darkturquoise";
} else if(ratingtext >= 6.0){
    ratingtextdiv.style.backgroundColor = "greenyellow";
} else if (ratingtext >= 5.0){
    ratingtextdiv.style.backgroundColor = "yellow";
} else if (ratingtext >= 3.5){
    ratingtextdiv.style.backgroundColor = "orange";
} else {
    ratingtextdiv.style.backgroundColor = "red";
}


var stationrating1 = parseInt(document.getElementById("stationrating1").textContent);

var stationrating1div = document.getElementById("stationrating1");

if (stationrating1 >= 8.0){
    stationrating1div.style.backgroundColor = "darkturquoise";
} else if (stationrating1 >= 6.0){
    stationrating1div.style.backgroundColor = "greenyellow";
} else if (stationrating1 >= 5.0){
    stationrating1div.style.backgroundColor = "yellow";
} else if (stationrating1 >= 3.5){
    stationrating1div.style.backgroundColor = "orange";
} else {
    stationrating1div.style.backgroundColor = "red";
}
console.log(stationrating1);

var stationrating2 = parseInt(document.getElementById("stationrating2").textContent);

var stationrating2div = document.getElementById("stationrating2");

if (stationrating2 >= 8.0){
    stationrating2div.style.backgroundColor = "darkturquoise";
} else if (stationrating2 >= 6.0){
    stationrating2div.style.backgroundColor = "greenyellow";
} else if (stationrating2 >= 5.0){
    stationrating2div.style.backgroundColor = "yellow";
} else if (stationrating2 >= 3.5){
    stationrating2div.style.backgroundColor = "orange";
} else {
    stationrating2div.style.backgroundColor = "red";
}

var stationrating3 = parseInt(document.getElementById("stationrating3").textContent);

var stationrating3div = document.getElementById("stationrating3");

if (stationrating3 >= 8.0){
    stationrating3div.style.backgroundColor = "darkturquoise";
} else if (stationrating3 >= 6.0){
    stationrating3div.style.backgroundColor = "greenyellow";
} else if (stationrating3 >= 5.0){
    stationrating3div.style.backgroundColor = "yellow";
} else if (stationrating3 >= 3.5){
    stationrating3div.style.backgroundColor = "orange";
} else {
    stationrating3div.style.backgroundColor = "red";
}

var stationrating4 = parseInt(document.getElementById("stationrating4").textContent);

var stationrating4div = document.getElementById("stationrating4");

if (stationrating4 >= 8.0){
    stationrating4div.style.backgroundColor = "darkturquoise";
} else if (stationrating4 >= 6.0){
    stationrating4div.style.backgroundColor = "greenyellow";
} else if (stationrating4 >= 5.0){
    stationrating4div.style.backgroundColor = "yellow";
} else if (stationrating4 >= 3.5){
    stationrating4div.style.backgroundColor = "orange";
} else {
    stationrating4div.style.backgroundColor = "red";
}

function formsubmit() {
    var rating = document.getElementById("ratingnumber").value;

    var ratingref = firebase.database().ref().child("Station1");

    ratingref.child('rating/').on('value', function (snap) {
        document.getElementById("ratingnumber").value = (snap.val());
    });


    var comment = document.getElementById("comment").value;
    /* var bigreview = document.createElement("div");
    bigreview.setAttribute("id", "bigreview");*/


    var reviewdiv = document.createElement("div");
    reviewdiv.setAttribute("class", "newreviewholder");
    //reviewdiv.setAttribute("id", "newreviewholder");


    var reviewer = document.createElement("div");
    reviewer.setAttribute("class", "reviewer");
    //reviewer.setAttribute("id", "reviewer");
    reviewer.innerHTML = "Test Man";


    var reviewnumber = document.getElementById("ratingnumber").value;

    var numberholder = document.createElement("div");

    var reviewnumber2 = document.createElement("div");
    //reviewnumber2.setAttribute("id", "reviewnumber2");
    reviewnumber2.setAttribute("class", "reviewnumber2");
    reviewnumber2.innerHTML = reviewnumber;

    var reviewcomment = document.createElement("div");
    //reviewcomment.setAttribute("id", "reviewcomment");
    reviewcomment.setAttribute("class", "reviewcomment");
    reviewcomment.innerHTML = comment;

    var namennumber = document.createElement("div");
    //namennumber.setAttribute("id", "namennumber");
    namennumber.setAttribute("class", "namennumber");

    var reviewcount = 0;

    var clonereviewdiv = reviewdiv.cloneNode(true);

    var classindex = 0;
    if (reviewnumber >= 8.0) {
        reviewnumber2.style.backgroundColor = "darkturquoise";
    } else if (reviewnumber >= 6.0) {
        reviewnumber2.style.backgroundColor = "greenyellow";
    } else if (reviewnumber >= 5.0) {
        reviewnumber2.style.backgroundColor = "yellow";
    } else if (reviewnumber >= 3.5) {
        reviewnumber2.style.backgroundColor = "orange"
    } else {
        reviewnumber2.style.backgroundColor = "red";
    }


    if (reviewcount == 0) {
        document.getElementById("bigreview").appendChild(reviewdiv);
        document.getElementsByClassName("newreviewholder")[classindex].appendChild(namennumber);
        document.getElementsByClassName("namennumber")[classindex].appendChild(reviewer);
        document.getElementsByClassName("namennumber")[classindex].appendChild(reviewnumber2);

        document.getElementsByClassName("newreviewholder")[classindex].appendChild(reviewcomment);
        reviewcount++;
        classindex++;
        console.log(classindex);
        console.log(reviewcount);
    } 
}
