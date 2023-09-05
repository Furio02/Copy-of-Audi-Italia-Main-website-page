// Funzione per lo scorrimento del carosello fotografico dei modelli Audi

document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const carousel = document.querySelector(".slider");
    const images = [
        "1.png",
        "2.png",
        "3.png",
        "4.png",
        "5.png",
        "6.png",
        "7.png",
        "8.png",
        "9.png",
        "10.png",
        "11.png",
        "12.png",
        "13.png",
        "14.png",
        "15.png",
        "16.png",
        "17.png",
    ];
    let currentIndex = 0;

    prevButton.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextButton.addEventListener("click", function () {
        if (currentIndex < images.length - 1 && currentIndex !== 2) {
            currentIndex++;
            updateCarousel();
        }
    });

    function updateCarousel() {
        const translateX = -currentIndex * 100;
        carousel.style.transform = `translateX(${translateX}%)`;
    }
});

// Funzione per cambiare il contenuto del bottone per Auto Nuova e Auto Usata

const radioButtons = document.querySelectorAll('input[name="scelta"]');
const button = document.getElementById('bottone');

button.innerText = "Cerca Audi nuove disponibili: 1364";

radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
        // Verifica quale radio è selezionata
        if (radio.id === "opzione1" && radio.checked) {
            button.innerText = "Cerca Audi nuove disponibili: 1364";
        } else if (radio.id === "opzione2" && radio.checked) {
            button.innerText = "Cerca Audi usate disponibili: 3882";
        }
    });
});

// Funzione per far apparire il testo scrollando verso il basso o verso l'alto

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelectorAll(".animated")[0].classList.add("fadeInBottom");
        }
    })
})
  
observer.observe(document.querySelector(".formule-finanziare-scroll"))