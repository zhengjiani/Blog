var Carousel = function (ele) {
    // 暂时默认轮播图数量大于三个
    var ul = ele.getElementsByTagName('ul'),
        imgs_container = ul[0],
        pointer_container = ul[1],
        imgs_li = imgs_container.getElementsByTagName('li'),
        pointer_li = pointer_container.getElementsByTagName('li'),
        imgs_length = imgs_li.length,
        img_width = ele.offsetWidth, now = 0, before = imgs_length - 1,
        after = 1, timer;
    // 初始化？

    for(var i=0;i<imgs_length;i++){
        imgs_li[i].style.left=-i*img_width+'px';
        console.log(img_width);
    }
}