const characterDataVlad = {
    arrImgs: ["running sw0000.bmp", "running sw0001.bmp",
        "running sw0002.bmp", "running sw0003.bmp", "running sw0004.bmp",
        "running sw0005.bmp", "running sw0006.bmp", "running sw0007.bmp"],
    poseNumber: 0,
    elem: document.querySelector("#vlad"),
    screenWidth: document.querySelector("#forest").clientWidth,
    screenHeight: document.querySelector("#forest").scrollHeight,
    x: document.querySelector("#forest").clientWidth - 100, // Start from the right
    y: 0, // Start from the top
    timerId: null,
    move: function () {
        if (this.x <= 0 || this.y >= this.screenHeight - 100) {
            this.x = this.screenWidth - 100; // Reset to the right
            this.y = 0; // Reset to the top
        } else {
            this.x -= 45; // Move left faster
            this.y += 20; // Move down faster
            this.elem.style.top = this.y + "px";
            this.elem.style.left = this.x + "px";
            this.elem.src = "vladsw/" + this.arrImgs[this.poseNumber];
            this.poseNumber = (this.poseNumber + 1) % 8;
        }
    }
};

// Second character: Ogre
const characterDataOgre = {
    arrImgs: ["running sw0000.bmp", "running sw0001.bmp",
        "running sw0002.bmp", "running sw0003.bmp", "running sw0004.bmp",
        "running sw0005.bmp", "running sw0006.bmp", "running sw0007.bmp"],
    poseNumber: 0,
    elem: document.querySelector("#ogre"),
    screenWidth: document.querySelector("#forest").clientWidth,
    screenHeight: document.querySelector("#forest").scrollHeight,
    x: document.querySelector("#forest").clientWidth - 100, // Further behind Vlad
    y: 0, // Higher than Vlad
    timerId: null,
    move: function () {
        if (this.x <= 0 || this.y >= this.screenHeight - 100) {
            this.x = this.screenWidth - 200;
            this.y = -50;
        } else {
            this.x -= 45; // Move left faster
            this.y += 20; // Move down faster
            this.elem.style.top = this.y + "px";
            this.elem.style.left = this.x + "px";
            this.elem.src = "ogresw/" + this.arrImgs[this.poseNumber]; 
            this.poseNumber = (this.poseNumber + 1) % 8;
        }
    }
};

const characters = [characterDataVlad, characterDataOgre];

// Function to start moving both characters
function move() {
    characterDataVlad.timerId = setInterval(() => characterDataVlad.move(), 100);

    setTimeout(() => {
        characterDataOgre.timerId = setInterval(() => characterDataOgre.move(), 100);
    }, 1000);
}

// Function to stop both characters
function stopMoving() {
    characters.forEach(character => clearInterval(character.timerId));
}

