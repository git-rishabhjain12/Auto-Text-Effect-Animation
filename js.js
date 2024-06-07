const containerEl = document.querySelector(".container");
const careers = ["Youtuber", "apple", "Web Developer", "Instructor"];
let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;

  let career = careers[careerIndex];
  let isVowel = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"].includes(
    career[0]
  );
  const article = isVowel ? "an" : "a";

  containerEl.innerHTML = `<h1>I am ${article} ${career.slice(
    0,
    characterIndex
  )}</h1>`;

  if (characterIndex === career.length) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }

  setTimeout(updateText, 400);
}
