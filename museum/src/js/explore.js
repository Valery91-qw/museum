const container = document.querySelector('.explore-comp-container');
const resizeContainer = document.querySelector('.explore-resize');

container.addEventListener('mousemove', (event) => {
  let x = event.offsetX;
  resizeContainer.style.width = x + 'px';
  resizeContainer.classList.remove('explore-resize-transition')
});

container.addEventListener('mouseleave', () => {
  resizeContainer.style.width = 50 + '%';
  resizeContainer.classList.add('explore-resize-transition');
})
