const inputText = document.getElementById('itemInput')
const addBtn = document.getElementById('addBtn')
const list = document.getElementById('list')

addBtn.addEventListener('click', () => {
    if (inputText.value.trim() === "") {
        alert('Kuch daalo ji!')
        return
    }

    const li = document.createElement('li')
    
    const textSpan = document.createElement('span')
    textSpan.textContent = inputText.value

    const delBtn = document.createElement('button')
    delBtn.classList.add('delete')
    delBtn.textContent = "Delete"

    delBtn.addEventListener('click', () => {
        li.remove()
    })

    li.appendChild(textSpan)
    li.appendChild(delBtn)
    list.appendChild(li)
    
    textSpan.addEventListener('dblclick', () => {
        const editInput = document.createElement('input')
        editInput.type = 'text'
        editInput.value = textSpan.textContent
        
        li.replaceChild(editInput, textSpan)
        editInput.focus()

        const saveEdit = () => {
            if (editInput.value.trim() === "") {
                alert("Can't be empty!")
                editInput.focus()
                return
            }
            textSpan.textContent = editInput.value
            li.replaceChild(textSpan, editInput)
        }

        editInput.addEventListener('blur', saveEdit)
        editInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                saveEdit()
            }
        })
    })

    inputText.value = ""
})