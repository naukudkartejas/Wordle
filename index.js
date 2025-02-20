const words = [
    "APPLE", "BERRY", "CHESS", "DREAM", "EAGLE", "FLOOD", "GLASS", "HEART", 
      "INDEX", "JOKER", "KNIFE", "LAYER", "MAGIC", "NIGHT", "OCEAN", "PLANT", 
      "QUEEN", "RIVER", "SUGAR", "TIGER", "URBAN", "VIRUS", "WOMEN", "XENON", 
      "YOUTH", "ZEBRA", "ALERT", "BLOCK", "CRISP", "DRIVE", "EQUAL", "FRONT", 
      "GRACE", "HOUSE", "INPUT", "JUMBO", "KARMA", "LEMON", "MIGHT", "NERVE", 
      "OPERA", "PRIZE", "QUICK", "ROUTE", "SWEET", "TREND", "UNITY", "VOICE", 
      "WORST", "XRAY", "YEAST", "ZONED", "AWARD", "BLAME", "CRUSH", "DOUBT", 
      "EXACT", "FLEET", "GHOST", "HONEY", "ISSUE", "JUICE", "KNOCK", "LEAVE", 
      "MOUTH", "NEEDY", "OWNER", "PIECE", "QUIET", "REACT", "SMILE", "THINK", 
      "UNIFY", "VISIT", "WORTH", "YIELD", "AGENT", "BRAVE", "CROWN", "DEPTH", 
      "ENJOY", "FLARE", "GLOVE", "HUMOR", "IDEAL", "JUDGE", "KNOWN", "LUNCH", 
      "MONEY", "NEVER", "OZONE", "PULSE", "QUERY", "RADAR", "SHARE", "TRUST", 
      "UNTIE", "VIVID", "WHIRL", "YEARN", "ZONAL", "ABOUT", "BELOW", "CRAWL", 
      "DIGIT", "EMPTY", "FLYER", "GRASP", "HUMAN", "IMAGE", "JOLLY", "KNOCK", 
      "LARGE", "MORAL", "NINJA", "OPINE", "PAINT", "QUILT", "RANGE", "SHAPE", 
      "TABLE", "UNITE", "VAULT", "WASTE", "YACHT", "ZEBRA", "APPLY", "BLEND", 
      "CARGO", "DOZEN", "EXIST", "FAVOR", "GLARE", "HOTEL", "INBOX", "JOKER", 
      "KHAKI", "LEMON", "MIRTH", "NOBLE", "OUTER", "PLUMB", "QUEST", "RIVER", 
      "SLEEK", "THROW", "USUAL", "VIVID", "WHOLE", "YOUNG", "ZAPPY", "ALIVE", 
      "BLESS", "CRAFT", "DWELL", "ENTRY", "FLUSH", "GIANT", "HOPEY", "IGLOO", 
      "JOLLY", "KNEEL", "LOVEL", "MIGHT", "NOISE", "OUTDO", "PLAIN", "QUAKE", 
      "ROUND", "SIGHT", "TOTAL", "UNTIE", "VOGUE", "WAXEN", "YOURS", "ZONED",
      "BLOOM", "CHASE", "DAILY", "EIGHT", "FANCY", "GRAPE", "HOTEL", "IDEAL", 
      "JUMBO", "KNIFE", "LEMON", "MELON", "NIGHT", "OPERA", "PARTY", "QUEEN", 
      "REACT", "SHAPE", "TIGER", "UPSET", "VIVID", "WHIST", "YEAST", "ZEBRA"
  ];
  
  // Function to choose a random word from the array
  function getRandomWord(words) {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }
  
  
  
  
document.addEventListener('DOMContentLoaded', () => {
      
    const solution = getRandomWord(words);  // Change this to any 5-letter word you want
    const submitGuessButton = document.getElementById('submit');
    let currentRow = 0;

    submitGuessButton.addEventListener('click', () => {
        const currentInputs = document.querySelectorAll('.grid-row')[currentRow].querySelectorAll('.grid-item');
        const guess = Array.from(currentInputs).map(input => input.value.toUpperCase()).join('');
        
        if (guess.length !== 5) {
            alert('Please fill in all boxes in the row.');
            return;
        }

        for (let i = 0; i < 5; i++) {
            const letter = guess[i];
            if (letter === solution[i]) {
                currentInputs[i].style.backgroundColor = 'green';
            } else if (solution.includes(letter)) {
                currentInputs[i].style.backgroundColor = 'yellow';
            } else {
                currentInputs[i].style.backgroundColor = 'gray';
            }
        }
        let resultel=document.getElementById("result");
        if (guess === solution) {
            resultel.textContent="YOU HAVE GUESSED THE WORD!"
        document.getElementById("result").style.display = "block";
        setTimeout(() => {
            document.getElementById("result").style.display = "none";
            location.reload();
        }, 3000);
        
        }

        currentRow++;
        if (currentRow === 6) {
            resultel.textContent="GAME OVER! The Answer was: "+solution;
        document.getElementById("result").style.display = "block";
        setTimeout(() => {
            document.getElementById("result").style.display = "none";
            location.reload();
        }, 3000);
        
        }
    });
});
