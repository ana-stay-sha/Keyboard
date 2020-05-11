function t11(e) {
    document.querySelector('.key[data="' + e.code + '"]').classList.add('active');
}
document.querySelector('.i-11').onkeydown = t11;


function keyUp() {
    document.querySelector('.out-11').innerHTML = document.querySelector('.i-11').value;
    document.querySelectorAll('.key').forEach(function (elem) {
        elem.classList.remove('active');
    })
}
document.querySelector('.i-11').onkeyup = keyUp;

document.querySelectorAll('.key').forEach(function (element) {
    element.onclick = function () {
        document.querySelectorAll('.key').forEach(function (element) {
            element.classList.remove('active');
        });
        document.querySelector('.out-11').innerHTML += element.textContent;
        console.log(element)
        let code = this.getAttribute('data');
        this.classList.add('active');
    }
});