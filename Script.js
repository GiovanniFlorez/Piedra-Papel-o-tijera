class Game {
    constructor() {
      this.gameContainer = document.querySelector(".container");
      this.userResult = document.querySelector(".user-result img");
      this.cpuResult = document.querySelector(".cpu-result img");
      this.result = document.querySelector(".result");
      this.optionImages = document.querySelectorAll(".option-image");
  
      this.cpuChoices = ["/imagenes/piedra.png", "/imagenes/papel.png", "/imagenes/tijera.png"];
      this.outcomes = {
        RR: "Empate",
        RP: "Cpu",
        RT: "Usuario",
        PP: "Empate",
        PR: "Usuario",
        PT: "Cpu",
        TT: "Empate",
        TR: "Cpu",
        TP: "Usuario"
      };
  
      this.initializeGame();
    }
  
    initializeGame() {
      this.optionImages.forEach((image, index) => {
        image.addEventListener("click", (e) => this.startGame(e, index));
      });
    }
  
    startGame(event, userChoiceIndex) {
      const selectedOptionImage = event.target;
      selectedOptionImage.classList.add("active");
  
      this.userResult.src = this.cpuResult.src = "/imagenes/piedra.png";
      this.result.textContent = "Espera...";
  
      this.optionImages.forEach((image, index) => {
        if (userChoiceIndex !== index) {
          image.classList.remove("active");
        }
      });
  
      this.gameContainer.classList.add("start");
  
      setTimeout(() => {
        this.gameContainer.classList.remove("start");
  
        const userChoiceImageSrc = selectedOptionImage.querySelector("img").src;
        this.userResult.src = userChoiceImageSrc;
  
        const cpuChoiceIndex = Math.floor(Math.random() * 3);
        this.cpuResult.src = this.cpuChoices[cpuChoiceIndex];
  
        const userValue = ["R", "P", "T"][userChoiceIndex];
        const cpuValue = ["R", "P", "T"][cpuChoiceIndex];
  
        const outcomeKey = userValue + cpuValue;
        const outcome = this.outcomes[outcomeKey];
  
        this.result.textContent = userValue === cpuValue ? "Empate" : `${outcome} Gana!!`;
      }, 2500);
    }
  }
  window.onload = () => {
    new Game();
  };