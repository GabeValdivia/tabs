const tabs = document.querySelector('.tabs');

const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(e) {
  // Hide all tab panels
  tabPanels.forEach((panel) => {
    panel.hidden = true;
  });
  // Mark all tabs as unselected
  tabButtons.forEach((tab) => {
    tab.setAttribute('aria-selected', false);
  });
  // Mark the clicked tab as selected
  e.currentTarget.setAttribute('aria-selected', true);
  // Find the associated tabPanel and show it!
  const { id } = e.currentTarget;

  /* METHOD 1
  const tabPanel = tabs.querySelector(`
  [aria-labelledby="${id}"]`);
  tabPanel.hidden = false;
  */

  // METHOD 2 -  Find in the array of tab panels
  const tabPanel = tabPanels.find(
    (panel) => panel.getAttribute('aria-labelledby') === id
  );
  tabPanel.hidden = false;
}

tabButtons.forEach((button) =>
  button.addEventListener('click', handleTabClick)
);
