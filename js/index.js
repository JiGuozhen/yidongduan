//->REM
~function (desW) {
    var winW = document.documentElement.clientWidth,
        oMain = document.getElementById("main"),
        n = winW / desW;
    if (winW > desW) {
        oMain.style.width = desW + "px";
        return;
    }
    document.documentElement.style.fontSize = n * 100 + "px";
}(640);

//->Swiper
var sw = new Swiper(".swiper-container", {
    loop: true,
    direction: "vertical",
    /*--当切换结束的时候我需要给当前展示的这个区域增加对应的ID(page1或者page2),从而实现里面子元素的运动--*/
    onSlideChangeEnd: function (swiper) {
        //->获取总共的SLIDE
        var slideAry = swiper.slides;

        //->获取当前活动块的索引
        var curIn = swiper.activeIndex;

        [].forEach.call(slideAry, function (item, index) {
            if(curIn==index){

                if(curIn==1||curIn==6){
                    item.id="page1";
                }
                if(curIn==2){
                    item.id="page2";

                }
                if(curIn==3){
                    item.id="page3";

                }
                if(curIn==4){
                    item.id="page4";
                }
          /*      if(curIn==5){
                    item.id="page5";
                }*/
                if(curIn==0 ||curIn==5){
                    item.id="page5";
                }
                return;
            }
            item.id=null;
        });
    }
});

//->music
~function () {
    var music = document.getElementById("music"),
        musicAudio = document.getElementById("musicAudio");
    music.addEventListener("click", function () {
        if (musicAudio.paused) {//->当前是暂停的
            musicAudio.play();
            music.className = "music move";
            return;
        }
        musicAudio.pause();
        music.className = "music";
    }, false);

    window.setTimeout(function () {
        musicAudio.play();
        musicAudio.addEventListener("canplay", function () {
            music.style.display = "block";
            music.className = "music move";
        }, false);
    }, 1000);
}();
