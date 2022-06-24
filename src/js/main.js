
const popup = document.getElementById("dots");
if (popup) {
    popup.addEventListener("click", displayContent);
}
function displayContent() {
    document.getElementById("list").classList.toggle("active");
}

function setActive(id) {
    document.getElementById('Cats').classList.remove(`activeTab`);
    document.getElementById('Dogs').classList.remove(`activeTab`);
    document.getElementById('Devs').classList.remove(`activeTab`);
    document.getElementById(id).classList.add(`activeTab`);
    const tab = document.getElementById('tab')
    tab.classList.remove(`activeTabCats`);
    tab.classList.remove(`activeTabDogs`);
    tab.classList.remove(`activeTabDevs`);
    tab.classList.add(`activeTab${id}`);
}


// const sliderdown = document.getElementById("down-btn");
// if (sliderdown) {
//     sliderdown.addEventListener("click", displaySliderDown);
// }
// function displaySliderDown() {
//     document.getElementById("slide-content").classList.toggle("active-slide-down");
// }
// const sliderup = document.getElementById("up-btn");
// if (sliderup) {
//     sliderup.addEventListener("click", displaySliderUp);
// }
// function displaySliderUp() {
//     document.getElementById("slide-content").classList.toggle("active-slide-up");
// }

function slideUpDown(id) {
    document.getElementById('Up').classList.remove(`activeLock`);
    document.getElementById('Down').classList.remove(`activeLock`);
    document.getElementById(id).classList.add(`activeLock`);

    const lock = document.getElementById('lock')
    lock.classList.remove(`activeUp`);
    lock.classList.remove(`activeDown`);
    lock.classList.add(`active${id}`);

    const scale = document.getElementById('scala');
    scale.classList.remove(`scaleContentUp`);
    scale.classList.remove(`scaleContentDown`);
    scale.classList.add(`scaleContent${id}`);
}

function cartMove(id) {
    document.getElementById('product').classList.toggle(`active-btn`);

    const moveCart = document.getElementById('productId');
    moveCart.classList.remove(`activeProduct`);
    moveCart.classList.add(`active${id}`);

    document.getElementById('cartId').classList.toggle(`activeCart`);
}


