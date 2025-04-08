export function wait(msToWait) {
    if (msToWait) {
        return new Promise((resolve) => setTimeout(resolve, msToWait));
    }
    return new Promise((resolve) => window.requestAnimationFrame(resolve));
}
