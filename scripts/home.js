const projectButtons = document.getElementsByClassName("game-item");

for (let index = 0; index < projectButtons.length; index++) {
    const element = projectButtons[index];
    element.addEventListener("click", () => { 
        let targetPage

        switch (index){
            case 0: targetPage = "go-chicken.html"; break;
            case 1: targetPage = "strength-quest.html"; break;
            case 2: targetPage = "operation-earthquake.html"; break;
            case 3: targetPage = "twitch-cat-overlay.html"; break;
        }

        if (targetPage) window.location = targetPage;
    });
}