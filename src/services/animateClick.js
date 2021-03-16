export default function animateClick(btn, normalClass, clickedClass) {

    function buttonDown() {
        btn.classList.add(clickedClass);
        btn.classList.remove(normalClass);
    }

    function buttonUp() {
        btn.classList.remove(clickedClass);
        btn.classList.add(normalClass);
    }


    btn.addEventListener('mousedown', () => {
        buttonDown();
        btn.addEventListener('mouseout', buttonUp);
    });

    btn.addEventListener('mouseup', () => {
        buttonUp();
        btn.removeEventListener('mouseout', buttonUp);
    });
}