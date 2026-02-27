const checkBoxes = document.querySelectorAll('input[type="checkbox"]')
const deleteBtns = document.querySelectorAll('.delete-btn');
const newAddBtn = document.getElementById('add-new-btn');
console.log(newAddBtn.innerText)
for (let checkBox of checkBoxes) {
    checkBox.addEventListener('change', (e) => {
        const text = e.target.nextElementSibling;
        console.log(text)
        if (e.target.checked) {
            text.classList.add("line-through")
        } else {
            text.classList.remove("line-through")
        }
    })
};

for (let deleteBtn of deleteBtns) {
    deleteBtn.addEventListener('click', (e) => {
        const parentNode = e.target.parentNode;
        parentNode.remove(e.target)
    })
};