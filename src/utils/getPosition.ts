import gsap from 'gsap'

export const getPosition = (elem:any,target:any) => {
    let targetRect = target.getBoundingClientRect();
    let elemRect = elem.getBoundingClientRect();
    gsap.set(elem, {
        x: 0,
        y: 0,
        width: targetRect.width,
        height: targetRect.height
    });
    var newRect = elem.getBoundingClientRect();
    gsap.set(elem, { width: elemRect.width, height: elemRect.height });
    return {
        left: targetRect.left - newRect.left,
        top: targetRect.top - newRect.top,
        width: newRect.width,
        height: newRect.height
    };
}