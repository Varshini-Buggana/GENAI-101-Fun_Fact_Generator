const funFacts = [
  "You can’t hum while holding your nose closed.",
  "A group of flamingos is called a ‘flamboyance’.",
  "Wombat poop is cube‑shaped.",
  "Avocados are berries, and strawberries aren’t.",
  "A bolt of lightning contains enough energy to toast 100,000 slices of bread.",
  "An octopus has three hearts and blue blood.",
  "Honey never spoils—even after thousands of years.",
  "Bananas glow blue under ultraviolet light."
];

const btn = document.getElementById("generate-btn");
const box = document.getElementById("factBox");

btn.addEventListener("click", () => {
  const idx = Math.floor(Math.random() * funFacts.length);
  box.textContent = funFacts[idx];
});
