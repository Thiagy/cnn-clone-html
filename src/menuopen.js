const menu_box = document.getElementById('menu-box');

menu_box.addEventListener('click', menuOpen);

function menuOpen(){
    
    const little_bar = document.getElementsByClassName('little-bar');

    if(little_bar[1].style.display !== 'none'){

        little_bar[0].style.position = 'absolute';
        little_bar[1].style.display = 'none';
        little_bar[2].style.position = 'absolute';

        little_bar[0].style.transform = "rotate(45deg)";
        little_bar[2].style.transform = "rotate(-45deg)";

        little_bar[0].style.width = "100%";
        little_bar[2].style.width = "100%";

    } else {

        little_bar[0].style.position = '';
        little_bar[1].style.display = '';
        little_bar[2].style.position = '';

        little_bar[0].style.transform = "";
        little_bar[2].style.transform = "";

        little_bar[0].style.width = "";
        little_bar[2].style.width = "";

    }
}
