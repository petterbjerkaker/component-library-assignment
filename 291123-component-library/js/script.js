/**
 * Component overview
 * 
 * Takes the "data-component" value of each element in the overview 
 * and finds the corresponding "data-name" div to display.
 */

const overviewButtons = document.querySelectorAll('.overview__button');
const components = document.querySelectorAll('.component');

// for each overview button
overviewButtons.forEach(button => {
	// when I click on a button, run displayComponent
	button.addEventListener('click', displayComponent)
});

// iterate through all components and display the one that
// matches with the "data-component" value.
// then, iterate through all overview buttons and set the
// active class based on the same value.
function displayComponent(event) {
	// event.currentTarget always refers to the element used
	// in (element).addEventListener, in this case, it refers
	// to the button that was clicked
	const button = event.currentTarget;

	// extract the "data-component" value, e.g. "accordion",
	// "breadcrumbs", "button", etc.
	const componentToDisplay = button.dataset.component;

	// for each component element...
	components.forEach(component => {
		// remove the "visible" class
		component.classList.remove('component--visible');

		// but if the "data-name" value equals the value
		// from the button we just clicked, add the class
		if (component.dataset.name === componentToDisplay) {
			component.classList.add('component--visible');
		}
	});

	overviewButtons.forEach(button => {
		// remove the "active" class
		button.classList.remove('overview__button--active');

		// but if this button has a "data-component" value that
		// equals to the one we just clicked (meaning it's the
		// same button), add the active class
		if (button.dataset.component === componentToDisplay) {
			button.classList.add('overview__button--active');
		}
	});
}






//accordian

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

//accordian


//pop up

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

//pop up