const checkBoxes = document.querySelectorAll('input[type="checkbox"]')
const deleteBtns = document.querySelectorAll('.delete-btn');
const newAddBtn = document.getElementById('add-new-btn');
const previousTask = document.getElementById('previous-task');
const newTask = document.getElementById('new-task');
const backBtn = document.getElementById('back-btn');
const createTaskBtn = document.getElementById('create-task');
const textInput = document.getElementById('text-input');
const taskParent = document.getElementById('task-patent')

for (let deleteBtn of deleteBtns) {
    deleteBtn.addEventListener('click', (e) => {
        const parentNode = e.target.parentNode;
        parentNode.remove(e.target)
    })
};

newAddBtn.addEventListener('click', () => {
    // console.log('New-add-btn clicked')
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
        div.innerHTML = `
        <div class="p-6 bg-gray-100 flex justify-between items-center rounded-2xl">
        <input type="checkbox" class="checkbox checkbox-primary" />
        <p class="text[16px]"> ${getText}</p>
        <button class="btn delete-btn rounded-2xl bg-blue-600 text-white"><i
        class="pointer-events-none fa-regular fa-trash-can"></i></button>
        </div>
    `
    taskParent.appendChild(div);
    checkbox(div);
})

function checkbox(taskParent){
    for(let checkBox of checkBoxes){
        checkBox.addEventListener('change', (e)=>{
            const text = e.target.nextElementSibling;
            if(e.target.checked){
                text.classList.add('link-through')
            }else{
                text.classList.remove('text-through')
            }
        })
    }
}

checkbox(taskParent);