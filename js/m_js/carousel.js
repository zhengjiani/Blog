var Carousel = function (ele) {
    // 添加切換標籤頁暫停動畫的功能
    window.addEventListener('focus', function() {
        auto_animate(1,500);
    },false);

    window.addEventListener('blur', function() {
        console.log('執行清除定時器方法');
        while (timer.length>0){
            clearInterval(timer.pop());
        }
    },false);
    // 暂时默认轮播图数量大于三个
    var ul = ele.getElementsByTagName('ul'),
        imgs_container = ul[0],
        pointer_container = ul[1],
        imgs_li = imgs_container.getElementsByTagName('li'),
        pointer_li = pointer_container.getElementsByTagName('li'),
        imgs_length = imgs_li.length,
        img_width = ele.offsetWidth, now = 0, before = imgs_length - 1,
        after = 1, timer=[],
        // 用于替代三个图片，这样利于下面简化direction的代码
        group = [imgs_length - 1, 0, 1];
    // 初始化？
    init();
    // 自动轮播？
    auto_animate(1, 500);
    function init() {
        for (var i = 0; i < imgs_length; i++) {
            imgs_li[i].style.left = -i * img_width + 'px';
            imgs_li[i].style.transitionDuration = 0 + 'ms';
            imgs_li[i].style.transform = 'translate(' + -img_width + 'px,' + 0 + 'px)';
        }
        // 先摆好位置？
        // imgs_li[before].style.transitionDuration = 0 + 'ms';
        imgs_li[before].style.transform = 'translate(' + -img_width + 'px,' + 0 + 'px)';

        // imgs_li[now].style.transitionDuration = 300 + 'ms';
        imgs_li[now].style.transform = 'translate(' + 0 + 'px,' + 0 + 'px)';

        // imgs_li[after].style.transitionDuration = 0 + 'ms';
        imgs_li[after].style.transform = 'translate(' + img_width + 'px,' + 0 + 'px)';

        // 做好了第一次动画的准备
        // imgs_li[before].style.transitionDuration = 300 + 'ms';
        // imgs_li[now].style.transitionDuration = 300 + 'ms';
    }

    // 自动轮播
    function auto_animate(direct, speed) {
        console.log('添加了一个定时器');
        // 添加之前需要清空所有定时器么？定时器类型单一，可以，双保险
        while (timer.length>0){
            clearInterval(timer.pop());
        }
        timer.push(setInterval(function () {
            // 每一轮开始之后都会刷新，动画过程中执行了拖拽会怎么样？
            // 别的网站好像直接将图片置于初始状态了
            // 先开始动画
            direction(direct, speed);
        }, 2000));
    }

    function direction(direct, speed) {
        imgs_li[group[1]].style.transitionDuration = speed + 'ms';
        imgs_li[group[1]].style.transform = 'translate(' + -img_width * direct + 'px,' + 0 + 'px)';
        var temp = direct + 1;
        var un = temp + (-direct * 2);
        imgs_li[group[temp]].style.transitionDuration = speed + 'ms';
        imgs_li[group[temp]].style.transform = 'translate(' + 0 + 'px,' + 0 + 'px)';
        // 生成下一轮的下标
        group[un] = group[1];
        group[1] = group[temp];
        pointer_li[group[un]].classList.remove("p_active");
        pointer_li[group[1]].classList.add("p_active");
        group[temp] = group[temp] + direct;
        // 减
        if (group[temp] === -1) {
            group[temp] = imgs_length - 1;
        }
        // 加
        if (group[temp] === imgs_length) {
            group[temp] = 0;
        }
        imgs_li[group[temp]].style.transitionDuration = 0 + 'ms';
        imgs_li[group[temp]].style.transform = 'translate(' + img_width * direct + 'px,' + 0 + 'px)';
        // 顺便更新一下这个吧，感觉取值要比数组快？
        before = group[0];
        now = group[1];
        after = group[2];
    }

    var p_s, p_n, p_d;
    // 拖拽效果
    ele.addEventListener('touchstart', function (e) {
        p_s = e.targetTouches[0].clientX;
        e.stopPropagation();
        // 点击时清除定时器
        while (timer.length>0){
            clearInterval(timer.pop());
        }
    })
    ele.addEventListener('touchmove', function (e) {
        // 阻止屏幕竖向横向的移动
        e.preventDefault();
        p_n = e.targetTouches[0].clientX;
        p_d = p_n - p_s;
        // 怎样才能将这些无用的设置只执行一次？
        imgs_li[before].style.transitionDuration = 0 + 'ms';
        imgs_li[now].style.transitionDuration = 0 + 'ms';
        imgs_li[after].style.transitionDuration = 0 + 'ms';
        imgs_li[before].style.transform = 'translate(' + (-img_width + p_d) + 'px,' + 0 + 'px)';
        imgs_li[now].style.transform = 'translate(' + p_d + 'px,' + 0 + 'px)';
        imgs_li[after].style.transform = 'translate(' + (img_width + p_d) + 'px,' + 0 + 'px)';
        // imgs_li[group[-1]].style.transitionDuration = 0 + 'ms';
        // imgs_li[group[1]].style.transitionDuration = 0 + 'ms';
        // imgs_li[group[1]].style.transitionDuration = 0 + 'ms';
        // imgs_li[group[-1]].style.transform = 'translate(' + (-img_width + p_d) + 'px,' + 0 + 'px)';
        // imgs_li[group[1]].style.transform = 'translate(' + p_d + 'px,' + 0 + 'px)';
        // imgs_li[group[1]].style.transform = 'translate(' + (img_width + p_d) + 'px,' + 0 + 'px)';
        e.stopPropagation();
    })
    ele.addEventListener('touchend', function (e) {
        // console.log(p_d);
        // 足够大开始动画
        // console.log(p_d);
        // console.log(img_width / 4);
        if (Math.abs(p_d) > img_width / 4) {
            // 向右滑动，减少
            if (p_d >= 0) {
                direction(-1, 300);
                auto_animate(1,500);
            } else {
                direction(1, 300);
                auto_animate(1,500)
            }
        }
        else {
            imgs_li[before].style.transform = 'translate(' + -img_width + 'px,' + 0 + 'px)';
            imgs_li[now].style.transform = 'translate(' + 0 + 'px,' + 0 + 'px)';
            imgs_li[after].style.transform = 'translate(' + img_width + 'px,' + 0 + 'px)';
            auto_animate(1, 500);
        }
        e.stopPropagation();
    })
}

