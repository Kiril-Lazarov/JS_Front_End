function focused() {
    let allInputs = document.getElementsByTagName('input');
    for (const el of allInputs) {
        el.addEventListener('focus', focusHandler);
        el.addEventListener('blur', blurHandler)
    }

    function focusHandler(event) {
        let parent = event.target.parentElement;

        parent.classList.add('focused')
    }

    function blurHandler(event) {
        let parent = event.target.parentElement;
        let currEl = event.target
        if (parent.classList.contains('focused')) {
            parent.classList.remove('focused');

        }
    }
}