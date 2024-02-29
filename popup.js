document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('schedule-button').addEventListener('click', schedulePosts);
});

document.getElementById('scheduleBtn').addEventListener('click', () => {
  const dateTime = document.getElementById('scheduleTime').value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: "schedulePost", dateTime: dateTime}, function(response) {
      if (response.status === 'success') {
        console.log('Post scheduled successfully.');
      }
    });
  });
});


function schedulePosts() {
    const images = document.getElementById('image-input').files;
    const startDatetime = document.getElementById('start-datetime').value;
    const varyMinutes = document.getElementById('vary-minutes').checked;

    if (images.length > 0 && startDatetime) {
        chrome.runtime.sendMessage({
            action: "schedulePosts",
            files: Array.from(images), // Convert FileList to Array
            startDatetime: startDatetime,
            varyMinutes: varyMinutes
        }, function(response) {
            console.log("Scheduling response:", response);
        });
    } else {
        alert("Please select images and set a start date and time.");
    }
}

