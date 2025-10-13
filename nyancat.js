// nyan-sequence.js

(function () {
  const sequence = "nyancat";
  let index = 0;

  document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();

    if (key === sequence[index]) {
      index++;
      if (index === sequence.length) {
        window.location.href = "nyancat.html"; // change as needed
        index = 0;
      }
    } else {
      index = 0;
    }
  });
})();
