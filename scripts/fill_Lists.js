function getStates() {
    var url, stateOptions;
    url = '/states.json';


    fetch(url)
    .then(Response=>Response.json())
    .then(json=>{

        Object.keys(json).forEach(function(key){

            let option = document.createElement('option');
            option.value = json[key].abbreviation; 
            option.innerHTML=json[key].name;
            document.getElementById("states[]").appendChild(option);
        });//end of loop
    })//end of then
}//end of getStates


function showAndFillCities(){
    document.getElementById("cities").hidden = false;


}