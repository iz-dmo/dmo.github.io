$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

 firstText = "Practice";
secondText = "Hein Learn";
thirdText = "Practice"
intervalTime = 600;
window.load = displayText();
function displayText() {
    // display first text
    document.querySelector('#dynamicContent').innerText = firstText;
    // display second text
    setTimeout(() => {
        document.querySelector('#dynamicContent').innerText = secondText;
    }, intervalTime * 3);
    // display third text
    setTimeout(() => {
        document.querySelector('#dynamicContent').innerText = thirdText;
    }, intervalTime * 5);
}

setInterval(() => {
    displayText();
}, intervalTime * 7);

//popular
