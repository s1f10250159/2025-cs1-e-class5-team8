const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');

menuButton.addEventListener('click',() =>{
    menu.classList.toggle('show')
});
/*クリック=>showクラス on/off*/

const menuFilter = document.getElementById('menu-button')
const filter = document.getElementById('page-content')

menuFilter.addEventListener('click',() =>{
    filter.classList.toggle('filter')
})