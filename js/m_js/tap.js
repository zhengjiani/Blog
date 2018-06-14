var eve = {
    tap: function (ele, fn) {
        this.fn = fn
        // 判断一下
        var startX, startY, endX, endY;
        // ele.addEventListener("touchstart", function (e) {
        //     var e = e,
        //         fn = fn;
        //     // 使用闭包
        //     var f= this.f1;
        //     // f(e,fn);
        // });
        // ele.addEventListener("touchend", function (e) {
        //     var e = e,
        //         fn = fn;
        //     // 使用闭包
        //     var f= this.f2;
        //     // f(e,fn);
        // })
        // 添加事件和移除事件出错
        // 添加的参数和移除的需要时一致的
        // addEventListener()添加的匿名函数无法移除。
        // 需要抽象成公共函数，且不加参数传入
        ele.addEventListener("touchstart", this.f1);
        ele.addEventListener("touchend", this.f2)
    },
    remove: function (ele) {
        ele.removeEventListener('touchstart', this.f1);
        ele.removeEventListener('touchend', this.f2);
    },
    f1: function (e) {
        var tt = e.targetTouches;
        // 点击手指只能为一个
        if (tt.length > 1) {
            return;
        }
        // 获取初始位置
        startX = tt[0].clientX;
        startY = tt[0].clientY;
    },
    f2: function (e) {
        var ct = e.changedTouches[0];
        // 判断点击事时间
        // 判断手指移动距离
        endX = ct.clientX;
        endY = ct.clientY;
        // console.log(endY - startY);
        // console.log(endX - startX);
        if (Math.abs(endY - startY) < 20 && Math.abs(endX - startX) < 20) {
            // console.log("判断通过");
            // 回调函数:点击完之后执行的函数
            fn && fn(e);
            return;
        }
    },
    fn:null
}

// function f1(e) {
//     var tt = e.targetTouches;
//     // 点击手指只能为一个
//     if (tt.length > 1) {
//         return;
//     }
//     // 获取初始位置
//     startX = tt[0].clientX;
//     startY = tt[0].clientY;
// }
//
// function f2(e) {
//     var ct = e.changedTouches[0];
//     // 判断点击事时间
//     // 判断手指移动距离
//     endX = ct.clientX;
//     endY = ct.clientY;
//     // console.log(endY - startY);
//     // console.log(endX - startX);
//     if (Math.abs(endY - startY) < 20 && Math.abs(endX - startX) < 20) {
//         // console.log("判断通过");
//         // 回调函数:点击完之后执行的函数
//         fn && fn(e);
//         return;
//     }
// }

// 可能需要重写这个eve
// 暂时开始写页面 18 06/14 15:20
