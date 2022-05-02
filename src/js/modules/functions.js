"use strict";
export const exSwipper = function(className, rowClassName, items){
    const swipper = document.querySelector(className);
    const swipperRow = swipper.querySelector(rowClassName);
    const swipperItems = swipperRow.querySelectorAll(items);
    let elemWidth = 0;

    const autoSwipper = () => {
        const rowLength = (swipperItems.length - 3) * swipperItems[0].offsetWidth;
        elemWidth += swipperItems[0].offsetWidth;
        if(elemWidth === rowLength) elemWidth = 0
        swipperRow.style.transform = `translateX(-${elemWidth}px)`
        console.log(swipperRow.style.transform);
    };
    const playTimer = 5000
    let timer = setInterval(autoSwipper, playTimer)
    swipperRow.addEventListener('mouseenter', function(){
        clearInterval(timer)
    })
    swipperRow.addEventListener('mouseleave', function(){
        timer = setInterval(autoSwipper, playTimer)
    })
}