let lefty = document.querySelector(".left");
let wrapper = document.querySelector(".wrapper");
let deg = 90;
let sqrs = document.querySelectorAll(".sqr");
let checkem = document.querySelector(".checkem");
let btnSub = document.querySelector(".butSub");
let wrapperTwo = document.querySelector(".wrapperTwo");
let menuList = document.querySelector(".menu-list");
let sloth = document.querySelector(".divwin");

sqrs.forEach(function (square, index) {
  square.addEventListener("click", activate);
  lefty.addEventListener("click", rotateL);

  function activate() {
    sqrs.forEach(function (squaree, indexy) {
      sqrs[indexy].classList.remove("active");
    });
    sqrs[index].classList.add("active");
    deg = 90;
  }
});
function rotateL() {
  let sqrActive = document.querySelector(".active");
  if (sqrActive) {
    sqrActive.style.transform = "rotate(" + deg + "deg)";
    deg += 90;
    if (deg == 360) {
      deg = 0;
    }
  }
}
btnSub.addEventListener("click", levelUp);
function levelUp() {
  if (checkem.value == "leniwiec" || checkem.value == "Leniwiec") {
    wrapper.style.display = "none";
    let liEl = document.createElement('li');
    liEl.classList.add('menu-list__item');
    liEl.innerHTML = "<a href='level2.html'>Level 2</a>"
    menuList.append(liEl);
    sloth.style.display = "block";
  }else if(checkem.value != "leniwiec"){
    alert('Hasło nieprawidłowe. Spróbuj jeszcze raz!');
  }
}
