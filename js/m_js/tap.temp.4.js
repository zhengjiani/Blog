// 终于解决了！！！这是最终版本！！
var tap = function (ele, i) {
console.log(i);
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
// 生成回調函數
        function footer(i, url) {
            return function (e) {
                // console.log("fn执行了");
                var  beforeIndex=before.index,
                    btn_click = e.target,
                    btn_clicked = btn[beforeIndex];
                // 移除当前按钮的事件和函数
                console.log(beforeIndex);
                removeFn[i]&&removeFn[i]();
                // 给之前绑定事件,要调用全局的，不然这里tap会找到局部的tap，报错！
                removeFn[beforeIndex]=window.tap(btn_clicked,beforeIndex);
                before.index = i;
                btn_click.style.backgroundImage = url;
                btn_clicked.style.backgroundImage='';
                // console.log(before.index);
            }
        }
        var tap = null;

        (function (ele) {
        var fn = callback(i);
        var f2 = function (e) {
            // console.log("f2执行了");
            var ct = e.changedTouches[0];
            endX = ct.clientX;
            endY = ct.clientY;
            if (Math.abs(endY - startY) < 20 && Math.abs(endX - startX) < 20) {
                // console.log("判断通过");
                // 回调函数:点击完之后执行的函数
                fn && fn(e);
                return;
            }
        }
        var f1 = function (e) {
            // console.log("f1执行了");
            var tt = e.targetTouches;
            // 点击手指只能为一个
            if (tt.length > 1) {
                return;
            }
            // 获取初始位置
            startX = tt[0].clientX;
            startY = tt[0].clientY;
        }
        var startX, startY, endX, endY;
        ele.addEventListener("touchstart", f1);
        ele.addEventListener("touchend", f2);
        tap = function () {
            ele.removeEventListener('touchstart',f1);
            ele.removeEventListener('touchend',f2);
        }
    }(ele));
    return tap;
}


