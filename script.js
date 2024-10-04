// Obtener referencias a los elementos de nombres de jugadores
const playerNames = {
    home: document.querySelector(".player-row:first-child .player-name"),
    away: document.querySelector(".player-row:last-child .player-name"),
  };
  const updateNamesButton = document.getElementById("update-names");
  const localNameInput = document.getElementById("local-name");
  const visitorNameInput = document.getElementById("visitor-name");
  
  // Actualizar nombres de los jugadores
  updateNamesButton.addEventListener("click", () => {
    playerNames.home.textContent = localNameInput.value || "Player Arriba";
    playerNames.away.textContent = visitorNameInput.value || "Player Abajo";
  });
  
  // Definir puntajes de juego
  const gamePoints = ["0", "15", "30", "40", "AD"];
  
  // Obtener referencias a los puntajes de juego
  const gameScores = {
    home: document.querySelector(".player-row:first-child .game-score span"),
    away: document.querySelector(".player-row:last-child .game-score span"),
  };
  
  // Obtener referencias a los botones de puntaje
  const gameScoreButtons = {
    home: document.querySelectorAll(
      ".controls-grid .card:nth-child(1) .button-group button"
    ),
    away: document.querySelectorAll(
      ".controls-grid .card:nth-child(2) .button-group button"
    ),
  };
  
  // Actualizar puntajes de juego
  gameScoreButtons.home.forEach((button, index) => {
    button.addEventListener("click", () => {
      gameScores.home.textContent = gamePoints[index];
    });
  });
  
  gameScoreButtons.away.forEach((button, index) => {
    button.addEventListener("click", () => {
      gameScores.away.textContent = gamePoints[index];
    });
  });
  
  // Controlar sets
  const setSpans = {
    home: document.querySelectorAll(".player-row:first-child .sets span"),
    away: document.querySelectorAll(".player-row:last-child .sets span"),
  };
  
  // Obtener referencias a los controles de sets
  const setControls = {
    home: document.querySelector(".controls-grid .card:nth-child(3)"),
    away: document.querySelector(".controls-grid .card:nth-child(4)"),
  };
  
  // Función para configurar controles de sets
  function setupSetControls(player, cardIndex) {
    const card = document.querySelector(
      `.controls-grid .card:nth-child(${cardIndex})`
    );
    const plusButton = card.querySelector(".button-group button:nth-child(1)");
    const minusButton = card.querySelector(".button-group button:nth-child(2)");
    const resetButton = card.querySelector(".button-group button:nth-child(3)");
    const setSelect = card.querySelector("select");
    const setDisplay = setSpans[player];
  
    plusButton.addEventListener("click", () => {
      const setIndex = setSelect.value - 1;
      let currentScore = parseInt(setDisplay[setIndex].textContent) || 0;
      setDisplay[setIndex].textContent = currentScore + 1;
    });
  
    minusButton.addEventListener("click", () => {
      const setIndex = setSelect.value - 1;
      let currentScore = parseInt(setDisplay[setIndex].textContent) || 0;
      if (currentScore > 0) {
        setDisplay[setIndex].textContent = currentScore - 1;
      }
    });
  
    resetButton.addEventListener("click", () => {
      const setIndex = setSelect.value - 1;
      setDisplay[setIndex].textContent = "0";
    });
  }
  
  // Configurar controles de sets para Home y Away
  setupSetControls("home", 3);
  setupSetControls("away", 4);
  
  // Alternar servidor
  const serveIcons = {
    home: document.querySelector(".player-row:first-child .serve-icon"),
    away: document.querySelector(".player-row:last-child .serve-icon"),
  };
  const switchServeButton = document.querySelector(
    ".controls-grid .card:nth-child(5) .button-group button:first-child"
  );
  const hideServeButton = document.querySelector(
    ".controls-grid .card:nth-child(5) .button-group button:nth-child(2)"
  );
  
  let isHomeServing = true;
  
  // Función para actualizar íconos de servicio
  function updateServeIcon() {
    if (isHomeServing) {
      serveIcons.home.classList.add("active");
      serveIcons.away.classList.remove("active");
    } else {
      serveIcons.home.classList.remove("active");
      serveIcons.away.classList.add("active");
    }
  }
  
  // Event listener para alternar servidor
  switchServeButton.addEventListener("click", () => {
    isHomeServing = !isHomeServing;
    updateServeIcon();
  });
  
  // Event listener para ocultar íconos de servicio
  hideServeButton.addEventListener("click", () => {
    if (isHomeServing) {
      serveIcons.home.classList.remove("active");
    } else {
      serveIcons.away.classList.remove("active");
    }
  });
  
  // Inicializar el ícono de servicio
  updateServeIcon();