export function zoomImg(elemntImg) {

    const img = document.querySelector(elemntImg);

    img.addEventListener("click", function () {
        if (!document.getElementById("zoomOverlay")) {
            const overlay = document.createElement("div");
            overlay.id = "zoomOverlay";
            overlay.style.position = "fixed";
            overlay.style.top = "0";
            overlay.style.left = "0";
            overlay.style.width = "100vw";
            overlay.style.height = "100vh";
            overlay.style.background = "rgba(0, 0, 0, 0.8)";
            overlay.style.display = "flex";
            overlay.style.justifyContent = "center";
            overlay.style.alignItems = "center";
            overlay.style.zIndex = "1000";
            overlay.style.cursor = "zoom-out";

            const imgClone = img.cloneNode();
            imgClone.style.maxWidth = "90%";
            imgClone.style.maxHeight = "90%";
            imgClone.style.boxShadow = "0px 0px 20px rgba(255, 255, 255, 0.8)";
            
            overlay.appendChild(imgClone);
            document.body.appendChild(overlay);

            overlay.addEventListener("click", function () {
                document.body.removeChild(overlay);
            });
        }
    });

}