const fetchData = async () => {
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+Math.floor(Math.random() * 905)+'');
        const data = await response.json();
        printCard(data);
    }catch(error){
        console.log(error);
    }
}
function printCard(pokemon){
    document.getElementById("name").innerHTML =  mayus(pokemon.name);
    // document.getElementById("image").setAttribute("src",pokemon.sprites.other.dream_world.front_default);
    document.getElementById("image").setAttribute("src",pokemon.sprites.other.home.front_default);
    document.getElementById("hp").innerHTML =  pokemon.stats[0].base_stat+" hp";
    document.getElementById("type").innerHTML =  pokemon.types[0].type.name+" type";
    document.getElementById("attack").innerHTML =  pokemon.stats[1].base_stat;
    document.getElementById("defense").innerHTML =  pokemon.stats[2].base_stat;
    document.getElementById("speed").innerHTML =  pokemon.stats[5].base_stat;

}
function mayus(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

document.addEventListener("DOMContentLoaded", () => {
    fetchData();
    AOS.init();
});