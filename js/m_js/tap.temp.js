var tap = function (ele) {
// 自动绑定事件？
//  需要将函数绑定到元素上？调用元素？
//  将fn去掉依然无法解绑
    var callback = null;
    (function (ele) {
        // 局部变量
        // var f2 = function (e) {
        //     // console.log(temp+"我是綁定和要解綁的函數");
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
        //
        // }
        var f1 = function (e) {
            console.log("f1执行了");
            var tt = e.targetTouches;
            // 点击手指只能为一个
            if (tt.length > 1) {
                return;
            }
            // 获取初始位置
            startX = tt[0].clientX;
            startY = tt[0].clientY;
        }

        var temp='我是tap中的局部变量';
        var startX, startY, endX, endY;
        // 添加事件和移除事件出错
        // 添加的参数和移除的需要时一致的
        // addEventListener()添加的匿名函数无法移除
        // 需要抽象成公共函数，且不加参数传入
        //但是此时的坐标却不能正常获取计算,需要把函数放到这个函数里面来
        ele.addEventListener("touchstart", f1);
        // ele.addEventListener("touchend", f2);
        // ele.removeEventListener('touchstart', f1);
        // ele.removeEventListener('touchend', f2);
        // ele.remove = function (ele) {
        //     return function () {
        //         ele.removeEventListener('touchstart', f1);
        //         ele.removeEventListener('touchend', f2);
        //     }
        //
        // }
        // 返回解绑事件的功能？
        // function f1(e) {
        //     // console.log("f1执行了");
        //     var tt = e.targetTouches;
        //     // 点击手指只能为一个
        //     if (tt.length > 1) {
        //         return;
        //     }
        //     // 获取初始位置
        //     startX = tt[0].clientX;
        //     startY = tt[0].clientY;
        // }


        console.log("返回解绑函数怎么失败了？");
        callback = function () {
            ele.removeEventListener('touchstart',f1);
            // ele.removeEventListener('touchend',f2);
            // console.log(temp+":我被return封装了");
            // console.log(this.temp);
            // 看样子只能通过传参的方法封装？
        }
    }(ele));
    // 自执行函数里写的return不管用！！！
    return callback;
    // var remove = function () {
    //
    // }
    // // 移除方法绑定到元素上？
    // ele.remove = remove;
}


