//CREAR UN ALGORITMO UTILIZANDO UN CICLO

let signo = prompt("Ingresa tu signo del zodiaco (sin acentos y minúscula) o ESC para terminar");
//Repetimos hasta que se ingresa "ESC"
while (signo != "ESC") {
    switch (signo) {
        case "aries":
        case "leo":
        case "sagitario":
            alert("Tu signo del zodiaco corresponde al elemento Fuego");
            break;
        case "tauro":
        case "virgo":
        case "capricornio":
            alert("Tu signo del zodiaco corresponde al elemento Tierra");
            break;

        case "geminis":
        case "libra":
        case "acuario":
            alert("Tu signo del zodiaco corresponde al elemento Aire");
            break;

        case "cancer":
        case "escorpio":
        case "piscis":
            alert("Tu signo del zodiaco corresponde al elemento Aire");
            break;
        default:
            alert("No sé qué signo es ese, me lo puedes repetir?")
            break;
    }
    signo = prompt("Ingresa tu signo del zodiaco (sin acentos y minúscula) o ESC para terminar");
}