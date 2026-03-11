const checkBoxes = document.querySelectorAll('input[type="checkbox"]')
const deleteBtns = document.querySelectorAll('.delete-btn');
const newAddBtn = document.getElementById('add-new-btn');
const previousTask = document.getElementById('previous-task');
const newTask = document.getElementById('new-task');
const backBtn = document.getElementById('back-btn');
const createTaskBtn = document.getElementById('create-task');
const textInput = document.getElementById('text-input');
const taskParent = document.getElementById('task-parent')

newAddBtn.addEventListener('click', () => {
    console.log('New-add-btn clicked')
    previousTask.classList.add('hidden');
    newTask.classList.remove('hidden')
})

backBtn.addEventListener('click', () => {
    previousTask.classList.remove('hidden');
    newTask.classList.add('hidden')
})

textInput.addEventListener('input', () => {
    if (textInput.value.trim() === '') {
        createTaskBtn.disabled = true;
    } else {
        createTaskBtn.disabled = false;
    }
})

createTaskBtn.addEventListener('click', () => {
        const getText = textInput.value;
        const div = document.createElement('div');
        div.className = "task-card p-6 bg-gray-100 flex justify-between items-center rounded-2xl"
        div.innerHTML = `
        <input type="checkbox" class="checkbox checkbox-primary" />
        <p class="text-[16px]"> ${getText}</p>
        <button class="btn delete-btn rounded-2xl bg-blue-600 text-white"><i
        class="pointer-events-none fa-regular fa-trash-can"></i></button>
    `
    taskParent.appendChild(div);
    const newCheckbox = div.querySelector('input[type="checkbox"]');
    const newDeleteBtn = div.querySelector('.delete-btn');
    attachCheckboxListener(newCheckbox);
    attachDeleteListener(newDeleteBtn);
    textInput.value = '';
    createTaskBtn.disabled = true;
    previousTask.classList.remove('hidden');
    newTask.classList.add('hidden');
})

function attachCheckboxListener(checkbox) {
    checkbox.addEventListener('change', (e) => {
        const text = e.target.nextElementSibling;
        if (e.target.checked) {
            text.classList.add('line-through')
        } else {
            text.classList.remove('line-through')
        }
    })
}

function attachDeleteListener(deleteBtn) {
    deleteBtn.addEventListener('click', (e) => {
        const parentNode = e.target.closest('.task-card');
        parentNode.remove();
    })
}

deleteBtns.forEach(attachDeleteListener)
checkBoxes.forEach(attachCheckboxListener)

