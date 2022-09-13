const inputName = document.querySelector('#inp-name')
const inputLastName = document.querySelector('#inp-last-name')
const inputEmail = document.querySelector('#inp-email')
const inputPass = document.querySelector('#inp-password')
const submitBtn = document.querySelector('.submit-btn')

const errorImg = Array.from(document.querySelectorAll('#error-img'))

const errorMsg = Array.from(document.querySelectorAll('.error-msg'))

function formValidation(input, condition, errorNum, errorMessage) {
    if (input.value == condition) {
        errorImg[errorNum].classList.add('error-img')
        input.classList.add('input-error')
        errorMsg[errorNum].innerHTML = `${errorMessage}`
        errorMsg[errorNum].style.display = 'block'
    } else {
        errorImg[errorNum].classList.remove('error-img')
        input.classList.remove('input-error')
        errorMsg[errorNum].style.display = 'none'
    }
}

function form() {
    function validationName() {
        inputName.addEventListener("keypress", function (e) {
            var keyCode = (e.keyCode ? e.keyCode : e.which);

            if (keyCode > 47 && keyCode < 58) {
                e.preventDefault();
            }
        })

        inputName.addEventListener('input', () => {
            formValidation(inputName, '', 0, 'Firts name cannot be empty')
        })
    }

    function validationLastName() {
        inputLastName.addEventListener("keypress", function (e) {
            var keyCode = (e.keyCode ? e.keyCode : e.which);

            if (keyCode > 47 && keyCode < 58) {
                e.preventDefault();
            }
        })

        inputLastName.addEventListener('input', () => {
            formValidation(inputLastName, '', 1, 'Last name cannot be empty')
        })
    }

    function validationEmail() {
        inputEmail.addEventListener('input', () => {
            const emailValue = inputEmail.value

            function validateEmail(email) {
                var re = /\S+@\S+\.\S+/;
                return re.test(email);
            }

            if (emailValue == '') {
                formValidation(inputEmail, '', 2, 'Email cannot be empty')
            } else
                if (validateEmail(emailValue) == false) {
                    errorImg[2].classList.add('error-img')
                    inputEmail.classList.add('input-error')
                    errorMsg[2].innerHTML = 'Looks like this is not an email'
                    errorMsg[2].style.display = 'block'
                } else
                    if (validateEmail(emailValue) == true) {
                        errorImg[2].classList.remove('error-img')
                        inputEmail.classList.remove('input-error')
                        errorMsg[2].style.display = 'none'
                    }
        })
    }

    function validationPassword() {
        inputPass.addEventListener('input', () => {
            if (inputPass.value === '') {
                formValidation(inputPass, '', 3, 'Password cannot be empty')
            } else
                if (inputPass.value.length <= 5) {
                    errorImg[3].classList.add('error-img')
                    inputPass.classList.add('input-error')
                    errorMsg[3].innerHTML = 'Your password must be at least 6 characters long'
                    errorMsg[3].style.display = 'block'
                }
                else {
                    errorImg[3].classList.remove('error-img')
                    inputPass.classList.remove('input-error')
                    errorMsg[3].style.display = 'none'
                }

        })
    }

    validationName()
    validationLastName()
    validationEmail()
    validationPassword()
}

function checkedInputs() {
    if (inputName.value === '') {
        formValidation(inputName, '', 0, 'Firts name cannot be empty')
    }

    if (inputLastName.value === '') {
        formValidation(inputLastName, '', 1, 'Last name cannot be empty')
    }

    if (inputEmail.value === '') {
        formValidation(inputEmail, '', 2, 'Email cannot be empty')
    }

    if (inputPass.value === '') {
        formValidation(inputPass, '', 3, 'Password cannot be empty')
    }
}

form()

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    checkedInputs()
})








