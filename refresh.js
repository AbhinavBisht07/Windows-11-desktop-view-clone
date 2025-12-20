function refresh() {
    let refreshBtn = document.querySelector(".rightClickMenu .options .refresh");
    refreshBtn.addEventListener("click", function () {
        location.reload();
    })
}
export default refresh;