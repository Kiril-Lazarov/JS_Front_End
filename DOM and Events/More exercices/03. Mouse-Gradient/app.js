function attachGradientEvents() {
    let result = document.getElementById('result');
    let mouseHoverField = document.getElementById('gradient');
    console.log(mouseHoverField);
    mouseHoverField.addEventListener('mousemove', mouseHendler);


    function mouseHendler(event) {
        let number = Number(event.offsetX)/299;
        result.textContent = `${Math.floor(number*100)}%`
        // result.textContent = `${Math.floor(((Number(event.clientX) - 9) / 299) * 100)}%`;
    }


}