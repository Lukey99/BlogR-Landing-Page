async function openMenu(){
    var image = document.getElementById("menuButton");
    var menu = document.getElementById("menu");
    if (image.src.match("./images/icon-hamburger.svg")){
        await menu.classList.remove('menu-closed');
        menu.classList.add('menu');
        image.src = "./images/icon-close.svg";
    }
    else{
        await menu.classList.add('menu-closed');
        image.src = "./images/icon-hamburger.svg";
    }
}

function openDropdown(){
    var dropdown = document.getElementById("dropdown");
}
