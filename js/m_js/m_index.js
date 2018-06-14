!function f() {
    var p_s, p_n, p_d;
    var ele = document.getElementsByClassName("content")[0],
        f = document.getElementsByClassName("footer")[0]
    ele.addEventListener('touchstart', function (e) {
        p_s = e.targetTouches[0].clientY;
    })
    ele.addEventListener('touchmove', function (e) {
        p_n = e.targetTouches[0].clientY;
        p_d = p_n - p_s;
        console.log(p_d);
        if (p_d > 100) {
            f.style.transform = "translateY(0)";
        }
        if (p_d < -100) {
            f.style.transform = "translateY(" + 90 / 30 + "rem)";
        }
    })
}()


var btn = document.querySelectorAll(".footer>.item"),
    bl = btn.length,
    // 先给个默认初始的设置
    // 这个解决方案适用没有雪碧图和元素无控制背景图片的属性的情况
    before = {index: 0, url: '../../img/m_img/home@3x.png'};

function f(i) {
    switch (i) {
        case 0:
            return footer( 0,"../../img/m_img/index01.jpg");
        case 1:
            return footer( 1,"../../img/m_img/activity02.jpg");
        case 2:
            return  footer(2,"../../img/m_img/9@3x.png");
        case 3:
            return  footer(3,"../../img/m_img/break04.jpg");
        case 4:
            return footer(4,"../../img/m_img/mine05.jpg");
    }
    // function (e,i) {
    // footer("../../img/m_img/index01.jpg",e,i);
    // },
    // function (e,i) {
    //     footer("../../img/m_img/activity02.jpg",e,i);
    // },
    // function (e,i) {
    //     footer("../../img/m_img/9@3x.png",e,i);
    // },
    // function (e,i) {
    //     footer("../../img/m_img/break04.jpg",e,i);
    // },
    // function (e,i) {
    //     footer("../../img/m_img/mine05.jpg",e,i);
    // }

    // return b[i](i);
}

function footer(i,url) {
    var url = url;
    var i = i;
    // console.log(i);
    return function(e){
        // console.log(i);
        // console.log(url);
        // 正在点击的按钮，之前点击的按钮
        var btn_click = e.target,
            btn_clicked = btn[before.index];
        // 移除当前按钮的事件和函数
        eve.remove(btn_click, f(this.i));
        // 之前的元素换背景，加点击事件
        btn_clicked.getElementsByTagName('i')[0].style.backgroundImage = before.url;
        eve.tap(btn_clicked, f(before.index));
        // 对before重新赋值
        before.index = this.i;
        before.url = btn_click.style.backgroundImage;
        // 给当前按钮替换背景图片(动态的)(蓝色的那个)
        btn_click.style.backgroundImage = this.url;
    }


}

for (var i = 1; i < bl; i++) {
    eve.tap(btn[i], f(i));
}
