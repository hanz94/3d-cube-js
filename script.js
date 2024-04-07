window.onload = function() {
    var cube = document.getElementById("cube");
    var face1 = document.getElementById("face-1");
    var face2 = document.getElementById("face-2");
    var face3 = document.getElementById("face-3");
    var face4 = document.getElementById("face-4");
    var face5 = document.getElementById("face-5");
    var face6 = document.getElementById("face-6");
    var random = document.getElementById("face-random");

    face1.onclick = function() {
        cube.style.animation = "none";
        cube.style.transform = "rotateX(0deg) rotateY(0deg)";
    }
    face2.onclick = function() {
        cube.style.animation = "none";
        cube.style.transform = "rotateX(0deg) rotateY(180deg)";
    }
    face3.onclick = function() {
        cube.style.animation = "none";
        cube.style.transform = "rotateX(-90deg) rotateY(0deg)";
    }
    face4.onclick = function() {
        cube.style.animation = "none";
        cube.style.transform = "rotateX(90deg) rotateY(0deg)";
    }
    face5.onclick = function() {
        cube.style.animation = "none";
        cube.style.transform = "rotateX(0deg) rotateY(90deg)";
    }
    face6.onclick = function() {
        cube.style.animation = "none";
        cube.style.transform = "rotateX(0deg) rotateY(-90deg)";
    }
    random.onclick = function() {
        //random integer between 1 and 6
        var rndInt = Math.floor(Math.random() * 6) + 1;
        switch (rndInt) {
            case 1:
                cube.style.animation = "wall1 2s forwards";
                break;
            case 2:
                cube.style.animation = "wall2 2s forwards";
                break;
            case 3:
                cube.style.animation = "wall3 2s forwards";
                break;
            case 4:
                cube.style.animation = "wall4 2s forwards";
                break;
            case 5:
                cube.style.animation = "wall5 2s forwards";
                break;
            case 6:
                cube.style.animation = "wall6 2s forwards";
                break;

        }
    }

}