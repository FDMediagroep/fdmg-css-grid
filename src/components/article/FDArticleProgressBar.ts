function handleScroll(trackedElement, progressionBar) {
    console.log('scrolling');
    if (trackedElement) {
        const perc = Math.min(
            100,
            (window.pageYOffset /
                (trackedElement.offsetTop +
                    trackedElement.scrollHeight -
                    window.innerHeight)) *
                100
        );
        progressionBar.style.width = `${perc}%`;

        if (perc === 100) {
            progressionBar.classList.add('fd-article-progress-complete');
        } else {
            progressionBar.classList.remove('fd-article-progress-complete');
        }
    }
}

let prevScrollHandler;

export function addProgressBar(
    containerElement: Element,
    trackedElement: Element
) {
    removeProgressBar();
    const progressBar = document.createElement('div');
    progressBar.classList.add('fd-article-progress-bar');
    const progressionBar = document.createElement('div');
    progressionBar.classList.add('fd-article-progression-bar');
    progressBar.appendChild(progressionBar);

    containerElement?.appendChild(progressBar);
    if (!prevScrollHandler) {
        prevScrollHandler = handleScroll.bind(
            null,
            trackedElement,
            progressionBar
        );
        window.addEventListener('scroll', prevScrollHandler);
    }
}

export function removeProgressBar() {
    const progressBar = document.querySelector('.fd-article-progress-bar');
    if (!progressBar) {
        return;
    }
    window.removeEventListener('scroll', prevScrollHandler);
    prevScrollHandler = null;
    progressBar.parentNode.removeChild(progressBar);
}
