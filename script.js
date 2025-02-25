if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/QuickDraw/service-worker.js")
    .then(() => console.log("Service Worker registered successfully."))
    .catch((error) =>
      console.error("Service Worker registration failed:", error)
    );
}

// Loader function to hide loader after page load
function setupLoader() {
  window.onload = function () {
    const loader = document.querySelector(".loader");
    loader.style.display = "none"; // Hide the loader
  };
}
setupLoader();

// Sliding Cards with Arrows
function setupSlidingCards(pageClass) {
  const cardsContainer = document.querySelector(`.${pageClass} .cards`);
  let currentPosition = 0;
  const cardWidth = 330; // Move cards by 330px per click

  // Arrow elements
  const leftArrow = document.querySelector(
    `.${pageClass} .fa-solid.fa-angle-left`
  );
  const rightArrow = document.querySelector(
    `.${pageClass} .fa-solid.fa-angle-right`
  );

  // Update the color of the arrows based on scroll position
  function updateArrowColors() {
    const containerWidth =
      cardsContainer.scrollWidth - cardsContainer.clientWidth;

    leftArrow.style.color =
      currentPosition >= 0 ? "var(--scroll-color)" : "var(--gray-color)";
    rightArrow.style.color =
      Math.abs(currentPosition) >= containerWidth
        ? "var(--scroll-color)"
        : "var(--gray-color)";
  }

  updateArrowColors(); // Initial arrow color setup

  // Right arrow click event
  rightArrow.addEventListener("click", () => {
    const containerWidth =
      cardsContainer.scrollWidth - cardsContainer.clientWidth;
    const remainingSpace = containerWidth + currentPosition;

    if (remainingSpace > cardWidth) {
      currentPosition -= cardWidth;
    } else {
      currentPosition -= remainingSpace;
    }

    cardsContainer.style.transform = `translateX(${currentPosition}px)`;
    updateArrowColors();
  });

  // Left arrow click event
  leftArrow.addEventListener("click", () => {
    const maxLeftMove = Math.min(cardWidth, Math.abs(currentPosition));

    if (currentPosition < 0) {
      currentPosition += maxLeftMove;
      cardsContainer.style.transform = `translateX(${currentPosition}px)`;
    }

    updateArrowColors();
  });
}

// Initialize sliding cards for both pages
setupSlidingCards("page1");
setupSlidingCards("page3");
setupSlidingCards("page4");

// Page navigation (between pages)
function setupPageNavigation() {
  const page1 = document.querySelector(".page1");
  const page2 = document.querySelector(".page2");
  const page3 = document.querySelector(".page3");
  const page4 = document.querySelector(".page4");
  const page5 = document.querySelector(".page5");
  const page6 = document.querySelector(".page6");
  const backButton = document.querySelector(".back");
  const nextButton = document.querySelector(".next");
  const customButton = document.querySelector(".custom-btn");
  const downloadButton = document.querySelector(".download");

  const progressBarBox = document.querySelector(".progress-bar");
  const progressBar = document.querySelector(".bar.completed");
  const steps = document.querySelectorAll(".step");
  const stepInfos = document.querySelectorAll(".step-info");

  let currentPage = 1;

  // Function to update page visibility and progress bar
  function updatePageVisibility() {
    page1.classList.add("hidden");
    page2.classList.add("hidden");
    page3.classList.add("hidden");
    page4.classList.add("hidden");
    page5.classList.add("hidden");
    page6.classList.add("hidden");

    // Show the correct page
    if (currentPage === 1) {
      page1.classList.remove("hidden");
    } else if (currentPage === 2) {
      page2.classList.remove("hidden");
    } else if (currentPage === 3) {
      page3.classList.remove("hidden");
    } else if (currentPage === 4) {
      page4.classList.remove("hidden");
    } else if (currentPage === 5) {
      page5.classList.remove("hidden");
    } else if (currentPage === 6) {
      page6.classList.remove("hidden");
    }

    if (currentPage > 1) {
      backButton.classList.remove("hidden");
    } else {
      backButton.classList.add("hidden");
    }

    if (currentPage < 6) {
      nextButton.classList.remove("hidden");
    } else {
      nextButton.classList.add("hidden");
    }

    if (currentPage >= 5) {
      nextButton.setAttribute("onclick", "generateBracket()");
    } else {
      nextButton.removeAttribute("onclick", "generateBracket()");
    }

    // Show or hide the progress bar based on the current page
    if (currentPage === 6) {
      customButton.classList.remove("hidden");
      downloadButton.classList.remove("hidden");
      progressBarBox.classList.add("hidden"); // Hide the progress bar
    } else {
      customButton.classList.add("hidden");
      downloadButton.classList.add("hidden");
      progressBarBox.classList.remove("hidden");
    }

    // Update progress bar width and steps
    updateProgressBar();
  }

  // Function to update the progress bar and steps
  function updateProgressBar() {
    const progressWidths = ["12%", "24%", "36%", "48%", "60%"]; // Based on page number
    const stepIndex = currentPage - 1;

    // Update progress bar width
    progressBar.style.width = progressWidths[stepIndex];

    // Update active/completed step styles
    steps.forEach((step, index) => {
      if (index < stepIndex) {
        step.classList.add("completed"); // Mark previous steps as completed
        step.classList.remove("active");
      } else if (index === stepIndex) {
        step.classList.add("active"); // Mark current step as active
        step.classList.remove("completed");
      } else {
        step.classList.remove("completed", "active"); // Reset future steps
      }
    });
  }
  const radio3 = document.querySelector(
    ".page3 .card-label:nth-child(3) input[type='radio']"
  );
  const radio4 = document.querySelector(
    ".page3 .card-label:nth-child(4) input[type='radio']"
  );
  // Next button click event
  nextButton.addEventListener("click", () => {
    if (currentPage == 3 && (radio3.checked || radio4.checked)) {
      currentPage++;
      updatePageVisibility();
    }
    if (currentPage < 6) {
      currentPage++;
      updatePageVisibility();
    }
  });

  // Back button click event
  backButton.addEventListener("click", () => {
    if (currentPage == 5 && (radio3.checked || radio4.checked)) {
      currentPage--;
      updatePageVisibility();
    }
    if (currentPage > 1) {
      currentPage--;
      updatePageVisibility();
    }
  });

  // Click event for each step-info to navigate to that page
  stepInfos.forEach((stepInfo, index) => {
    stepInfo.addEventListener("click", () => {
      currentPage = index + 1; // Set the currentPage based on clicked step (index + 1)
      updatePageVisibility();
    });
  });

  // Initial setup
  updatePageVisibility();
}
setupPageNavigation();

// Choose between writing participants or generating a bracket (radio button logic)
function setupRadioToggle() {
  const useParticipantsRadio = document.getElementById("useParticipants");
  const generateBracketRadio = document.getElementById("generateBracket");

  // Sections to show/hide based on radio selection
  const textareaInfo = document.querySelector(".textarea-info");
  const randomOptions = document.querySelector(".page2 .random-options");
  const numberInfo = document.querySelector(".number-info");

  const namesPlayers = document.getElementById("participantNames");

  // Toggle visibility based on the selected radio button
  function toggleVisibility() {
    if (useParticipantsRadio.checked) {
      numberInfo.style.display = "none";
      textareaInfo.style.display = "flex";
      randomOptions.style.display = "flex";
    } else if (generateBracketRadio.checked) {
      numberInfo.style.display = "flex";
      namesPlayers.value = "";
      textareaInfo.style.display = "none";
      randomOptions.style.display = "none";
    }
  }

  // Add event listeners for the radio buttons
  useParticipantsRadio.addEventListener("change", toggleVisibility);
  generateBracketRadio.addEventListener("change", toggleVisibility);

  // Initial call to set visibility based on default selection
  toggleVisibility();
}
setupRadioToggle();

// Number of participants (increment/decrement buttons)
function setupParticipantCounter() {
  const decreaseButton = document.getElementById("decrease");
  const increaseButton = document.getElementById("increase");
  const participantInput = document.getElementById("participantInput");

  // Decrease participants
  decreaseButton.addEventListener("click", () => {
    let currentValue = parseInt(participantInput.value);
    if (currentValue > parseInt(participantInput.min)) {
      participantInput.value = currentValue - 1;
    }
  });

  // Increase participants
  increaseButton.addEventListener("click", () => {
    let currentValue = parseInt(participantInput.value);
    if (currentValue < parseInt(participantInput.max)) {
      participantInput.value = currentValue + 1;
    }
  });
}
setupParticipantCounter();

// Ensure first radio buttons on page1, page3, and page4 are checked
function setupRadioButtons() {
  // Check the first radio button on page1
  const firstRadioPage1 = document.querySelector('.page1 input[type="radio"]');
  if (firstRadioPage1) {
    firstRadioPage1.checked = true; // Ensure it's checked
  }

  // Check the first radio button on page3
  const firstRadioPage3 = document.querySelector('.page3 input[type="radio"]');
  if (firstRadioPage3) {
    firstRadioPage3.checked = true; // Ensure it's checked
  }

  // Check the first radio button on page4
  const firstRadioPage4 = document.querySelector('.page4 input[type="radio"]');
  if (firstRadioPage4) {
    firstRadioPage4.checked = true; // Ensure it's checked
  }
}

// Call this function when setting up your pages
setupRadioButtons();

// Function to set up page3 radio button and checkbox logic
function setupPage3Interactions() {
  // Select all radio buttons
  const radios = document.querySelectorAll(
    ".page3 .card-label input[type='radio']"
  );

  // Select the checkbox
  const checkbox = document.querySelector(
    ".page3 .random-options input[type='checkbox']"
  );

  // Select the random-options container
  const randomOptionsContainer = document.querySelector(
    ".page3 .random-options"
  );

  // Function to handle the visibility logic
  function updateVisibility() {
    // If radio 1 is checked, hide random options
    if (
      document.querySelector(
        ".page3 .card-label:nth-child(1) input[type='radio']"
      ).checked ||
      document.querySelector(
        ".page3 .card-label:nth-child(2) input[type='radio']"
      ).checked
    ) {
      randomOptionsContainer.style.display = "none"; // Hide the entire random-options container if radio 3 is checked
    } else {
      randomOptionsContainer.style.display = "flex"; // Show the random-options container if any other radio is selected
    }

    // If the checkbox is checked, hide radio 3
    const radio1 = document.querySelector(
      ".page3 .card-label:nth-child(1) input[type='radio']"
    );
    const radio2 = document.querySelector(
      ".page3 .card-label:nth-child(2) input[type='radio']"
    );
    if (checkbox.checked) {
      radio1.parentElement.style.display = "none"; // Hide radio 3 if checkbox is checked
      radio2.parentElement.style.display = "none"; // Hide radio 3 if checkbox is checked
    } else {
      radio1.parentElement.style.display = "flex"; // Show radio 3 if checkbox is not checked
      radio2.parentElement.style.display = "flex"; // Show radio 3 if checkbox is not checked
    }
  }

  // Event listeners for each radio button and the checkbox
  radios.forEach((radio) => {
    radio.addEventListener("change", updateVisibility);
  });
  checkbox.addEventListener("change", updateVisibility);

  // Initial visibility setup
  updateVisibility();
}

// Call the setup function for page3
setupPage3Interactions();

// Set all .round with the same height
function setEqualRoundHeights() {
  const rounds = document.querySelectorAll(".round");

  if (rounds.length > 0) {
    // Inicializar a variável para armazenar a maior altura encontrada
    let maxHeight = 0;

    // Calcular a maior altura entre todas as rodadas
    rounds.forEach((round) => {
      const roundHeight = round.offsetHeight;
      if (roundHeight > maxHeight) {
        maxHeight = roundHeight;
      }
    });

    // Aplicar a maior altura a todas as rodadas
    rounds.forEach((round) => {
      round.style.height = maxHeight + "px";
    });
  }
}

// Generate the bracket
function generateBracket() {
  document.getElementById("txt-tournament-name").innerText =
    document.getElementById("tournament-name").value;

  // Obter número de jogadores do input (caso seja usado)
  const numPlayersInput = parseInt(
    document.getElementById("participantInput").value
  );

  // Obter nomes dos jogadores do textarea
  const namesPlayers = document.getElementById("participantNames").value.trim();

  // Verificar se a checkbox "random-names" está marcada
  const randomizeNames = document.getElementById("random-names").checked;

  // Verificar se a checkbox "3rdplace-match" está marcada
  const thirdPlaceMatch = document.getElementById("3rdplace-match").checked;

  let players = [];

  // Se há nomes no textarea, usá-los, caso contrário, usar o número de jogadores
  if (namesPlayers) {
    // Dividir o textarea por quebras de linha e remover espaços extras
    players = namesPlayers
      .split("\n")
      .map((name) => name.trim())
      .filter((name) => name !== "");

    if (players.length < 2) {
      alert("Please enter at least two player names.");
      return;
    }

    // Embaralhar os nomes se a checkbox "random-names" estiver marcada
    if (randomizeNames) {
      players = shuffleArray(players);
    }
  } else if (!isNaN(numPlayersInput) && numPlayersInput >= 2) {
    // Se não houver nomes, usar o número de jogadores
    players = Array.from(
      { length: numPlayersInput },
      (_, i) => `Player ${i + 1}`
    );
  } else {
    alert(
      "Please enter a valid number of players (at least 2) or player names."
    );
    return;
  }

  // Get the bracket container
  const container = document.getElementById("bracketContainer");
  container.innerHTML = ""; // Clear previous bracket

  // Calculate the number of rounds
  const rounds = Math.ceil(Math.log2(players.length));

  // Handle byes (add empty slots if necessary)
  const totalSlots = 2 ** rounds;
  for (let i = players.length; i < totalSlots; i++) {
    players.push(" "); // Fill with empty strings for byes
  }

  // Create the rounds
  let roundMatches = players;
  let semifinalLosers = []; // Para armazenar os perdedores das semifinais
  for (let r = 0; r < rounds; r++) {
    const roundDiv = document.createElement("div");
    roundDiv.classList.add("round");
    const numMatches = roundMatches.length / 2;

    // Create matches for this round
    const nextRound = [];
    for (let i = 0; i < numMatches; i++) {
      const matchDiv = document.createElement("div");
      matchDiv.classList.add("match");
      const player1 = roundMatches[i * 2];
      const player2 = roundMatches[i * 2 + 1];

      // Check if either player is empty (bye)
      if (player1 === " " && player2 === " ") {
        matchDiv.innerHTML = ` <br> vs <br><br> `;
        nextRound.push(" "); // Both players get a bye
      } else if (player1 === " ") {
        matchDiv.innerHTML = `${player2} <br> vs <br><br> `;
        nextRound.push(player2); // Player 2 passes
      } else if (player2 === " ") {
        matchDiv.innerHTML = ` <br> vs <br> ${player1}`;
        nextRound.push(player1); // Player 1 passes
      } else {
        matchDiv.innerHTML = `${player1} <br> vs <br> ${player2}`;
        nextRound.push(""); // Placeholder for the winner

        // Guardar perdedores das semifinais, se for a penúltima rodada
        if (r === rounds - 2) {
          semifinalLosers.push(player1, player2);
        }
      }

      roundDiv.appendChild(matchDiv);
    }
    container.appendChild(roundDiv);
    roundMatches = nextRound;
  }

  // Adicionar partida de 3º lugar, se a checkbox estiver marcada
  if (thirdPlaceMatch && semifinalLosers.length === 4) {
    const thirdPlaceDiv = document.createElement("div");
    thirdPlaceDiv.classList.add("round");

    const matchDiv = document.createElement("div");
    matchDiv.classList.add("match");
    const loser1 = semifinalLosers[0];
    const loser2 = semifinalLosers[1];

    // matchDiv.innerHTML = `${loser1} <br> vs <br> ${loser2}`;
    matchDiv.innerHTML = ` <br> vs <br><br> `;
    thirdPlaceDiv.appendChild(matchDiv);

    container.appendChild(thirdPlaceDiv);
  }

  // Usar requestAnimationFrame para garantir que o layout esteja renderizado
  requestAnimationFrame(setEqualRoundHeights);
  bracketColor();
}

// Função auxiliar para embaralhar o array de nomes (usando Fisher-Yates shuffle)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Trocar elementos
  }
  return array;
}

// Download the bracket
function downloadImage() {
  const captureElement = document.getElementById("capture");

  html2canvas(captureElement, {
    useCORS: true, // Configuração para usar CORS
    allowTaint: false,
  })
    .then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "bracket.png";
      link.click();
    })
    .catch((err) => {
      console.error("Erro ao capturar a imagem:", err);
    });
}

// Change bracket background image
function bracketBackground() {
  const bracketImage = document.getElementById("bracketImage");
  const imageInput = document.getElementById("imageInput");

  // Listen for changes in the file input
  imageInput.addEventListener("change", function (event) {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader(); // Create a FileReader to read the image

      // When the file is loaded, set the image src to the file data
      reader.onload = function (e) {
        bracketImage.src = e.target.result; // Set image src to the selected file data
        bracketImage.style.display = "block"; // Show the image
      };

      reader.readAsDataURL(file); // Read the image file as a data URL
    } else {
      // If no file is selected, hide the image
      bracketImage.style.display = "none";
    }
  });
}
bracketBackground();

function bracketColor() {
  // Select the tournament name input element
  const tournamentName = document.getElementById("txt-tournament-name");
  const tournamentMatchs = document.getElementsByClassName("match");

  // Add event listener for radio button change
  document.querySelectorAll(".color-radio").forEach((radio) => {
    radio.addEventListener("change", function () {
      if (this.checked) {
        // Get the computed background color (which might be a CSS variable) from the next sibling div
        const selectedColorDiv = this.nextElementSibling;
        const selectedColor =
          window.getComputedStyle(selectedColorDiv).backgroundColor;

        // Apply the selected color to the background of the input element
        tournamentName.style.color = selectedColor;
        for (let i = 0; i < tournamentMatchs.length; i++) {
          tournamentMatchs[i].style.border = `2px solid ${selectedColor}`;
        }
      }
    });
  });

  // Trigger change event on page load to set initial color
  document
    .querySelector(".color-radio:checked")
    .dispatchEvent(new Event("change"));
}

const topLeagues = [
  "Premier League (England)",
  "La Liga Santander (Spain)",
  "Bundesliga (Germany)",
  "Serie A (Italy)",
  "Ligue 1 (France)",
  "Liga Portugal (Portugal)",
  "Eredivisie (Netherlands)",
  "Barclays Women's Super League (England)",
];

const majorTournaments = [
  "UEFA Champions League",
  "UEFA Europa League",
  "UEFA Super Cup",
  "CONMEBOL Libertadores",
  "UEFA Women's Champions League",
  "FA Cup (England)",
  "Coppa Italia (Italy)",
  "DFB-Pokal (Germany)",
];
