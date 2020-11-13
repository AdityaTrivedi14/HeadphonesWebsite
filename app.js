function change(color, image, heading, newColor){
  document.querySelector('body').style.background = color;
  document.getElementById('img').src = image;
  document.getElementById('heading').innerHTML = heading;
  document.getElementById('heading').style.color = newColor;
  document.getElementById('btn').style.background = newColor;
}
