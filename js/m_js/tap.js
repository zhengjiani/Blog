var eve = {
    tap: function (ele, fn) {
        // 判断一下
        var startX, startY, endX, endY;
        ele.addEventListener("touchstart", function (e) {
            var tt = e.targetTouches;
            // 点击手指只能为一个
            if (tt.length > 1) {
                return;
            }
            // 获取初始位置
            startX = tt[0].clientX;
            startY = tt[0].clientY;
        });
        ele.addEventListener("touchend", function (e) {
            var ct = e.changedTouches[0];
            // 判断点击事时间
            // 判断手指移动距离
            endX = ct.clientX;
            endY = ct.clientY;
            console.log(endY - startY);
            console.log(endX - startX);
            if (Math.abs(endY - startY) < 20 && Math.abs(endX - startX) < 20) {
                // console.log("判断通过");
                // 回调函数:点击完之后执行的函数
                fn && fn(e);
                return;
            }
        })
    },
    remove:function (ele,fn) {
        ele.removeEventListener('touchstart',fn);
        ele.removeEventListener('touchend',fn);
    }
}