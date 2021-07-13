let delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function render(id, text) {
  let elmRender = document.getElementById(`${id}`);
  let leng = text.length;
  if (elmRender && elmRender !== undefined && elmRender !== null) {
    for (let i = 0; i < leng; i++) {
      if (text[i] === " ") {
        await delay(200);
        elmRender.innerHTML += " ";
      } else if (text[i] === "_") {
        await delay(150);
        elmRender.innerHTML += "<br/>";
      } else if (text[i] === "." || text[i] === "," || text[i] === "!") {
        await delay(200);
        elmRender.innerHTML += `${text[i]}`;
      } else {
        await delay(70);
        elmRender.innerHTML += `${text[i]}`;
      }
    }
  }
}

function changeLocation() {
  console.log("hey");
  document.location = "./index.html";
}
let img = document.querySelector(".index");
img.addEventListener("click", changeLocation);

render(
  "some",
  "Hey!_ my name is ravid, Im Junior highly motivated Full Stack Developer with a passion for _learning and challenge myself._Knowledge in a variety of development languages._Develop projects in conjunction with different types of databases."
);
