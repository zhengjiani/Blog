// 第三个测试，将fn放到局部
function Fn(ele,i) {
    var temp = {};
    temp.ele=ele;
    // temp.i=i;
    temp.startX=0;
    temp.startY=0;
    temp.endX=0;
    temp.endY=0;
    temp.footer=function (i, url) {
        return function (e) {
            console.log('执行了footer');
            var beforeIndex=before.index,
                btn_click = e.target,
                btn_clicked = btn[beforeIndex];
            removeFn[beforeIndex]&&removeFn[beforeIndex].remove();
            console.log(removeFn(beforeIndex).fn);
            removeFn[beforeIndex]=null;
            removeFn[beforeIndex]=new Fn(btn_clicked,callback(beforeIndex));
            before.index = i;
            btn_click.style.backgroundImage = url;
        }
    };
    temp.callback=(function (i) {
        switch (i) {
            case 0:
                return this.footer(0, "url(img/m_img/index01.jpg)");
            case 1:
                return this.footer(1, "url(img/m_img/activity02.jpg)");
            case 2:
                return this.footer(2, "url(img/m_img/9@3x.png)");
            case 3:
                return this.footer(3, "url(img/m_img/break04.jpg)");
            case 4:
                return this.footer(4, "url(img/m_img/mine05.jpg)");
        }
    }(i));
    // temp.fn = this.callback(i);
    temp.f1 = function (e) {
        console.log("f1执行了");
        var tt = e.targetTouches;
        // 点击手指只能为一个
        if (tt.length > 1) {
            return;
        }
        // 获取初始位置
        this.startX = tt[0].clientX;
        this.startY = tt[0].clientY;
    };
    temp.f2 = function (e) {
        console.log("我是綁定和要解綁的函數");
        var ct = e.changedTouches[0];
        this.endX = ct.clientX;
        this.endY = ct.clientY;
        this.endY - this.startY
        console.log(this.endY - this.startY);
        console.log(this.fn);
        if (Math.abs(this.endY - this.startY) < 20 && Math.abs(this.endX - this.startX) < 20) {
            this.fn(e);
            return;
        }
    }
    temp.add=function () {
        console.log(this);
        ele.addEventListener("touchstart", this.f1);
        ele.addEventListener("touchend", this.f2);
    };
    temp.remove = function () {
        ele.removeEventListener('touchstart',this.f1);
        ele.removeEventListener('touchend',this.f2);
    };
    return temp;
}
