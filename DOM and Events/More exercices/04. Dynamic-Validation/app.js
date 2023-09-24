function validate() {
    let input = document.getElementById('email');

    input.addEventListener('change', changeHendler);

    function isClassError() {

        return document.getElementsByClassName('error').length === 0;

    }

    function checkChars(word) {
        console.log(word);
        for (let char of word) {
            if (char.charAt() < 97 || char.charAt() > 122) {
                return false;
            }
        }
        return true;
    }

    function changeHendler(event) {
        let text = event.target;


        if (text.value !== text.value.toLowerCase()) {
            if (isClassError()) {
                input.classList.add('error')
            }

        } else {
            let nameEmail = text.value.split('@');
            if (nameEmail.length !== 2 || nameEmail[1].split('.').length !== 2) {
                if (isClassError()) {
                    input.classList.add('error')
                }
            }
            else{
                 if (!isClassError()) {
                    input.classList.remove('error')
                }
            }
        }


    }
}