let timeout;
export function debounce(fn: () => any, delay: number) {
    if (timeout) {
        clearTimeout(timeout);
    }
    timeout = setTimeout(fn, delay);
}

let animationFrameTimeout;
export function debounceAnimationFrame(fn: () => any) {
    if (animationFrameTimeout) {
        cancelAnimationFrame(animationFrameTimeout);
    }
    animationFrameTimeout = requestAnimationFrame(fn);
}
