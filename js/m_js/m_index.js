var Carousel = function (ele) {
    // 暂时默认轮播图数量大于三个
    var ul = ele.document.getElementsByTagName('ul'),
        imgs_container = ul[0],
        pointer_container = ul[1],
        imgs_li = imgs_container.document.getElementsByTagName('li'),
        pointer_li = pointer_container.document.getElementsByTagName('li'),
        imgs_length = imgs_li.length,
        img_width = ele.offsetWidth, now = 0, before = imgs_length - 1,
    after = 1,
}