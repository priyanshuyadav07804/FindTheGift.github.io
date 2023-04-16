window.onload = init;
function init() {
    loading();
}

function loading() {

    let A0 = document.getElementById("img1");
    let A1 = document.getElementById("img2");
    let A2 = document.getElementById("img3");
    let A3 = document.getElementById("img4");
    let A4 = document.getElementById("img5");
    let A5 = document.getElementById("img6");
    let B0 = document.getElementById("img7");
    let B1 = document.getElementById("img8");
    let B2 = document.getElementById("img9");
    let B3 = document.getElementById("img10");
    let B4 = document.getElementById("img11");
    let B5 = document.getElementById("img12");
    let C0 = document.getElementById("img13");
    let C1 = document.getElementById("img14");
    let C2 = document.getElementById("img15");
    let C3 = document.getElementById("img16");
    let C4 = document.getElementById("img17");
    let C5 = document.getElementById("img18");
    let D0 = document.getElementById("img19");
    let D1 = document.getElementById("img20");
    let D2 = document.getElementById("img21");
    let D3 = document.getElementById("img22");
    let D4 = document.getElementById("img23");
    let D5 = document.getElementById("img24");
    let E0 = document.getElementById("img25");
    let E1 = document.getElementById("img26");
    let E2 = document.getElementById("img27");
    let E3 = document.getElementById("img28");
    let E4 = document.getElementById("img29");
    let E5 = document.getElementById("img30");
    let F0 = document.getElementById("img31");
    let F1 = document.getElementById("img32");
    let F2 = document.getElementById("img33");
    let F3 = document.getElementById("img34");
    let F4 = document.getElementById("img35");
    let F5 = document.getElementById("img36");
    var elem = document.getElementById("myBar");
    var elem2 = document.getElementById("myB");
    const musicSound = new Audio("/music/music.mp3");
    const gameOverSound = new Audio("/music/over.mp3");
    const missSound = new Audio("/music/miss.mp3");
    const bonusSound = new Audio("/music/bonus.mp3");
    const winSound = new Audio("/music/win.mp3")
    let progress = 0;
    let giftCount = 0;
    let countp = 0;
    let pw = 0;
    const arrayOfLetters = [A0, A1, A2, A3,A4,A5, B0, B1, B2, B3,B4,B5, C0, C1, C2, C3,C4,C5, D0, D1, D2, D3,D4,D5,E0, E1, E2, E3,E4,E5,E0, E1, E2, E3,E4,E5];

    function isBomb(src) {
        musicSound.pause();
        if (src == "dangerSign.webp") {
            return true;
        }
        return false;
    }

    function isGift(src) {
        musicSound.play();
        if (src == "gift.png") {
            return true;
        }
        return false;
    }

    function isMiss(src) {
        musicSound.play();
        if (src == "cross.png") {
            return true;
        }
        return false;
    }


    //Display the image on box
    const bombi = Math.floor(Math.random() * 36);
    const bomb = arrayOfLetters[bombi];
    bomb.src = "dangerSign.webp";

    const arrayWithoutBomb = arrayOfLetters.filter(function (letter) {
        return letter != bomb;
    });

    const gi1 = Math.floor(Math.random() * 35);
    const g1 = arrayWithoutBomb[gi1];
    g1.src = "gift.png";

    const arrayWithoutg1 = arrayWithoutBomb.filter(function (letter) {
        return letter != g1;
    });
    const gi2 = Math.floor(Math.random() * 34);
    const g2 = arrayWithoutg1[gi2];
    g2.src = "gift.png";

    const arrayWithoutg2 = arrayWithoutg1.filter(function (letter) {
        return letter != g2;
    });

    const gi3 = Math.floor(Math.random() * 33);
    const g3 = arrayWithoutg2[gi3];
    g3.src = "gift.png";


    var im = document.getElementsByClassName("flip-card");
    for (var i = 0; i < im.length; i++) {
        im[i].onclick = flip;
    }
    function flip(eventObj) {
        let x = eventObj.target.parentElement.id;
        let y = eventObj.target;
        document.getElementById(x).style.transform = "rotateY(180deg)";
        let src = y.nextElementSibling.firstElementChild.getAttribute("src");

        if (isBomb(src)) {
            gameOverSound.play();
            progress = 0;
            elem2.style.width = 0 + "%";
            elem2.innerHTML = 0 + "%";
            $("div").click(function (event) {
                event.stopPropagation();
            });
            const timeout = setTimeout(check, 800);
            function check() {
                musicSound.pause();
                const time = setTimeout(dor, 1200);
                function dor() {
                    $(".conta").css("display","grid")
                }
                const time2 = setTimeout(dor2,3000);
                function dor2(){
                    clearTimeout(time);
                    window.location.reload();
                }
            }
        }

        if (isGift(src)) {
            giftCount++;
            progress++;
            if (giftCount == 3) {
                bonusSound.play();
                winSound.play();
                $("div").click(function (event) {
                    event.stopPropagation();
                });
                const timeout = setTimeout(check, 400);
                function check() {
                    musicSound.pause();
                    const t1 = setTimeout(ch,1500);
                    function ch(){
                        $(".conta").css("display","grid")
                    }
                    const t2 = setTimeout(ch2,8000);
                    function ch2(){
                        clearTimeout(t1);
                        window.location.reload();
                    }
                }
            } else {
                bonusSound.play();
            }
        }
        if (isMiss(src)) {
            missSound.play()
        }

        var pr = Math.floor(progress * 100 / ++countp);
        let width = 0;
        width = pw;
        var id = setInterval(frame, 10);
        function frame() {
            if (pw > pr) {
                pw--;
                elem.style.width = pw + "%";
                elem.innerHTML = pw + "%";
            }
            else if (width == pr || pw == pr) {
                clearInterval(id);
            } else {
                width++;
                pw = width;
                elem.style.width = width + "%";
                elem2.style.width = width + "%";
                elem.innerHTML = width + "%";
                elem2.innerHTML = width + "%";
            }
        }
    }
}


