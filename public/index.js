// (() => {
//   const movebutton = document.getElementById('movebutton');
//   const adddiv = document.getElementById('adddiv');
//   movebutton.addEventListener('click', () =>
//     toggleMenu(adddiv, movebutton)
//   );
// })();
//
// function toggleMenu(drawer, button) {
//   if(drawer.style.display == 'block') {
//           drawer.style.display = 'none';
//      } else if(drawer.style.display == 'none') {
//           drawer.style.display = 'block';
//      }
// }

(() => {
  const appDrawerButton = document.querySelector('.app_drawer__button');
  const appDrawer = document.querySelector('.app_drawer');
  appDrawerButton.addEventListener('click', () =>
    toggleMenu(appDrawer, appDrawerButton)
  );
})();

function toggleMenu(drawer, button) {
  button.classList.toggle('app_drawer__button--visible');
  drawer.classList.toggle('app_drawer--visible');
}
