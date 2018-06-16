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
        // console.log(p_d);
        if (p_d > 100) {
            f.style.transform = "translateY(0)";
        }
        if (p_d < -100) {
            f.style.transform = "translateY(" + 90 / 30 + "rem)";
        }
    })
}();
var btn = document.querySelectorAll(".footer>.item"),
    bl = btn.length,
    before = {index: 0, url: 'url(img/m_img/home@3x.png)'},
    removeFn=new Array(bl);


for (var j = 1; j < bl; j++) {
    removeFn[j]=new Fn(btn[j],j);
    removeFn[j].add();
}
