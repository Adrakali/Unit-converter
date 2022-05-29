const btns = document.querySelectorAll('[data-item]');
const tableElement = document.querySelector('.task-table');
const totalElement = document.querySelector('.total-amount');
let sum = parseInt(totalElement.textContent.replace('$', ''));
const rCol = document.querySelectorAll('.right');

// ADD ITEM =====

btns.forEach((button) => {
	let item = button.getAttribute('data-item');
	let price = parseInt(button.getAttribute('data-price'));
	button.addEventListener('click', () => {
		renderItem(item, price);
		updateTotal(price);
		button.disabled = true;
	});
});

// DELETE ITEM ROW =====

tableElement.addEventListener('click', (e) => {
	const itemVal = e.target.parentElement.getAttribute('data-item');
	const targetBtn = document.querySelector(`[data-item="${itemVal}"]`);
	const price = e.target.parentElement.getAttribute('data-price');
	if (e.target.classList.contains('delete')) {
		e.target.parentElement.parentElement.remove();
		targetBtn.disabled = false;
		totalElement.textContent = `$ ${(sum -= price)}`;
	}
});

//RENDER ITEM =====

function renderItem(currentItem, currentPrice) {
	let template = `
            <tr class="item-row">
            <th class="left">${currentItem}</th>
            <th class="right" data-item="${currentItem}" data-price="${currentPrice}">$${currentPrice} <i class="fa-solid fa-trash-can delete"></i> </th>
            </tr>
            `;
	tableElement.innerHTML += template;
}

//UPDATE TOTAL =====
function updateTotal(itemValue) {
	totalElement.textContent = `$ ${(sum += itemValue)}`;
	console.log(typeof sum);
}
