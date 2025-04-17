document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.getElementById("sidebar");

    // Toggle Sidebar when clicking the menu icon
    menuToggle.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent click from propagating
        sidebar.classList.toggle("active");
    });

    // Close Sidebar when clicking outside
    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
            sidebar.classList.remove("active");
        }
    });
});



function wordMatchWithoutOrder(query, text) {
    let queryWords = query.toLowerCase().trim().split(/\s+/);
    let textWords = text.toLowerCase().trim().split(/\s+/);

    return queryWords.every(qWord => textWords.some(tWord => tWord.includes(qWord)));
}

function highlightText(element, query) {
    let originalText = element.getAttribute("data-original-text") || element.innerHTML;
    element.setAttribute("data-original-text", originalText);

    let words = query.toLowerCase().split(/\s+/);
    
    let highlightedText = originalText.replace(
        new RegExp(`(${words.join("|")})`, "gi"),
        `<span class="highlight">$1</span>`
    );

    element.innerHTML = highlightedText;
}

function liveSearchAndScroll() {
    let searchBox = document.getElementById("search");
    if (!searchBox) {
        console.error("Search input not found!");
        return;
    }

    let query = searchBox.value.toLowerCase().trim();
    console.log("User searched:", query);

    let allMatches = [];
    let allHeadings = document.querySelectorAll(".rightside-content h1, .rightside-content h2, .rightside-content h3, .rightside-content h4, .rightside-content h5, .rightside-content h6");

    if (query === "") {
        allHeadings.forEach(head => {
            if (head.hasAttribute("data-original-text")) {
                head.innerHTML = head.getAttribute("data-original-text");
            }
            head.classList.remove("highlight");
        });
        document.querySelector(".right-output").scrollTo({ top: 0, behavior: "smooth" });
        return;
    }

    allHeadings.forEach(heading => {
        let text = heading.innerText.toLowerCase();
        if (wordMatchWithoutOrder(query, text)) {
            allMatches.push(heading);
        }
    });

    if (allMatches.length > 0) {
        let firstMatch = allMatches[0];

        allHeadings.forEach(head => {
            if (head.hasAttribute("data-original-text")) {
                head.innerHTML = head.getAttribute("data-original-text");
            }
            head.classList.remove("highlight");
        });

        allMatches.forEach(match => highlightText(match, query));

        firstMatch.classList.add("highlight");

        let rightOutput = document.querySelector(".right-output");
        let elementPosition = firstMatch.offsetTop - rightOutput.offsetTop - 20;

        console.log("Scrolling to:", elementPosition);

        rightOutput.scrollTo({
            top: elementPosition,
            behavior: "smooth",
        });

        setTimeout(() => {
            firstMatch.focus({ preventScroll: true });
        }, 300);
    } else {
        console.log("No match found.");
    }
}

// ✅ Instant Search Listeners
document.getElementById("search").addEventListener("input", liveSearchAndScroll);
document.getElementById("search-icon").addEventListener("click", liveSearchAndScroll);






//   profession change js 

const popup = document.getElementById('professionPopup');
const select = document.getElementById('professionSelect');
const studentSection = document.getElementById('studentSection');
const teacherSection = document.getElementById('teacherSection');

// Show popup on first load or if no profession selected
window.addEventListener('DOMContentLoaded', () => {
  const savedProfession = localStorage.getItem('profession');
  if (savedProfession) {
    showSection(savedProfession);
  } else {
    popup.classList.add('show');
  }
});

function submitProfession() {
  const profession = select.value;

  if (profession === 'student') {
    showSection('student');
    localStorage.setItem('profession', 'student');
  } else if (profession === 'teacher') {
    showSection('teacher');
    localStorage.setItem('profession', 'teacher');
  } else {
    alert('Please select a profession!');
    return;
  }

  popup.classList.remove('show');
}

// Show correct section based on profession
function showSection(profession) {
  if (profession === 'student') {
    studentSection.classList.remove('hidden');
    teacherSection.classList.add('hidden');
  } else if (profession === 'teacher') {
    teacherSection.classList.remove('hidden');
    studentSection.classList.add('hidden');
  }
}

// Change profession manually
function changeProfession() {
  localStorage.removeItem('profession');
  popup.classList.add('show');
  studentSection.classList.add('hidden');
  teacherSection.classList.add('hidden');
}


// Tree toggle
document.addEventListener('click', function (e) {
  if (e.target.closest('.arrow > span')) {
    const parent = e.target.closest('.arrow');
    const childTree = parent.querySelector('ul.tree');
    if (childTree) {
      childTree.classList.toggle('hidden');
    }
  }
});



// Toggle Tree Arrows
  document.querySelectorAll('li.arrow').forEach(item => {
    item.addEventListener('click', function (e) {
      e.stopPropagation();
      const subTree = this.querySelector('ul.tree');
      if (subTree) {
        subTree.classList.toggle('hidden');
        this.classList.toggle('expanded');
      }
    });
  });

  // Hover Explanation Logic
  const infoBox = document.getElementById('infoBox');
  const infoText = infoBox.querySelector('p');

  document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('mouseover', () => {
      const info = tag.getAttribute('data-info');
      infoText.textContent = info || "No description available.";
    });

    tag.addEventListener('mouseout', () => {
      infoText.textContent = "Hover over any tag to see the explanation here.";
    });
  });






  