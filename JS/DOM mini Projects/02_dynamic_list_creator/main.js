const inputText = document.getElementById('itemInput')
const addBtn = document.getElementById('addBtn')
const list = document.getElementById('list')

addBtn.addEventListener('click', () => {
    if (inputText.value === "") {
        alert('Kuch daalo ji!')
        return
    }

    const li = document.createElement('li')
    const delBtn = document.createElement('button')
    delBtn.classList.add('delete')
    delBtn.textContent = "Delete"

    li.textContent = inputText.value

    delBtn.addEventListener('click', ()=>{
        li.remove()
    })

    li.appendChild(delBtn)
    list.appendChild(li)
    
    li.addEventListener('dblclick', () => {
        li.innerText = ""
        li.appendChild(delBtn)
    })

    inputText.value = ""
})