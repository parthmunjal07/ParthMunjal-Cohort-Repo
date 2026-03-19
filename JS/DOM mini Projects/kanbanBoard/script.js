const columns = document.querySelectorAll('.column')

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-btn')){
        const text = prompt('Enter Your task')

        if (!text) return

        const task = document.createElement('div')
        task.className = 'task'
        task.textContent = text

        task.setAttribute('draggable', true)

        e.target.previousElementSibling.appendChild(task)
    }
})
document.addEventListener('dragstart', (e) => {
    if (e.target.classList.contains('task')){
        draggedTask = e.target
        e.target.classList.addEventListener('dragging')
    }
})

document.addEventListener('dragend', (e) => {
    if (e.target.classList.contains('task')){
        e.target.classList.remove('dragging')
        draggedTask = null
    }
})

columns.forEach((col) => {
    
})