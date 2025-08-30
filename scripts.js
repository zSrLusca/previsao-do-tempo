const key = "f3e1d35121eac514e01d9ff644c28f8b"

function adicionarDadosNaTela(dados){
document.querySelector(".texto-cidade").innerHTML = `Previsão do tempo em ${dados.name},${dados.sys.country}`;
document.querySelector(".temp").innerHTML =  Math.floor(dados.main.temp) + "°C";
document.querySelector(".clima").innerHTML = dados.weather[0].description;
document.querySelector(".icone-tempo").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png` 
document.querySelector(".umidade").innerHTML = `${dados.main.humidity}% de umidade`;
}

async function buscarCidade(cidade){
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    console.log(dados);
    adicionarDadosNaTela(dados);

}

function onSearch(){
    let cidade = document.querySelector(".input-cidade").value;
    buscarCidade(cidade);
   
}
const input = document.querySelector(".input-cidade");
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        onSearch();
    }
});