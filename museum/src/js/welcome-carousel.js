

const ul = document.getElementById('elements')
const current = document.getElementById('current')

ul.addEventListener('click', (event) => {
  if(event.target.tagName === 'LI'){
      current.innerText = event.target.innerText;
  }
})