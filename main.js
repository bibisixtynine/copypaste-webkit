import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

let prevent = false;

document.addEventListener('beforecopy', (e) => {
  console.log('#event: beforecopy');
  if (prevent) e.preventDefault();
});

document.addEventListener('beforecut', (e) => {
  console.log('#event: beforecut');
  if (prevent) e.preventDefault();
});

function setPreventIndicator(state) {
  let light = document.getElementById('light');
  if (state) {
    light.style = 'color:red';
    light.innerHTML = 'preventDefault enabled'
  } else { 
    light.style = 'color:green';
    light.innerHTML = 'preventDefault disabled'
  }
}

const button = document.getElementById('button');
button.addEventListener('click', (e) => {
  console.log('click');
  prevent = !prevent;
  setPreventIndicator(prevent)
});
