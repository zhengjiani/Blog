// 第一个版本将fn写入tap里试试
;!function show_footer() {
    var p_s, p_n, p_d;
    var ele = document.getElementsByClassName("content")[0],
        f = document.getElementsByClassName("footer")[0];
    ele.addEventListener('touchstart', function (e) {
        p_s = e.targetTouches[0].clientY;
    })
    ele.addEventListener('touchmove', function (e) {
        p_n = e.targetTouches[0].clientY;
        p_d = p_n - p_s;

        if (p_d > 100) {
            f.style.transform = "translateY(0)";
        }
        if (p_d < -100) {
            f.style.transform = "translateY(" + 90 / 30 + "rem)";
        }
    })
}();

var btn = document.querySelectorAll(".footer>.item>i"),
    bl = btn.length,
    // 这个url可以不要了
    before = {index: 0, now:0/*url: 'url(img/m_img/home@3x.png)'*/},
    removeFn=new Array(bl);

for (var j = 1; j < bl; j++) {
    removeFn[j]=tap(btn[j], j);
}
// 先给第一个加一个蓝色样式，这样url可以一律写蓝色的，不点击就显示默认样式（灰色）
btn[0].style.backgroundImage='url(img/m_img/index01.jpg)';


