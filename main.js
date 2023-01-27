import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

let prevent = false;

document.body.addEventListener('beforecopy', (e) => {
  console.log('before');
  if (prevent) e.preventDefault();
});

document.body.addEventListener('beforecut', (e) => {
  console.log('beforecut');
  if (prevent) e.preventDefault();
});

const button = document.getElementById('button');
button.addEventListener('click', (e) => {
  console.log('click');
  prevent = !prevent;
  let light = document.getElementById('light');
  if (prevent) light.style = 'color:red';
  else light.style = 'color:green';
});
