export function wait(msToWait) {
    if (msToWait) {
        return new Promise((resolve) => setTimeout(resolve, msToWait));
    }
    return new Promise((resolve) => window.requestAnimationFrame(resolve));
}

// const resizeChildren = (element) => {
//     return wait().then(() => {
//         const { clientWidth: maxWidth, clientHeight: maxHeight, children } = element;

//         console.log({ element, children: element.children });

//         if (children.length) {
//             // TODO: convert to promise.all
//             for (const child of children) {
//                 const { clientWidth: childWidth, clientHeight: childHeight } = child;

//                 console.log({ child, childHeight, maxHeight, maxWidth, childWidth });

//                 if (childWidth > maxWidth) {
//                     child.setAttribute('width', `${maxWidth}px`);
//                     child.classList.add('resized-width');
//                 }

//                 if (childHeight > maxHeight) {
//                     child.setAttribute('height', `${maxHeight}px`);
//                     child.classList.add('resized-height');
//                 }

//                 return resizeChildren(child);
//             }
//         }

//         return Promise.resolve();
//     });
// };
