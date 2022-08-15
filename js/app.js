/* On double click background color changes
=========================================== */
document
  .getElementById("subscription")
  .addEventListener("dblclick", myFunction);

function myFunction() {
  document.getElementById("subscription").style.backgroundColor = "purple";
  document.getElementById("subscription").style.color = "white";
}

/* disabled button enabled on text input
========================================*/
document
  .getElementById("exampleInputEmail1")
  .addEventListener("keyup", function (event) {
    document.getElementById("exampleInputEmail1");

    const delBtn = document.getElementById("btn-submit");
    const eventText = event.target.value;
    if (eventText === "email") {
      delBtn.removeAttribute("disabled");
    } else {
      if (eventText != "email") {
        delBtn.setAttribute("disabled", true);
      }
    }
  });

/* On click button disappears
============================= */
document.getElementById("btn-buy1").addEventListener("click", function () {
  const data = document.getElementById("btn-buy1");
  data.style.display = "none";
});
document.getElementById("btn-buy2").addEventListener("click", function () {
  const data = document.getElementById("btn-buy2");
  data.style.display = "none";
});
document.getElementById("btn-buy3").addEventListener("click", function () {
  const data = document.getElementById("btn-buy3");
  data.style.display = "none";
});

/* Setting border radius of cards
================================= */
document.getElementById("card1").addEventListener("click", function () {
  const data = document.getElementById("card1");
  data.style.borderRadius = "20px";
});
document.getElementById("card2").addEventListener("click", function () {
  const data = document.getElementById("card2");
  data.style.borderRadius = "20px";
});
document.getElementById("card3").addEventListener("click", function () {
  const data = document.getElementById("card3");
  data.style.borderRadius = "20px";
});

/* Mouse over image size changes
================================ */
document.getElementById("img1").addEventListener("mouseover", function () {
  const data = document.getElementById("img1");
  data.style.width = "360px";
  data.style.height = "260px";
});
document.getElementById("img1").addEventListener("mouseout", function () {
  const data = document.getElementById("img1");
  data.style.width = "356px";
  data.style.height = "215px";
});

document.getElementById("img2").addEventListener("mouseover", function () {
  const data = document.getElementById("img2");
  data.style.width = "360px";
  data.style.height = "260px";
});
document.getElementById("img2").addEventListener("mouseout", function () {
  const data = document.getElementById("img2");
  data.style.width = "356px";
  data.style.height = "215px";
});

document.getElementById("img3").addEventListener("mouseover", function () {
  const data = document.getElementById("img3");
  data.style.width = "360px";
  data.style.height = "260px";
});
document.getElementById("img3").addEventListener("mouseout", function () {
  const data = document.getElementById("img3");
  data.style.width = "356px";
  data.style.height = "215px";
});

/* Changing color of titles
============================= */
const el = document.querySelectorAll("#title");
for (let i = 0; i < el.length; i++) {
  let element = el[i];
  element.style.color = "tomato";
  element.style.fontWeight = "bold";
}

/* Button click will change theme
================================= */
document.getElementById("change-theme").addEventListener("click", changeTheme);

function changeTheme() {
  document.body.style.backgroundColor = "#FF0000";
  const footer = document.getElementById("footer");
  footer.style.backgroundColor = "#000";
  footer.style.color = "#fff";
  footer.style.marginTop = "30px";
  footer.style.borderRadius = "5px";
}
