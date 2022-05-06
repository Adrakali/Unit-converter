const btns = document.querySelector(".btns")
const table = document.querySelector(".task-table")
const total = document.querySelector(".total-amount")
let sum = 0

const tasks = [
    {task: "Wash Car",  price:  10},
    {task: "Mow Lawn", price:  20},
    {task: "Pull Weeds", price:  30}
] 

btns.addEventListener('click', (e) => {
    for ( let i = 0; i < tasks.length; i++){
        let item = tasks[i].task
        let prices = tasks[i].price
        
        if(e.target.textContent.includes(tasks[i].task)){ 

            let template = `
                <tr>
                    <th class="left">${item}</th>
                    <th class="right">${prices}</th>
                </tr>
            `
            table.innerHTML += template;  
            
            sum = sum + prices
        }        
    }
    total.textContent = "$" + sum
});
