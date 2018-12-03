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
    reviewdiv.setAttribute("id", "newreviewholder");


    var reviewer = document.createElement("div");
    reviewer.setAttribute("class", "reviewer");
    reviewer.setAttribute("id", "reviewer");
    reviewer.innerHTML = "Test Man";


    var reviewnumber = document.getElementById("ratingnumber").value;

    var numberholder = document.createElement("div");

    var reviewnumber2 = document.createElement("div");
    reviewnumber2.setAttribute("id", "reviewnumber2");
    reviewnumber2.setAttribute("class", "reviewnumber2");
    reviewnumber2.innerHTML = reviewnumber;

    var reviewcomment = document.createElement("div");
    reviewcomment.setAttribute("id", "reviewcomment");
    reviewcomment.setAttribute("class", "reviewcomment");
    reviewcomment.innerHTML = comment;

    var namennumber = document.createElement("div");
    namennumber.setAttribute("id", "namennumber");

    var reviewcount = 0;
    
    if (reviewnumber >= 8.0){
        reviewnumber2.style.backgroundColor = "blue";
    } else if (reviewnumber >= 6.0){
        reviewnumber2.style.backgroundColor = "greenyellow";
    } else if (reviewnumber >= 5.0) {
        reviewnumber2.style.backgroundColor = "yellow";
    } else if(reviewnumber >= 3.5){
        reviewnumber2.style.backgroundColor = "orange"
    } else {
        reviewnumber2.style.backgroundColor = "red";
    }
    
        
    if (reviewcount == 0){
    document.getElementById("bigreview").appendChild(reviewdiv);
    document.getElementById("newreviewholder").appendChild(namennumber);
    document.getElementById("namennumber").appendChild(reviewer);
    document.getElementById("namennumber").appendChild(reviewnumber2);

    document.getElementById("newreviewholder").appendChild(reviewcomment);
    } 
    
}
