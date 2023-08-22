const button1 = document.querySelector('.subscribe');
function Subscribe() {
  if (button1.innerText === 'Subscribe') { //innerhtml will throw error if we put spaces around text in button
    button1.innerText = 'Subscribed';
    button1.classList.add('is-subbed');
  }
  else if (button1.innerText === 'Subscribed') {
    button1.innerText = 'Subscribe';
    button1.classList.remove('is-subbed');
  }
}

function onClickEnter(event) {
  // console.log(event);
  if (event.key === 'Enter') {
    calcShip();
  }

}
function calcShip() {
  const inputElement = document.querySelector('.js-input-cost');
  let cost = Number(inputElement.value);
  if (cost < 499) {
    cost = cost + 40;
  }
  document.querySelector('.js-output-cost').innerHTML = `Rs ${cost}`;
}
