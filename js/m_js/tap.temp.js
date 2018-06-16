var tap = function (ele, fn) {
// 自动绑定事件？
//  需要将函数绑定到元素上？调用元素？
    (function (ele, fn) {
        // 判断一下
        var startX, startY, endX, endY;
        // 添加事件和移除事件出错
        // 添加的参数和移除的需要时一致的
        // addEventListener()添加的匿名函数无法移除
        // 需要抽象成公共函数，且不加参数传入
        //但是此时的坐标却不能正常获取计算
        console.log("zhixinle");
        ele.addEventListener("touchstart", f1);
        ele.addEventListener("touchend", f2);
        ele.remove = function (ele) {
            return function () {
                ele.removeEventListener('touchstart', f1);
                ele.removeEventListener('touchend', f2);
            }

        }

        function f1(e) {
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
        function f2(e) {
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

        }
    }(ele, fn));

    // var remove = function () {
    //
    // }
    // // 移除方法绑定到元素上？
    // ele.remove = remove;
}


