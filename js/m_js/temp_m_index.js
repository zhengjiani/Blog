!function f() {
    var p_s, p_n, p_d;
    var ele = document.getElementsByClassName("content")[0];
    ele.addEventListener('touchstart', function (e) {
        p_s = e.targetTouches[0].clientX;
    })
    ele.addEventListener('touchmove', function (e) {
        p_n = e.targetTouches[0].clientX;
        p_d = p_n - p_s;
        if (p_d > 30) {
            document.getElementsByClassName("footer")[0].style.transform = "translateY(0)";
        }
    })
}()

var btn = document.querySelectorAll(".footer>.item"),
    bl = btn.length,
    // 先给个默认初始的设置
    // 这个解决方案适用没有雪碧图和元素无控制背景图片的属性的情况
    before = {index: 0, url: '../../img/m_img/home@3x.png'};
function f(i) {
    var b = [
        function () {
        footer("../../img/m_img/index01.jpg");
        },
        function () {
            footer("../../img/m_img/activity02.jpg");
        },
        function () {
            footer("../../img/m_img/9@3x.png");
        },
        function () {
            footer("../../img/m_img/break04.jpg");
        },
        function () {
            footer("../../img/m_img/mine05.jpg");
        }
    ]
    return b[i];
}
function footer(url) {
    // 正在点击的按钮，之前点击的按钮
    var btn_click=e.target,
        btn_clicked=btn[before.index];
    // 移除当前按钮的事件
    eve.remove(btn_click);
    // 之前的元素换背景，加点击事件
    btn_clicked.getElementsByTagName('i')[0].style.backgroundImage=before.url;
    eve.tap(btn_clicked,f(i));
    // 对before重新赋值
    before.index = i;
    before.url=btn_click.style.backgroundImage;
    // 给当前按钮替换背景图片(动态的)(蓝色的那个)
    btn_click.style.backgroundImage=url;
}

for (var i = 1; i < bl; i++) {
    eve.tap(btn[i], f(i));
}
