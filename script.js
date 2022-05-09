const btn = document.querySelectorAll('.item-btn');
const tableElement = document.querySelector('.task-table');
const totalElement = document.querySelector('.total-amount');
const deleteItem = document.querySelector('.delete');
let sum = parseInt(totalElement.textContent.replace('$', ''));

//ITEMS ARRAY =====
const products = [
	{ product: 'Wash Car', price: 10 },
	{ product: 'Mow Lawn', price: 20 },
	{ product: 'Pull Weeds', price: 30 },
];

// ADD ITEM =====
btn.forEach(function (item) {
	item.addEventListener('click', (e) => {
		let target = e.target;

		for (let i = 0; i < products.length; i++) {
			let item = products[i].product;
			let price = products[i].price;
			if (target.value === item) {
				renderItem(item, price);
			}
			target.disabled = true;
		}
		deleteRow(item);
	});
});

//RENDER ITEM =====
function renderItem(currentItem, currentPrice) {
	let template = `
            <tr class="item-row">
            <th class="left" value="${currentItem}">${currentItem}</th>
            <th class="right">$${currentPrice} <i class="fa-solid fa-trash-can delete"></i> </th>
            </tr>
            `;
	tableElement.innerHTML += template;
}

//UPDATE TOTAL =====
function updateTotal() {
	// let cartItem = tableElement[0];
	// let cartRow = cartItem.getElementByClassName('cart-row');
	// for (let i = 0; i < cartRow.length; i++) {
	// 	let cartRows = cartRow[i];
	// 	console.log(cartItem);
	// }
}

// DELETE ITEM ROW =====
function deleteRow(btnItem) {
	tableElement.addEventListener('click', (e) => {
		if (e.target.classList.contains('delete')) {
			e.target.parentElement.parentElement.parentElement.remove();
			updateTotal();
		}
		// btnItem.value = itemAttribute;
		// let itemAttribute = btnItem.getAttribute('value');
		//let resetItemBtn = `${btnItem}.getAttribute('${itemAttribute}')`;
		btnItem.disabled = false;
	});
}
