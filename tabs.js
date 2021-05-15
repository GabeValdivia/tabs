const tabs = document.querySelector('.tabs');

const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick(e) {
  // Hide all tab panels
  tabPanels.forEach((panel) => {
    panel.hidden = true;
  });
  // Mark all tabs as unselected
  // Mark the clicked tab as selected
  // Find the associated tabPanel and show it!
}

tabButtons.forEach((button) =>
  button.addEventListener('click', handleTabClick)
);
