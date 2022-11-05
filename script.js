let select = (id) => document.querySelector(id);
let count = 0;
setInterval(() =>{
    let con = select('#slideshow');
    if(count % 2 == 0){
        con.scrollTo({
            left: 360,
            behaviour: 'smooth'
        })
    }
    else{
        con.scrollTo({
            left: 0,
            behaviour: 'smooth'
        })
    }
    count++;
},5000)

let menu = select('#menu-bar');
let closeMenu = select('#close-menu')
let sidebar = select('#sidebar');

function showSideBar(){
    sidebar.className = 'visible-sidebar';
    menu.style.display = 'none';
    closeMenu.style.display = 'block'
}

function hideSideBar(){
    sidebar.className = 'hidden-sidebar';
    menu.style.display = 'block';
    closeMenu.style.display = 'none';
}

menu.addEventListener('click',showSideBar);
closeMenu.addEventListener('click', hideSideBar);

