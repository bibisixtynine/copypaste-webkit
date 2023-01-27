import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let prevent = false;

appDiv.addEventListener('beforecopy', (e) => {
  console.log('before');
  if (prevent) e.preventDefault();
});

appDiv.addEventListener('beforecut', () => {
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
