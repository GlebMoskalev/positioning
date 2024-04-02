/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal1 = document.querySelector(".modal-content button");
const closeModal2 = document.querySelector(".close");

openModal.onclick = function() {
    modal.style.display = "block";
}

closeModal1.onclick = function() {
    modal.style.display = "none";
}
closeModal2.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
