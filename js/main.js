// Get slider item | array.from{es6 feature}

var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));


// get number of slides
var slidescount = sliderImages.length;

// set current slide
var currentslide = 1;

// slide number element
var slidenumberelement = document.getElementById('slide-number');

//previous and next buttons
var nextbutton = document.getElementById('next');
var prevbutton = document.getElementById('prev');


// Handle click on previous button and next button
nextbutton.onclick = nextslide;
prevbutton.onclick = prevslide;

//create the main ul element
var paginationelement = document.createElement('ul');

// set id on created ul element
paginationelement.setAttribute('id', 'padination-ul');

//create list item based on slides count
for(var i = 1; i <=slidescount; i++) {

    //create the li
    var paginationitem = document.createElement('li');

    //set custom attribute
    paginationitem.setAttribute('data-index', i);

    //set item content
    paginationitem.appendChild(document.createTextNode(i));

    //append items to the main ul list
    paginationelement.appendChild(paginationitem);

}

//add the created ul element to the page
document.getElementById('indicators').appendChild(paginationelement);

//Get the new created ul
var paginationCreateUL = document.getElementById('pagination-ul');

//get pagination items | array.from [ES6 feature]
var paginationsBullets = Array.from(document.querySelectorAll('#padination-ul li'));
// var paginationsBullets = Array.from(document.getElementById('pagination-ul  li'));

for (var i = 0; i < paginationsBullets.length; i++) {
    paginationsBullets[i].onclick=function() {

        currentslide = parseInt(this.getAttribute('data-index'));
        thecheker();
    }
}

//trigger the checker function
thecheker();

//next slide function
function nextslide() {

    if(nextbutton.classList.contains('disabled')){

        //do nothing
        return false;

    }else {
        currentslide++;
        thecheker();
    }


}
//prev slide function
function prevslide() {
    if(prevbutton.classList.contains('disabled')){

        //do nothing
        return false;

    }else {
        currentslide--;
        thecheker();
    }
}

//create the checker function
function thecheker() {

    //set the slide number
    slidenumberelement.textContent  = 'slide #' +  (currentslide) + ' '+ 'of ' + ' ' + (slidescount);


    // remove all active classes
    removeAllActive();

    //set active class on current slide
    sliderImages[currentslide - 1].classList.add('active');


    //set active class on current pagination item

    // paginationCreateUL.children[currentslide - 1].classList.add('active');

    document.getElementById('padination-ul').children[currentslide - 1].classList.add('active');


    // check if current slide is the first slide
    if (currentslide==1){

        //add disabled class on previous button
        prevbutton.classList.add('disabled');

    } else {

           //remove disabled class on previous button
           prevbutton.classList.remove('disabled');
    }

    // check if current slide is the last
    if (currentslide==slidescount){

        //add disabled class on next button
        nextbutton.classList.add('disabled');

    } else {

           //remove disabled class on next button
           nextbutton.classList.remove('disabled');
    }


}


//remove all active classes from imges and pagination bullets

function removeAllActive() {

    //loop through images
    sliderImages.forEach(function(img) {

        img.classList.remove('active');

    });

    //loop through pagination bullets

    paginationsBullets.forEach (function(bullets) {

        bullets.classList.remove('active');


    });






}
