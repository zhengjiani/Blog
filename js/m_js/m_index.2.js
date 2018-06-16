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
function callback(i) {
    switch (i) {
        case 0:
            return footer(0, "url(img/m_img/index01.jpg)");
        case 1:
            return footer(1, "url(img/m_img/activity02.jpg)");
        case 2:
            return footer(2, "url(img/m_img/9@3x.png)");
        case 3:
            return footer(3, "url(img/m_img/break04.jpg)");
        case 4:
            return footer(4, "url(img/m_img/mine05.jpg)");
    }

}
function footer(i, url) {
    return function (e) {
        console.log('执行了footer')
        var  beforeIndex=before.index,
            btn_click = e.target,
            btn_clicked = btn[beforeIndex];
        removeFn[beforeIndex]&&removeFn[beforeIndex].remove.call(removeFn[beforeIndex]);
        console.log(removeFn(beforeIndex).fn);
        removeFn[beforeIndex]=null;
        removeFn[beforeIndex]=new Fn(btn_clicked,callback(beforeIndex));
        before.index = i;
        btn_click.style.backgroundImage = url;
    }
}
for (var j = 1; j < bl; j++) {
    removeFn[j]=new Fn(btn[j], callback(j));
    removeFn[j].add();
}

