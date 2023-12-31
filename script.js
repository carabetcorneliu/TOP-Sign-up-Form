const pass = document.querySelector('#pass');
const confirmPass = document.querySelector('#confirmPass');
const passCheckText = document.querySelector('#passCheckText');

const compareInputs = () => {
    confirmPass.value != pass.value ? failCheck() : passCheck();
}

const failCheck = () => {
    passCheckText.style.visibility = "visible";
    pass.classList.remove("validPass");
    confirmPass.classList.remove("validPass");
    pass.classList.add("error");
    confirmPass.classList.add("error")
}

const passCheck = () => {
    passCheckText.style.visibility = "hidden";
    pass.classList.remove("error");
    confirmPass.classList.remove("error");
    pass.classList.add("validPass");
    confirmPass.classList.add("validPass")
}

document.getElementsByName("confirmPass")[0].addEventListener('change', compareInputs);
document.getElementsByName("pass")[0].addEventListener('change', compareInputs);


