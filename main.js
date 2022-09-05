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
            if (inputEmail.value === '') {
                formValidation(inputEmail, '', 2, 'Email cannot be empty')
            }
        })
    }

    function validationPassword() {
        inputPass.addEventListener('input', () => {
            formValidation(inputPass, '', 3, 'Password cannot be empty')
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







