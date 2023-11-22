document.querySelectorAll('input[type="checkbox"]').forEach(function (checkbox) {
  checkbox.addEventListener('change', updateProgressBar);
});

document.querySelector('progress').max = 100;
document.querySelector('progress').value = 0;

function updateProgressBar() {
  // Get all checkboxes on the page
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');

  // Count the total number of checkboxes and checked checkboxes
  let totalCheckboxes = checkboxes.length;
  let checkedCount = 0;

  // Loop through each checkbox and check if it is checked
  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      checkedCount++;
    }
  });

  // Calculate the percentage of checked checkboxes
  let percentage = (checkedCount / totalCheckboxes) * 100;

  // Update the value attribute of the progress element
  document.querySelector('progress').value = percentage;
}