var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;

    translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

    $('.elem1, .elem2, .elem3, .elem4, .elem5, .elem6').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
    });

    window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', (e) => {
    var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
    var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
    lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
    lFollowY = (10 * lMouseY) / 100;
});

moveBackground();

window.addEventListener('load', function() {
    // setTimeout(() => {
    //     document.querySelector(".bg-shadow").classList.add("active");
    //     setTimeout(()=>{
    //         document.querySelector(".logo").classList.add("active");
    //     }, 200);
    // }, 500);
});