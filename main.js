const fetchData = async (inputName) => {
    try{
        if(inputName){
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+inputName);
        const data = await response.json();
        // console.log(data);
        printCard(data);
        }else{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+Math.floor(Math.random() * 905)+'');
        const data = await response.json();
        // console.log(data);
        printCard(data);
        }
    }catch(error){
        document.getElementById("id-pokemon").innerHTML =  "?";
        document.getElementById("name").innerHTML = "Not found :c";
        document.getElementById("loading-img").innerHTML =  '';
        document.getElementById("hp").innerHTML =  " ";
        document.getElementById("type").innerHTML =  "";
        document.getElementById("attack").innerHTML = "";
        document.getElementById("defense").innerHTML =  "";
        document.getElementById("speed").innerHTML =  "";
    }
}
function printCard(pokemon){
    document.getElementById("id-pokemon").innerHTML =  "#"+pokemon.id;
    document.getElementById("name").innerHTML =  mayus(pokemon.name);
    // document.getElementById("image").setAttribute("src",pokemon.sprites.other.home.front_default);
    document.getElementById("loading-img").innerHTML =  '<img alt="Pokemon img" src="'+pokemon.sprites.front_default+'" class="animate__animated animate__zoomIn"></img>';
    document.getElementById("loading-img-back").innerHTML =  '<img alt="Pokemon img" onerror=noimage("'+pokemon.sprites.front_default+'") src="'+pokemon.sprites.back_default+'" class="animate__animated animate__zoomIn"></img>';    
    // onerror=this.src="'+pokemon.sprites.front_default+'"
    document.getElementById("hp").innerHTML =  pokemon.stats[0].base_stat+" hp";
    document.getElementById("type").innerHTML =  pokemon.types[0].type.name+" type";
    document.getElementById("attack").innerHTML =   '<div class="numbers animate__animated animate__fadeInUp">'+pokemon.stats[1].base_stat+'</div><div class="units animate__animated animate__fadeInUp">Attack</div>';
    document.getElementById("defense").innerHTML =  '<div class="numbers animate__animated animate__fadeInUp">'+pokemon.stats[2].base_stat+'</div><div class="units animate__animated animate__fadeInUp">Defense</div>';
    document.getElementById("speed").innerHTML =  '<div class="numbers animate__animated animate__fadeInUp">'+pokemon.stats[5].base_stat+'</div><div class="units animate__animated animate__fadeInUp">Speed</div>';
    // setTimeout(() => {
    //     document.getElementById("image").classList.remove("animate__zoomIn");
    // }, 500);
   
}
function tecla() {
    var pokemonSearch = document.getElementById("search").value;
    pokemonSearch = pokemonSearch.toLowerCase();
    fetchData(pokemonSearch);
}
function mayus(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function noimage(src){
    document.getElementById("loading-img-back").innerHTML = '<img alt="Pokemon img" src='+src+' class="animate__animated animate__zoomIn black-filter"></img>';
}
function addAnimate(){
    document.getElementById("pokeball-button").classList.add("animate__animated");
    document.getElementById("pokeball-button").classList.add("animate__heartBeat");
    setTimeout(() => {
        document.getElementById("pokeball-button").classList.remove("animate__animated");
        document.getElementById("pokeball-button").classList.remove("animate__heartBeat");
    }, 800);
    

}
document.addEventListener("DOMContentLoaded", () => {
    function search(){
    var pokemonSearch = document.getElementById("search").value;
    document.getElementById("loading-img").innerHTML = '<div class="spinner-img spinner-border text-dark" role="status"><span class="visually-hidden">Loading...</span></div>';
    fetchData(pokemonSearch);
    }
    search();
    addAnimate();
    
});

