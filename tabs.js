const tabs = document.querySelector('.tabs');

const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick(e) {
  console.log(e.currentTarget);
}

tabButtons.forEach((button) =>
  button.addEventListener('click', handleTabClick)
);
