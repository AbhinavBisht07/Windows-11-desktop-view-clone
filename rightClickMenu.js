// function rightClickMenu() {
//     let desktop = document.querySelector("section.desktop");
//     let rightClickMenu = document.querySelector(".rightClickMenu");
//     let isRightClickMenuOpen = false;


//     let view = document.querySelector(".rightClickMenu .options .view");
//     let sortBy = document.querySelector(".rightClickMenu .options .sortBy");
//     let neww = document.querySelector(".rightClickMenu .options .new");

//     let menuu = document.querySelector(".rightClickMenu .options .option .menuu");
//     let viewMenu = document.querySelector(".rightClickMenu .options .option .viewMenu");
//     let sortByMenu = document.querySelector(".rightClickMenu .options .option .sortByMenu");
//     let newwMenu = document.querySelector(".rightClickMenu .options .newMenu");


//     function showRightClickMenu(X, Y) {

//         rightClickMenu.style.display = "block";
//         rightClickMenu.style.visibility = "hidden";

//         let RCmenuWidth = rightClickMenu.offsetWidth;
//         let RCmenuheight = rightClickMenu.offsetHeight;
//         // console.log(menuWidth, menuheight);
//         let desktopWidth = desktop.offsetWidth;
//         let desktopHeight = desktop.offsetHeight;
//         // console.log(windowWidth,windowHeight);

//         if (X + RCmenuWidth > desktopWidth) {
//             X = desktopWidth - RCmenuWidth;
//         }
//         if (Y + RCmenuheight > desktopHeight) {
//             Y = desktopHeight - RCmenuheight;
//         }

//         if (!isRightClickMenuOpen) {
//             rightClickMenu.style.display = "block";
//             rightClickMenu.style.visibility = "visible";
//             rightClickMenu.style.left = X + "px";
//             rightClickMenu.style.top = Y + "px";
//             rightClickMenu.style.translate = "transform(-50%,-50%)";
//             isRightClickMenuOpen = true;
//         }
//         else {
//             rightClickMenu.style.display = "none";
//             rightClickMenu.style.display = "hidden";
//             isRightClickMenuOpen = false;
//         }


//         // Hover Menus :- 
//         menuu.style.display = "block";
//         menuu.style.visibility = "hidden";

//         let viewWidth = viewMenu.offsetWidth;
//         let viewheight = viewMenu.offsetHeight;
//         console.log(viewWidth,viewheight)
//         let sortByWidth = sortByMenu.offsetWidth;
//         let sortByheight = sortByMenu.offsetHeight;
//         let newwWidth = newwMenu.offsetWidth;
//         let newwheight = newwMenu.offsetHeight;
//         if (X + RCmenuWidth > desktopWidth){
//             X = desktopWidth - RCmenuWidth;
//         }
//         if (Y + RCmenuheight > desktopHeight) {
//             Y = desktopHeight - RCmenuheight;
//         }

//         if ( (X + RCmenuWidth + viewWidth) < desktopWidth ) {
//             view.addEventListener("mouseover", function () {
//                 viewMenu.style.display = "block";
//                 viewMenu.style.visibility = "visible";
//             })
//             view.addEventListener("mouseout", function () {
//                 viewMenu.style.display = "none";
//                 viewMenu.style.visibility = "hidden";
//             })
//         } else{
//             view.addEventListener("mouseover", function () {
//                 viewMenu.style.display = "block";
//                 viewMenu.style.visibility = "visible";
//                 viewMenu.style.right = 101+"%";

//             })
//             view.addEventListener("mouseout", function () {
//                 viewMenu.style.display = "none";
//                 viewMenu.style.visibility = "hidden";
//             })
//         }


//         if ( (X + RCmenuWidth + sortByWidth) < desktopWidth || (Y + RCmenuheight + sortByheight < desktopHeight) ) {
//             sortBy.addEventListener("mouseover", function () {
//                 sortByMenu.style.display = "block";
//                 sortByMenu.style.visibility = "visible";
//             })
//             sortBy.addEventListener("mouseout", function () {
//                 sortByMenu.style.display = "none";
//                 sortByMenu.style.visibility = "hidden";
//             })
//         } else{
//             sortBy.addEventListener("mouseover", function () {
//                 sortByMenu.style.display = "block";
//                 sortByMenu.style.visibility = "visible";
//                 sortByMenu.style.right = 50+"%";

//             })
//             sortBy.addEventListener("mouseout", function () {
//                 sortByMenu.style.display = "none";
//                 sortByMenu.style.visibility = "hidden";
//             })
//         }


//         if ( (X + RCmenuWidth + newwWidth) < desktopWidth || (Y + RCmenuheight + newwheight < desktopHeight) ) {
//             neww.addEventListener("mouseover", function () {
//                 newwMenu.style.display = "block";
//                 newwMenu.style.visibility = "visible";
//             })
//             neww.addEventListener("mouseout", function () {
//                 newwMenu.style.display = "none";
//                 newwMenu.style.visibility = "hidden";
//             })
//         } else{
//             neww.addEventListener("mouseover", function () {
//                 newwMenu.style.display = "block";
//                 newwMenu.style.visibility = "visible";
//                 newwMenu.style.right = 112+"%";

//             })
//             neww.addEventListener("mouseout", function () {
//                 newwMenu.style.display = "none";
//                 newwMenu.style.visibility = "hidden";
//             })
//         }
//     }


//     desktop.addEventListener("contextmenu", function (e) {
//         e.preventDefault()// This will disable browser's default contextMenu.
//         showRightClickMenu(e.clientX, e.clientY);
//     });
// }
// export default rightClickMenu;






function rightClickMenu() {

    /* ===============================
       MAIN ELEMENTS
    =============================== */
    const desktop = document.querySelector("section.desktop");
    const rcMenu = document.querySelector(".rightClickMenu");

    const view = rcMenu.querySelector(".view");
    const sortBy = rcMenu.querySelector(".sortBy");
    const neww = rcMenu.querySelector(".new");

    const viewMenu = rcMenu.querySelector(".viewMenu");
    const sortByMenu = rcMenu.querySelector(".sortByMenu");
    const newwMenu = rcMenu.querySelector(".newMenu");

    let menuOpen = false;
    let clickX = 0;
    let clickY = 0;

    /* ===============================
       UTILITY FUNCTIONS
    =============================== */

    function hideAllSubMenus() {
        viewMenu.style.display = "none";
        sortByMenu.style.display = "none";
        newwMenu.style.display = "none";
    }

    function positionSubMenu(parentItem, subMenu) {
    subMenu.style.display = "block";
    subMenu.style.visibility = "hidden";

    const subRect = subMenu.getBoundingClientRect();
    const parentRect = parentItem.getBoundingClientRect();
    const desktopRect = desktop.getBoundingClientRect();

    const subWidth = subMenu.offsetWidth;
    const subHeight = subMenu.offsetHeight;

    /* ===============================
       HORIZONTAL POSITION
    =============================== */

    // Default: open to the right
    let left = parentRect.width;

    // If overflowing right → open left
    if (parentRect.right + subWidth > desktopRect.right) {
        left = -subWidth;
    }

    /* ===============================
       VERTICAL POSITION
    =============================== */

    // Align top with parent item
    let top = 0;

    // If overflowing bottom → shift up
    if (parentRect.top + subHeight > desktopRect.bottom) {
        top = desktopRect.bottom - parentRect.top - subHeight;
    }

    // Apply styles
    subMenu.style.left = left + "px";
    subMenu.style.top = top + "px";
    subMenu.style.visibility = "visible";
}


    /* ===============================
       RIGHT CLICK MENU OPEN
    =============================== */

    function showRightClickMenu(x, y) {
        clickX = x;
        clickY = y;

        rcMenu.style.display = "block";
        rcMenu.style.visibility = "hidden";

        const menuWidth = rcMenu.offsetWidth;
        const menuHeight = rcMenu.offsetHeight;
        const desktopWidth = desktop.offsetWidth;
        const desktopHeight = desktop.offsetHeight;

        if (x + menuWidth > desktopWidth) {
            x = desktopWidth - menuWidth;
        }
        if (y + menuHeight > desktopHeight) {
            y = desktopHeight - menuHeight;
        }

        rcMenu.style.left = x + "px";
        rcMenu.style.top = y + "px";
        rcMenu.style.visibility = "visible";

        menuOpen = true;
        hideAllSubMenus();
    }

    function closeRightClickMenu() {
        rcMenu.style.display = "none";
        hideAllSubMenus();
        menuOpen = false;
    }

    /* ===============================
       EVENT LISTENERS (ONLY ONCE)
    =============================== */

    desktop.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        showRightClickMenu(e.clientX, e.clientY);
    });

    window.addEventListener("click", () => {
        if (menuOpen) closeRightClickMenu();
    });

    view.addEventListener("mouseenter", () => {
        hideAllSubMenus();
        positionSubMenu(view, viewMenu);
    });

    sortBy.addEventListener("mouseenter", () => {
        hideAllSubMenus();
        positionSubMenu(sortBy, sortByMenu);
    });

    neww.addEventListener("mouseenter", () => {
        hideAllSubMenus();
        positionSubMenu(neww, newwMenu);
    });

    rcMenu.addEventListener("mouseleave", hideAllSubMenus);
}

export default rightClickMenu;