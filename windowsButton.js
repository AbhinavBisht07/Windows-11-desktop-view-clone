function windowsButtonFnc(){
    let windowsBtn = document.querySelector("main .taskbar .mid #windowsIcon");
    let windowsMenu = document.querySelector("main .windows");
    
    let isWindowOpen = false;
    
    windowsMenu.addEventListener("click",function(e){
        e.stopPropagation(); // to stop the clicks(that are done inside windowMenu) from reaching document's event listener.
    });

    windowsBtn.addEventListener("click",function(e){
        e.stopPropagation();
        if(!isWindowOpen){
            windowsMenu.style.visibility = "visible";
            windowsMenu.style.opacity = 1;
            windowsMenu.style.top = 46+"%";
            isWindowOpen = true;
        }
        else{
            windowsMenu.style.visibility = "hidden";
            windowsMenu.style.opacity = 0;
            windowsMenu.style.top = 53+"%";
            isWindowOpen = false;
        }
    })
    
    document.addEventListener("click",function(){
        if(isWindowOpen){
            windowsMenu.style.visibility = "hidden";
            windowsMenu.style.opacity = 0;
            windowsMenu.style.top = 53+"%";
            isWindowOpen = false;
        }
    })

}

export default windowsButtonFnc;

