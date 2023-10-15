const inputBox = document.getElementById('input-box')
const containerList = document.getElementById('container-list')

function addTask() {
    if(inputBox.value === '') {
        alert("Kosong cok!, di isi sikek!")
    } else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        containerList.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = ""
    saveData()
}

containerList.addEventListener("click", function(e) {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked")
        saveData()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        saveData()
    }
}, false)

function saveData() {
    localStorage.setItem("Data", containerList.innerHTML)
}

function showTask() {
    containerList.innerHTML = localStorage.getItem("Data")
}
showTask()