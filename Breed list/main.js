var choose = document.querySelector('select');
var breed = choose[0].value;

choose.addEventListener("change", function(event){

    breed = event.target.value;

    getAdog();

});

function getAdog () {
    
    var selectOne = new XMLHttpRequest ();
    selectOne.open("GET", "https://dog.ceo/api/breed/" + breed + "/images/random/3");
    selectOne.onload = function getImg () {
        var data = JSON.parse(selectOne.responseText).message[0];
        
        displayData(data);

    }
    
    selectOne.send();
}

function displayData(src){
    var space = document.querySelector('.main-screen img')

    if(space===null){
        var img = document.createElement('img');
        document.querySelector('.main-screen').appendChild(img);
    }else{
        var img = space;
}

   img.setAttribute('src', src);
    
}

getAdog();
setInterval(getAdog, 5000)

