function Fn(ele,fn) {
    var temp = {};
    temp.ele=ele;
    temp.fn = fn;
    temp.startX=0;
    temp.startY=0;
    temp.endX=0;
    temp.endY=0;
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
            this.fn && this.fn(e);
            return;
        }
    }
    temp.add=function () {
        console.log(this)
        ele.addEventListener("touchstart", this.f1);
        ele.addEventListener("touchend", this.f2);
    };
    temp.remove = function () {
        ele.removeEventListener('touchstart',this.f1);
        ele.removeEventListener('touchend',this.f2);
    };
return temp;
}