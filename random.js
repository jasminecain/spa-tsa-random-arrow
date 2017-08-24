function changeArrowImg() {
  const directions = ['left', 'right'];
  let switchArrow = document.getElementById('arrow');
  //take number from array multiply by randomize decimal number then floor rounds it to whole#
  var randomNum = Math.floor(Math.random() * directions.length);
  console.log(directions[randomNum]);

  switchArrow.classList.toggle(directions[randomNum]);
}

document.addEventListener('click', changeArrowImg, true);

