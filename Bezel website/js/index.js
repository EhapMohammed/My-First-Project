


  var imgs = [];
    var imgList = document.querySelectorAll(".img-item");
    var lightBox = document.querySelector(".lightbox-container");
    var close = document.getElementById("close");
    var lightBoxImg = document.querySelector(".lightbox-img");
var next =
    document.getElementById("next");
var prev =
    document.getElementById("prev");
var imgIndex = 0;
    for(var i =0 ; i<imgList.length ; i++)
    {
        imgs.push(imgList[i]);
        imgList[i].addEventListener("click" , function(Event){
            
            var targetSrc = Event.target.src;
            var imgIndex = imgs.indexOf(Event.target);
            lightBox.classList.add("show");
            lightBoxImg.style.backgroundImage = "url("+targetSrc+")";
            currentIndex = imgs.indexOf(e.target);
            
            var targetSrc = e.target.src;
           // lightBox.style.display = "block";
    lightBoxImg.style.backgroundImage =  "url("+targetSrc+")";
              lightBox.classList.add("show");
            lightBox.classList.remove("show");

        })
    }
    
    close.addEventListener("click" , function(){
        lightBox.classList.remove("show");
    })

next.addEventListener("click",function(){
        
       if(imgIndex == imgs.length)
           {
               imgIndex = 0;
           }
     imgIndex++;
       var currentImg = imgs[imgIndex].src
        lightBoxImg.style.backgroundImage = "url("+currentImg+")";
   })
prev.addEventListener("click",function(){
   
       if(imgIndex < 0)
           {
               imgIndex = imgs.length-1;
           }
     imgIndex--;
       var currentImg = imgs[imgIndex].src
        lightBoxImg.style.backgroundImage = "url("+currentImg+")";
   })
 document.addEventListener("keydown",function(e)
{
        if(e.keyCode == 27)
{
     lightBox.classList.remove("show");
}
    else(e.keyCode == 39)
    {
         imgIndex++;
       if(imgIndex == imgs.length)
           {
               imgIndex = 0;
           }
       var currentImg = imgs[imgIndex].src
        lightBoxImg.style.backgroundImage = "url("+currentImg+")";
    }
})

//Code for hide loading page
$(document).ready(function() 
 {
    $('#readyPage').hide(3000);
})


//User Name RegEx
var userName = document.querySelector("#userName input");
var userRegEx = /^[A-z]{1}[a-z]{2,8} [A-z]{1}[a-z]{2,8}$/;
var alert = document.querySelector("#userName .alert");
var userValue = userName.value;

userName.addEventListener("blur",function(){

    if(userRegEx.test(userValue) == false)
        {
            alert.style.display= "block";
        }
    else
        {
            alert.style.display= "none";
        }
})


// User Mail RegEx

var userMail = document.querySelector("#userMail input");
var userRegExMail = /^[A-z][a-z]{2,7}[.-]?[A-z][a-z]{2,7}@[a-z]{2,7}\.[a-z]{2,5}$/;
var alertMail = document.querySelector("#userMail .alert");
var userMailValue = userMail.value;

userMail.addEventListener("blur",function(){

    if(userRegExMail.test(userMailValue) == false)
        {
            alertMail.style.display= "block";
        }
    else
        {
            alertMail.style.display= "none";
        }
})

//User Phone Number Regex

var userNumber = document.querySelector("#userNumber input");
var userRegExNumber = /^(002)?01(0|1|2|5)[0-9]{8}$/;
var alertNumber = document.querySelector("#userNumber .alert");
var userNumberValue = userNumber.value;

userNumber.addEventListener("blur",function(){

    if(userRegExNumber.test(userNumberValue) == false)
        {
            alertNumber.style.display= "block";
        }
    else
        {
            alertNumber.style.display= "none";
        }
})

//User Masseg Regex


var userMassege = document.querySelector("#userMassege textarea");
var userRegExMassege = /^[A-Z][a-z][0-9]{0-99}$/;
var alertMassege = document.querySelector("#userMassege textarea");
var userMassegeValue = userMassege.value;

userMassege.addEventListener("blur",function(){

    if(userRegExMassege.test(userMassegeValue) == false)
        {
            alertMassege.style.display= "block";
        }
    else
        {
            alertMassege.style.display= "none";
        }
})