// This function simulates setting the date and time for a post and clicking the schedule button
function schedulePost(dateTime) {
  // Find the date/time input on the page
  const dateTimeInput = document.querySelector('input[type="datetime-local"]');

  // Set the value to the desired date and time
  if (dateTimeInput) {
    dateTimeInput.value = dateTime; // dateTime should be in the correct format 'YYYY-MM-DDTHH:MM'
    
    // Dispatch event to ensure that any JavaScript listening for the change is notified
    dateTimeInput.dispatchEvent(new Event('change', { 'bubbles': true }));
  } else {
    console.error('Date/time input not found.');
    return;
  }

  // Find the schedule button on the page
  const scheduleButton = document.querySelector('button#scheduleButton'); // Replace with the correct selector for the schedule button

  // Click the schedule button
  if (scheduleButton) {
    scheduleButton.click();
  } else {
    console.error('Schedule button not found.');
  }
}

// You would need to set up a communication link with your popup.js or background.js to receive the dateTime
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action === "schedulePost") {
      schedulePost(request.dateTime);
      sendResponse({status: 'success'});
    }
  }
);
