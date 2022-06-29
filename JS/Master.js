let welcomePara = document.getElementById("welcome-text");

window.onload = () => {
  welcomePara.style.opacity = "1";
  welcomePara.style.marginTop = "50px";
};

// animating skill progress

let skillsSect = document.getElementById("skills");

function animate(endProg, selector, spanProgress) {
  let startProg = 0;

  let progress = setInterval(() => {
    startProg++;
    if (startProg === endProg) {
      clearInterval(progress);
    }
    spanProgress.textContent = `${startProg}%`;
    selector.style.background = `conic-gradient(#f0860c ${
      startProg * 3.6
    }deg, #111 0deg)`;
  }, 50);
}
animate(95, document.getElementById("first"), document.getElementById("num-1"));
animate(
  90,
  document.getElementById("second"),
  document.getElementById("num-2")
);
animate(87, document.getElementById("third"), document.getElementById("num-3"));
animate(
  75,
  document.getElementById("fourth"),
  document.getElementById("num-4")
);

// pop up when clicking image in gallery.

let images = Array.from(document.querySelectorAll(".gallery .image img"));

images.forEach((img) => {
  img.onclick = () => {
    let overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.zIndex = "5000";
    document.body.appendChild(overlay);
    let div = document.createElement("div");
    div.classList.add("alerting", "alert", "alert-success");
    div.setAttribute("role", "alert");
    let imgy = document.createElement("img");
    imgy.setAttribute("src", "." + img.getAttribute("src"));
    div.appendChild(imgy);
    let h3 = document.createElement("h3");
    h3.classList.add("alert-heading", "text-primary", "py-3");
    h3.textContent = img.dataset.img;
    div.appendChild(h3);
    document.body.appendChild(div);
    overlay.onclick = () => {
      overlay.classList.toggle("close");
      div.classList.toggle("close");
    };
  };
});

const bars = document.getElementById("bars");

bars.onclick = () => {
  let ul = document.getElementById("ul-links");
  ul.classList.toggle("open");
};
