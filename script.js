//My Javascript Code..!
var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");
let sideMenu = document.querySelector("nav ul");



function opentab(tabName) {
    for (tablink of tabLinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabContents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}



function openMenu() {
    sideMenu.style.right = "0";
}

function closeMenu() {
    sideMenu.style.right = "-230px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzYwXBR-6lwCmoberhYP66fX2NebpghE6tyWe6cAOk9d_q6Ir9z1qerbgfQxmK77WxoGw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");


form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message Sent Successfully..!"
            setTimeout(function () {
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})