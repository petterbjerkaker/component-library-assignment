/*Component library
Takes the data-component value of each element in the library overview 
and finds the corresponding data-name to display.*/


const overviewButtons = document.querySelectorAll('.overview__button');
const components = document.querySelectorAll('.component');


/*When button is clicked, function displayComponent runs. 
The function iterates through all components and displays the
component which matches with the data-component value.
Next, it iterates through buttons and the active class is set
based on the corresponding value.*/
overviewButtons.forEach(button => {
	button.addEventListener('click', displayComponent)
});

/*event.CurrentTarget will always refer to the element.
In this example it refers to the button clicked.
The value of the data-component is extracted.
/*Removes the visible class, and if the data-name value is equal to the value
of button clicked, the class is added */
function displayComponent(event) {
	const button = event.currentTarget;
	const componentToDisplay = button.dataset.component;

	components.forEach(component => {
		component.classList.remove('component--visible');

		if (component.dataset.name === componentToDisplay) {
			component.classList.add('component--visible');
		}
	});


	/* Removes the class which is active.
	However, if button has the data-component value equal
	to the one clicked, as if it is the same button, the 
	active class is added.*/
	overviewButtons.forEach(button => {
		button.classList.remove('overview__button--active');
		if (button.dataset.component === componentToDisplay) {
			button.classList.add('overview__button--active');
		}
	});
}






/*Accordion*/

const acc = document.querySelectorAll(".accordion_button");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
	this.classList.toggle("active");
	var panel = this.nextElementSibling;
	if (panel.style.display === "block") {
	  panel.style.display = "none";
	} else {
	  panel.style.display = "block";
	}
  });
}

/*Pop-up */

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

