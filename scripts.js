const form = document.querySelector("form")
const footer = document.querySelector("footer")
const addItem = document.querySelector("form input")
const itens = document.getElementById("itens")
const exclude = document.querySelector(".delete")
const closeAlert = document.querySelector(".close-alert")

form.addEventListener("submit", () => newItem(event))
closeAlert.addEventListener("click", () => alertClosed())

function newItem(event) {
  event.preventDefault()

  if (addItem.value === "") {
    return
  }

  const li = document.createElement("li")
  const div = document.createElement("div")
  const input = document.createElement("input")
  const span = document.createElement("span")
  const button = document.createElement("button")
  const img = document.createElement("img")

  div.setAttribute("class", "separation")
  input.setAttribute("type", "checkbox")
  span.innerText = addItem.value
  button.setAttribute("class", "delete")
  img.src = "./assets/delete.svg"

  itens.append(li)
  li.append(div)
  div.append(input)
  div.append(span)
  li.append(button)
  button.append(img)

  button.addEventListener("click", () => {
    li.remove()
    alert()
  })

  input.addEventListener("click", () => {
    span.classList.toggle("line-through")
  })
}

function alert() {
  footer.classList.remove("hide")
  footer.classList.add("fadeout")
  setInterval(function () {
    footer.classList.remove("fadeout")
    footer.classList.add("hide")
  }, 7000)
}

function alertClosed() {
  footer.classList.add("hide")
}
