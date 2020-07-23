function t11(e) {
    document.querySelector('.key[data="' + e.code + '"]').classList.add('active');
}
document.querySelector('.input-text').onkeydown = t11;


function keyUp() {
    document.querySelector('.out').innerHTML = document.querySelector('.input-text').value;
    document.querySelectorAll('.key').forEach(function (elem) {
        elem.classList.remove('active');
    })
}
document.querySelector('.input-text').onkeyup = keyUp;

document.querySelectorAll('.key').forEach(function (element) {
    element.onclick = function () {
        document.querySelectorAll('.key').forEach(function (element) {
            element.classList.remove('active');
        });
        document.querySelector('.out').innerHTML += element.textContent;
        console.log(element)
        let code = this.getAttribute('data');
        this.classList.add('active');
    }
});