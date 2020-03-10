function getStates() {
    var url, stateOptions;
    url = '/jsonFiles/states.json';


    fetch(url)
    .then(Response=>Response.json())
    .then(json=>{

        Object.keys(json).forEach(function(key){

            let option = document.createElement('option');
            option.value = json[key].abbreviation+"|"+json[key].name; 
            document.getElementById("states[]").appendChild(option);
        });//end of loop
    })//end of then
}//end of getStates


function showAndFillCities(){
    document.getElementById("cities").hidden = false;
    var x = document.getElementById("StatesID");
    var x2=x.value.split("|");
    var url='/jsonFiles/'+x2[0]+'.json';
    
    fetch(url)
    .then(Response=>Response.json())
    .then(json=>{

        Object.keys(json).forEach(function(key){
            //console.log(json[key]);
            let option = document.createElement('option');
            option.value = json[key].city; 
            option.innerHTML=json[key].city;
            document.getElementById("cities[]").appendChild(option);
        });//end of loop
    })//end of then
    
}//end of showAndFillCities

function changeToDisplay(){
    var x= document.getElementById("StatesID");
    var y= document.getElementById("city");


    window.location.href = "displayWeather?state="+x.value+"&city="+y.value;
}//end of changeToDisplay


function fromUrlMakeChange(){
    var vars = {};
    var url = window.location.href;
    var parts= url.split("?");
    var args = parts[1].split("&");
    var state= args[0].split("=");
    var city=args[1].split("=");

    var stateV2=state[1].split("|");
    
    document.getElementById("state").innerHTML=stateV2[1];
    document.getElementById("city").innerHTML=city[1];

}

function getLocationWeather(){
    var state=document.getElementById("state").innerHTML;
    var city=document.getElementById("city").innerHTML;
    var Main= document.getElementById("Main");
    var Maindesc= document.getElementById("Maindesc");
    var temp= document.getElementById("temp");
    var feels= document.getElementById("feels");
    var wind= document.getElementById("wind");
    var windDir= document.getElementById("windDir");
    var cord= document.getElementById("cord");

    var url="https://api.openweathermap.org/data/2.5/weather?q="+city+","+state+"&appid=6b752666aa5b10b0e7f8bb437aa0ed95";
    console.log(url);
    
    fetch(url)
    .then(Response=>Response.json())
    .then(Response=>{
        cord.innerHTML=JSON.stringify(Response.coord)
        console.log(Response)
        Main.innerHTML= "Weather: "+Response.weather[0].main
        Maindesc.innerHTML="Weather Desc: "+ Response.weather[0].description
        temp.innerHTML="Temp: "+(Response.main.temp-273.15)+"C";
        feels.innerHTML="Feels Likes: "+(Response.main.feels_like-273.15+"C");
        wind.innerHTML="Wind: "+Response.wind.speed
        windDir.innerHTML="Wind Dir: "+Response.wind.deg
    })

}