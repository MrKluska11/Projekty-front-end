
    
/*$("#menu ul li").hover(function(){
    $(this).find("ul").slideDown(400);},
        function(){
    $(this).find("ul").slideUp(400);}); */

var lock = false;

function rozwinMenu()
{
    var lock = true;
    $(this).find("ul").slideDown(400);
}

function zwinMenu()
{
    $(this).find("ul").slideUp(400);
    var lock = false;
}

if(lock == false)  $("#menu ul li").hover(rozwinMenu, zwinMenu); //funkcje nie sa wywolywane tylko przesłane jako argumenty

var obrazki = ["duck-hunt.jpg", "contra.jpg", "donkeyKong.jpg", "ninja-gaiden2.jpg", "pacman.jpg"];

timer1 = 0;
timer2 = 0;

var numer = Math.floor(Math.random() * 5) + 1;  //zmienna ta musi być globalna!


function schowaj()
{
    $("#slider").fadeOut(500);
}

function ustawSlajd(numerSlajdu)
{
    schowaj();
    clearTimeout(timer1);
    clearTimeout(timer2);
    numer = numerSlajdu - 1;
    setTimeout("zmienSlajd()", 500);
    
}

function zmienSlajd()
{
    numer++;
    if(numer > 5) numer = 1;
    
    var plik = "<img src=\"images/" + obrazki[numer-1] + "\" style=\"width: 1100px; height: 500px;\" />";
    
    $("#slider").html(plik + "<div id=\"przelacznik\"> <i class=\"icon-circle\" onclick=\"ustawSlajd(1)\"></i> <i class=\"icon-circle\" onclick=\"ustawSlajd(2)\"></i> <i class=\"icon-circle\" onclick=\"ustawSlajd(3)\"></i> <i class=\"icon-circle\" onclick=\"ustawSlajd(4)\"></i> <i class=\"icon-circle\" onclick=\"ustawSlajd(5)\"></i> </div>");
    
    $("#slider").fadeIn(500);

    timer1 = setTimeout("zmienSlajd()", 10000);  
    timer2 = setTimeout("schowaj()", 9500);

}


$("#wysun").hover(function()
   {
     $(this).animate({left: "0px"});
   }, function()
     {
        $(this).animate({left: "-297px"});
     }
);

/*var wysun = document.getElementById("wysun");

wysun.addEventListener("mouseover", function() {$("#wysun").animate({left: "0px"});});

wysun.addEventListener("mouseout", function() {$("#wysun").animate({left: "-297px"});});*/


$(window).scroll(function(){
    if ($(window).scrollTop() > 47)
        {
            $("nav").addClass("sticky");
        }
    else
        {
            $("nav").removeClass("sticky");
        }
});


    var menu = document.getElementById("menu");  

    var wrapper = menu.querySelector('.search'),
    input = wrapper.querySelector('input'),
    list,
    predefinedValues;

predefinedValues = [
  "home",
  "przygodowe",
  "strzelanki",
  "bijatyki",
  "wyścigi",
  "sportowe",
  "forum"
];

var createList = function (values) {
  if (list) {
    wrapper.removeChild(list);
  }
  
  var ul = document.createElement('ul');
  
  values.forEach(function (value) {    //value - słowo kluczowe
    var li = document.createElement('li');
    li.textContent = value;
    ul.appendChild(li);
  });
  
  return ul;
};

var manageList = function (string) {
  var showedValues = predefinedValues.filter(function (value) {
    return value.indexOf(string) == 0;
  });
  
  if (showedValues.length) {
    list = createList(showedValues);
    wrapper.appendChild(list);
  } else if (list != null) {
    wrapper.removeChild(list);
    list = null;
  }
};

var onType = function () {
  manageList(this.value);
};

input.addEventListener('keyup', onType);  //keyup - pisanie na klawiaturze (zdarzenie)










