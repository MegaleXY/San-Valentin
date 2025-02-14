
let isEarlyClick = false;
let timeoutIds = [];



// Mostrar el gif inicial después de 0 segundos
timeoutIds.push(setTimeout(function () {
    document.getElementById('gifContainer').style.display = 'block';

    // Ocultar el gif inicial después de 2.5 segundos
    timeoutIds.push(setTimeout(function () {
        document.getElementById('gifContainer').style.display = 'none';
        document.getElementById('sadGifContainer').style.display = 'block';

        // Mostrar el segundo gif después de 2.5 segundos
        timeoutIds.push(setTimeout(function () {
            document.getElementById('sadGifContainer').style.display = 'block';

            // Ocultar el segundo gif después de 2.5 segundos
            timeoutIds.push(setTimeout(function () {
                document.getElementById('sadGifContainer').style.display = 'none';
                document.getElementById('sadGifContainer1').style.display = 'block';
                // Mostrar el tercer gif después de 2.5 segundos
                timeoutIds.push(setTimeout(function () {
                    document.getElementById('sadGifContainer1').style.display = 'block';

                    // Ocultar el tercer gif después de 2.5 segundos
                    timeoutIds.push(setTimeout(function () {
                        document.getElementById('sadGifContainer1').style.display = 'none';
                        document.getElementById('sadGifContainer2').style.display = 'block';
                        // Mostrar el cuarto gif después de 2.5 segundos
                        timeoutIds.push(setTimeout(function () {
                            document.getElementById('sadGifContainer2').style.display = 'block';

                        }, 2500));
                    }, 2500));
                }, 2500));
            }, 2500));
        }, 2500));
    }, 2500));
}, 0));

let yesButtonGrowing = false;
let mouseInsideNoBtn = false;

document.getElementById('noBtn').addEventListener('mouseenter', function () {
    mouseInsideNoBtn = true;
    growYesButton(0, 1); // Comienza el crecimiento del botón "Sí" con un retraso de 0 segundos
});

document.getElementById('noBtn').addEventListener('mouseleave', function () {
    mouseInsideNoBtn = false;
});

function growYesButton(currentTime, growthFactor) {
    if (!mouseInsideNoBtn || currentTime >= 10) {
        return;
    }

    let siBtn = document.getElementById('siBtn');
    let initialWidth = siBtn.offsetWidth;
    let initialHeight = siBtn.offsetHeight;
    let initialFontSize = parseFloat(window.getComputedStyle(siBtn).fontSize);

    siBtn.style.transition = 'width 0.5s, height 0.5s, font-size 0.5s';
    siBtn.style.width = (initialWidth * growthFactor) + 'px';
    siBtn.style.height = (initialHeight * growthFactor) + 'px';
    siBtn.style.fontSize = (initialFontSize * growthFactor) + 'px';

    setTimeout(function () {
        growYesButton(currentTime + 2, growthFactor + 0.1); // Llama recursivamente para aumentar el tamaño del botón "Sí" cada 2 segundos
    }, 1000);
}




document.getElementById('siBtn').addEventListener('click', function () {

    // Marcar que hubo un clic temprano
    isEarlyClick = true;

    // Limpiar todos los temporizadores
    for (let id of timeoutIds) {
        clearTimeout(id);
    }

    // Ocultar el gif triste y mostrar el gif feliz
    document.getElementById('sadGifContainer').style.display = 'none';
    document.getElementById('sadGifContainer1').style.display = 'none';
    document.getElementById('sadGifContainer2').style.display = 'none';
    document.getElementById('gifContainer').style.display = 'none';
    document.getElementById('happyGifContainer').style.display = 'block';

    // Ocultar los botones "Pregunta Sí" y "No "
    document.getElementById('question').style.display = 'none';
    document.getElementById('siBtn').style.display = 'none';
    document.body.classList.add('bg-green');
    document.getElementById('noBtn').style.display = 'none';

    // Mostrar el mensaje específico
    document.getElementById('messageContainer').style.display = 'block';
    document.getElementById('messageContainer').innerHTML = '¡Oh Sí! Sabía que ibas a decir que sí <br> Te quiero mucho <3';


    // Mostrar otro gif después de 3 segundos
    setTimeout(function () {
        document.getElementById('happyGifContainer').style.display = 'none';
        document.getElementById('happyGifContainer2').style.display = 'block';
    }, 1000);

    setTimeout(function () {
        document.getElementById('happyGifContainer2').style.display = 'none';
        document.getElementById('happyGifContainer3').style.display = 'block';
    }, 2000);
    setTimeout(function () {
        document.getElementById('happyGifContainer3').style.display = 'none';
        document.getElementById('happyGifContainer4').style.display = 'block';
    }, 3000);

});

// autor: MegaleXY
const messages = [
    "¡No escojas esto! Piensa en los ositos 😭",
    "Dame una oportunidad... No muerdo (mucho) 🐻💕",
    "¿Seguro? Te puede caer un meteorito 💥",
    "Decir 'No' reduce tu suerte en un 99% 🍀",
    "Estás rompiendo el corazón de un osito 💔",
    "Cuidado, este botón tiene una maldición de tristeza 😭",
    "No lo hagas... Jeff Bezos llora cada vez que alguien dice 'No' 💸",
    "Voy a hacer puchero hasta que digas que sí 🥺",
    "Si sigues presionando, un gatito perderá su bigote 🐱💔",
    "Me voy a poner a dieta de chocolates si sigues así 🍫❌",
    "Estás activando el modo 'llorar en posición fetal' 😢",
    "¿De verdad quieres ver a un osito deprimido? 🧸😞",
    "ERROR 404: Excusa válida para decir que no no encontrada 🖥️",
    "Cada vez que presionas esto, un Cupido renuncia 🏹",
    "¡Alguien deténgalo! Está a punto de cometer un error 💀",
    "¿Quieres que te escriba una carta de renuncia al amor? 💌😢",
    "El FBI ya está investigando esta decisión... 🚔",
    "Se acaba de romper una galleta de la fortuna con tu futuro 💀",
    "Voy a ponerme en huelga hasta que cambies de opinión 🚨",
    "Si sigues así, voy a contarle a tu mamá 👀",
];

let messageIndex = 0;

function showNoMessage() {
    const messageContainer = document.getElementById("messageContainer");

    messageContainer.style.display = "block";
    messageContainer.innerHTML = messages[messageIndex];

   
    messageIndex = (messageIndex + 1) % messages.length;
}

