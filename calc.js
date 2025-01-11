let bx = document.querySelector(".boxes");
for (let i = 0; i < 3390; i++) {
    bx.appendChild(Object.assign(document.createElement('div'), { className: 'week' }));
}

let fn = (evt) => {
    const dateInput = document.getElementById('inp').value;
    for(let i = 0; i < 3390; i++)
        bx.children[i].classList.remove("spent");

    if (!dateInput) {
        return;
    }

    const selectedDate = new Date(dateInput);
    const today = new Date();

    // Clear the time part of today's date for accurate calculation
    today.setHours(0, 0, 0, 0);

    const diffInMs = today - selectedDate;
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    const weeks = Math.floor(diffInDays / 7);
    for(let i = 0; i < weeks; i++){
        bx.children[i].classList.add("spent");
    }
}
fn();
document.querySelector("#inp").addEventListener("change", fn);