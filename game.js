  const buttons = document.querySelectorAll("button");
  const sound = document.getElementById("clickSound");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      sound.currentTime = 0;
      sound.play();
    });
  });

//=========================//
//======typing js ========//

window.onload = function () {
    const startBtn = document.getElementById("typing-start-btn");
    const resetBtn = document.getElementById("typing-reset-btn");
    const inputBox = document.getElementById("typing-input");
    const timeDisplay = document.getElementById("typing-time");
    const accuracyDisplay = document.getElementById("typing-accuracy");
    const scoreDisplay = document.getElementById("typing-score");
    const typingTextEl = document.getElementById("typing-text");
  
    let typingText = "";
    let startTime;
    let timerInterval;
  
    const textSamples = [
      `JavaScript is a programming language used to make web pages interactive. It runs in the browser.`,
      `function sum(a, b) {\n  return a + b;\n}`,
      `Typing helps improve focus and hand-eye coordination. Try to be accurate, not just fast.`,
      `const user = {\n  name: "Alex",\n  age: 25\n};`,
      `HTML stands for HyperText Markup Language. It is used to design the structure of web pages.`,
      `let message = "Practice daily to improve typing speed and accuracy.";`,
      `CSS allows you to style HTML elements with colors, spacing, and layout.`,
      `for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}`,
      `Always write clean and readable code. It helps others understand your work easily.`,
      `function greet(name) {\n  return \`Hello, \${name}!\`;\n}`
    ];
  
    function getRandomText() {
      const index = Math.floor(Math.random() * textSamples.length);
      return textSamples[index];
    }
  
    function startGame() {
      typingText = getRandomText();
      typingTextEl.textContent = typingText;
  
      inputBox.disabled = false;
      inputBox.value = "";
      inputBox.focus();
  
      startTime = new Date().getTime();
      timerInterval = setInterval(updateTime, 100);
    }
  
    function updateTime() {
      const currentTime = (new Date().getTime() - startTime) / 1000;
      timeDisplay.textContent = currentTime.toFixed(2);
    }
  
    function endGame() {
      clearInterval(timerInterval);
      inputBox.disabled = true;
  
      const userInput = inputBox.value.trim();
      const totalChars = typingText.length;
      let correctChars = 0;
  
      for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] === typingText[i]) {
          correctChars++;
        }
      }
  
      const accuracy = ((correctChars / totalChars) * 100).toFixed(2);
      const timeTaken = (new Date().getTime() - startTime) / 1000;
      const score = Math.floor((accuracy / timeTaken) * 10);
  
      accuracyDisplay.textContent = isNaN(accuracy) ? "0" : accuracy;
      scoreDisplay.textContent = isNaN(score) ? "0" : score;
    }
  
    function resetGame() {
      clearInterval(timerInterval);
      inputBox.disabled = true;
      inputBox.value = "";
      typingTextEl.textContent = "Click 'Start Typing' to begin.";
      timeDisplay.textContent = "0.00";
      accuracyDisplay.textContent = "100";
      scoreDisplay.textContent = "0";
    }
  
    // Disable paste
    inputBox.addEventListener("paste", (e) => {
      e.preventDefault();
      alert("❌ Paste not allowed! Please type the content.");
    });
  
    startBtn.addEventListener("click", () => {
      resetGame();
      startGame();
    });
  
    resetBtn.addEventListener("click", resetGame);
  
    inputBox.addEventListener("input", () => {
      if (inputBox.value.trim() === typingText) {
        endGame();
      }
    });
  };
  


//========================//
//======= dragdrop js ===//
const blocksContainer = document.querySelector('.draggable-blocks');
const dropZone = document.querySelector('.drop-zone');
const submitBtn = document.querySelector('.submit-btn');

// Sample Questions for HTML, CSS, JavaScript, and other languages
let currentGameBlocks = [
    {
      question: 'Arrange the HTML tags in correct order.',
      blocks: [
        '<footer> </footer>',
        '<header> </header>',
        '<div> </div>',
        '<main> </main>',
        '<p> </p>',
      ],
      correctOrder: [
        '<header> </header>',
        '<main> </main>',
        '<p> </p>',
        '<footer> </footer>',
        '<div> </div>',
      ]
    },
    {
      question: 'Arrange the CSS Flexbox properties in correct order.',
      blocks: [
        'justify-content: space-between;',
        'align-items: center;',
        'flex-direction: row;',
        'display: flex;',
      ],
      correctOrder: [
        'display: flex;',
        'flex-direction: row;',
        'justify-content: space-between;',
        'align-items: center;',
      ]
    },
    {
      question: 'Arrange the JavaScript statements in correct order.',
      blocks: [
        'let a = 10;',
        'console.log(a);',
        'a = 20;',
      ],
      correctOrder: [
        'let a = 10;',
        'a = 20;',
        'console.log(a);',
      ]
    },
    {
      question: 'Arrange the Python List methods in correct order.',
      blocks: [
        'list.sort();',
        'list.append(5);',
        'list.remove(3);',
        'list = [1, 3, 2];',
      ],
      correctOrder: [
        'list = [1, 3, 2];',
        'list.append(5);',
        'list.remove(3);',
        'list.sort();',
      ]
    },
    {
      question: 'Arrange the Java methods in correct order.',
      blocks: [
        'System.out.println("Hello");',
        'int x = 5;',
        'x = 10;',
      ],
      correctOrder: [
        'int x = 5;',
        'x = 10;',
        'System.out.println("Hello");',
      ]
    },
    {
      question: 'Arrange the C++ function calls in correct order.',
      blocks: [
        'std::cout << "Hello";',
        'int x = 10;',
        'x = 20;',
      ],
      correctOrder: [
        'int x = 10;',
        'x = 20;',
        'std::cout << "Hello";',
      ]
    },
    {
      question: 'Arrange the HTML form elements in correct order.',
      blocks: [
        '<input type="password">',
        '<label>Username</label>',
        '<button>Submit</button>',
        '<input type="text">',
      ],
      correctOrder: [
        '<label>Username</label>',
        '<input type="text">',
        '<input type="password">',
        '<button>Submit</button>',
      ]
    },
    {
      question: 'Arrange the C++ access specifiers in correct order.',
      blocks: [
        'private:',
        'public:',
        'protected:',
      ],
      correctOrder: [
        'public:',
        'protected:',
        'private:',
      ]
    },
    {
      question: 'Arrange the JavaScript array methods in correct order.',
      blocks: [
        'arr.push(10);',
        'arr = [1, 2, 3];',
        'arr.pop();',
      ],
      correctOrder: [
        'arr = [1, 2, 3];',
        'arr.push(10);',
        'arr.pop();',
      ]
    },
    {
      question: 'Arrange the CSS Box Model properties in correct order.',
      blocks: [
        'padding: 5px;',
        'border: 1px solid black;',
        'margin: 10px;',
        'width: 100px;',
      ],
      correctOrder: [
        'width: 100px;',
        'padding: 5px;',
        'border: 1px solid black;',
        'margin: 10px;',
      ]
    },
    {
      question: 'Arrange the Python function definition steps in correct order.',
      blocks: [
        'def my_function():',
        'return x * 2',
        'x = 10',
      ],
      correctOrder: [
        'x = 10',
        'def my_function():',
        'return x * 2',
      ]
    },
    {
      question: 'Arrange the Java class structure in correct order.',
      blocks: [
        'public static void main(String[] args) {',
        'public class MyClass {',
        'int x = 10;',
      ],
      correctOrder: [
        'public class MyClass {',
        'int x = 10;',
        'public static void main(String[] args) {',
      ]
    },
    {
      question: 'Arrange the CSS Selectors in correct order.',
      blocks: [
        'div { color: red; }',
        'h1 { font-size: 24px; }',
        '.container { width: 100%; }',
        '#header { background-color: #333; }',
      ],
      correctOrder: [
        '#header { background-color: #333; }',
        '.container { width: 100%; }',
        'h1 { font-size: 24px; }',
        'div { color: red; }',
      ]
    },
    {
      question: 'Arrange the JavaScript variable declarations in correct order.',
      blocks: [
        'let b = 5;',
        'let a = 10;',
        'console.log(a);',
      ],
      correctOrder: [
        'let a = 10;',
        'let b = 5;',
        'console.log(a);',
      ]
    },
    {
      question: 'Arrange the C++ conditional statements in correct order.',
      blocks: [
        'if (x > 5) {',
        'else if (x == 5) {',
        'else {',
      ],
      correctOrder: [
        'if (x > 5) {',
        'else if (x == 5) {',
        'else {',
      ]
    }
  ];
  

  let currentQuestionIndex = 0;
  let isDragged = false; // Track if a block has been dragged
  let score = 0; // Initialize score
  const scoreDisplay = document.getElementById('score'); // Assuming you have an element with id="score"
  
  // Function to set blocks for the current question
  function setBlocks() {
    const currentQuestion = currentGameBlocks[currentQuestionIndex];
  
    // Update the question prompt
    document.querySelector('.game-instructions p').textContent = currentQuestion.question;
  
    // Clear existing blocks
    blocksContainer.innerHTML = '';
  
    // Add draggable blocks
    currentQuestion.blocks.forEach(block => {
      const div = document.createElement('div');
      div.classList.add('draggable');
      div.setAttribute('draggable', 'true');
      div.textContent = block;
      div.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text', e.target.innerText);
        e.target.classList.add('dragged');
        e.target.setAttribute('draggable', 'false'); // Prevent dragging the same block
      });
      blocksContainer.appendChild(div);
    });
  }
  
  // Reset the drop area
  function resetDropArea() {
    dropZone.innerHTML = '<p>Drop the blocks here in the correct order.</p>';
  }
  
  // Logic for dragging and dropping blocks
  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
  });
  
  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    const droppedBlock = e.dataTransfer.getData('text');
  
    // Enable the submit button only if a block has been dragged
    if (!isDragged) {
      isDragged = true;
      submitBtn.disabled = false; // Enable the submit button
    }
  
    // Prevent dragging the same block again
    if (dropZone.contains(document.querySelector(`[data-block="${droppedBlock}"]`))) {
      alert("You cannot drag the same block again!");
      return; // Don't allow duplicate drag
    }
  
    // Create new block in the drop zone
    const newBlock = document.createElement('div');
    newBlock.classList.add('draggable');
    newBlock.innerText = droppedBlock;
    newBlock.setAttribute('data-block', droppedBlock); // Add custom data attribute to track blocks
    dropZone.appendChild(newBlock);
  });
  
  // Handle Submit button logic
  submitBtn.addEventListener('click', () => {
    if (!isDragged) {
      alert("Please drag at least one block before submitting!");
      return;
    }
  
    // Get the blocks in the drop zone and compare the order with the correct order
    const blocksInDropZone = dropZone.querySelectorAll('.draggable');
    const blockOrder = Array.from(blocksInDropZone).map(block => block.innerText);
    const correctOrder = currentGameBlocks[currentQuestionIndex].correctOrder;
  
    // Check if the answer is correct
    if (JSON.stringify(blockOrder) === JSON.stringify(correctOrder)) {
      score += 10; // Increase score by 10 for a correct answer
      alert('Correct Order! Well Done.');
    } else {
      score -= 5; // Decrease score by 5 for an incorrect answer
      alert('Try Again! The order is incorrect.');
    }
  
    // Update the score display
    scoreDisplay.textContent = score;
  
    // Rotate to the next question
    currentQuestionIndex = (currentQuestionIndex + 1) % currentGameBlocks.length;
  
    // Set the blocks for the next question
    setBlocks();
    
    // Reset the drop area for the next question
    resetDropArea();
  
    // Reset drag state and disable submit button
    isDragged = false;
    submitBtn.disabled = true;
  });
  
  // Initialize blocks for the first question
  setBlocks();
  
