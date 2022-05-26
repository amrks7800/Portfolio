let welcomePara = document.getElementById("welcome-text");

window.onload = () => {
  welcomePara.style.opacity = "1";
  welcomePara.style.marginTop = "50px";
};

// animating skill progress

function animator(id, prog) {
  const number = document.getElementById(id);
  let counter = 0;
  const interval = setInterval(() => {
    counter += 1;
    number.textContent = counter + "%";
    // circle.style.animationName = name;
    if (counter === prog) {
      clearInterval(interval);
    }
  }, 20);
}

animator("num-1", 65);
animator("num-2", 60);
animator("num-3", 70);
animator("num-4", 80);

// pop up when clicking image in gallery.

/* <div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div> */

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

// responsive menu of links in small screens (max-width: 767px)
// const list = document.getElementById("list");
// const bars = document.getElementById("bars");

// window.onresize = () => {
//   if (window.innerWidth < 767) {
//     list.style.display = "none";
//     bars.style.display = "inline !important";
//   } else {
//     list.style.display = "block";
//   }
// };

const bars = document.getElementById("bars");

bars.onclick = () => {
  let ul = document.getElementById("ul-links");
  ul.classList.toggle("open");
};
