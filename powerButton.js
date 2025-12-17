function powerButtonFnc(){
    let powerBtn = document.querySelector("main .windows .foot .power");
    let slideUpMenu = document.querySelector("main .windows .foot .power .slideUpMenu");
    
    let isMenuOpen = false;
    powerBtn.addEventListener("click", function (e) {
        e.stopPropagation(); //to stop the click from reaching document's event listener
        if(!isMenuOpen){
            slideUpMenu.style.top = -90 + "px";
            slideUpMenu.style.visibility = "visible";
            slideUpMenu.style.opacity = 1;
            isMenuOpen = true;
        }
        else{
            slideUpMenu.style.top = -75 + "px";
            slideUpMenu.style.visibility = "hidden";
            slideUpMenu.style.opacity = 0;
            isMenuOpen = false;
        }
    });
    
    document.addEventListener("click", function () {
        if(isMenuOpen){
            slideUpMenu.style.top = -75 + "px";
            slideUpMenu.style.visibility = "hidden";
            slideUpMenu.style.opacity = 0;
        }
    });
}

export default powerButtonFnc;