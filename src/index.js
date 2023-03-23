document.addEventListener("DOMContentLoaded", () => {
  // your code here
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
    e.preventDefault();
    createList(e.target.new_task_description.value);
    form.reset();
})
})


const createList = (entry) => {
  let p = document.createElement('p')
  let btn = document.createElement('button')
 // btn.addEventListener("button", deleteItem)
  btn.textContent = "remove"
  p.textContent = `${entry} `
  document.getElementById('tasks').appendChild(p)
  p.append(btn);
  btn.addEventListener("click", deleteItem)
}

const deleteItem = e => e.target.parentNode.remove()
