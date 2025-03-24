const key = "81a5d6c0348f6e2be42c8817fd16338a"

function colocarDadosNaTela(dados) {
    document.querySelector(".cidade").innerHTML = "Tempo em: " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "° C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    console.log(dados)
    if (dados.weather[0].description == "nublado") {
        document.querySelector(".body").style.backgroundImage = "url('./photorealistic-style-clouds.jpg')"


        document.querySelector(".body").style.backgroundPosition = "center"
        document.querySelector(".body").style.backgroundRepeat = "no-repeat"
        document.querySelector(".body").style.backgroundSize = "cover"
    } else if (dados.weather[0].description == "nuvens dispersas" || dados.weather[0].description == "algumas nuvens") {
        document.querySelector(".body").style.backgroundImage = "url('./rooftop.jpg')"


        document.querySelector(".body").style.backgroundPosition = "center"
        document.querySelector(".body").style.backgroundRepeat = "no-repeat"
        document.querySelector(".body").style.backgroundSize = "cover"

    } else if (dados.weather[0].description == "chuva moderada" || dados.weather[0].description == "chuva leve") {
        document.querySelector(".body").style.backgroundImage = "url('./nuvens-brancas-chuva-e-nevoeiro-no-ceu_107791-4444.jpg')"



        document.querySelector(".body").style.backgroundPosition = "center"
        document.querySelector(".body").style.backgroundRepeat = "no-repeat"
        document.querySelector(".body").style.backgroundSize = "cover"

    } else if (dados.weather[0].description == "céu limpo") {
        document.querySelector(".body").style.backgroundImage = "url('./nuvem-branca-no-ceu-azul.jpg')"


        document.querySelector(".body").style.backgroundPosition = "center"
        document.querySelector(".body").style.backgroundRepeat = "no-repeat"
        document.querySelector(".body").style.backgroundSize = "cover"

    } else if (dados.weather[0].description == "névoa") {
        document.querySelector(".body").style.backgroundImage = "url('./nevoa.jpg')"


        document.querySelector(".body").style.backgroundPosition = "center"
        document.querySelector(".body").style.backgroundRepeat = "no-repeat"
        document.querySelector(".body").style.backgroundSize = "cover"

    }
}


async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    colocarDadosNaTela(dados)

}

function clicarBotao() {
    const cidade = document.querySelector(".input-cidade").value
    buscarCidade(cidade)

}

