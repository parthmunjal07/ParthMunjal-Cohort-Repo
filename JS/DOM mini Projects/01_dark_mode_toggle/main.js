const btn = document.getElementById('toggleButton')

btn.addEventListener('click', () => {
    if (document.body.classList.toggle('dark')){
        document.querySelector('.heading').textContent = "Dark Mode"
        document.querySelector('#toggleButton').textContent = "Toggle Light Mode "
    } else {
        document.querySelector('.heading').textContent = "Light Mode"
        document.querySelector('#toggleButton').textContent = "Toggle Dark Mode "
    }
    
})