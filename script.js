const btns = document.querySelector(".btns")
const addTask = document.querySelector(".tasks")

const tasks = [
    {task: "Wash Car",  price:  10},
    {task: "Mow Lawn", price:  20},
    {task: "Pull Weeds", price:  30}
] 



btns.addEventListener('click', (e) => {
    let btn = document.querySelector('light-btn')
    for ( let i = 0; i < tasks.length; i++){
        if(e.target.textContent.includes(tasks[i].task)){
            addTask.innerHTML += tasks[i].task
            console.log(tasks[i].price)
        }
    }
});

