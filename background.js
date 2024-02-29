chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.action === "schedulePosts") {
            console.log("Received request to schedule posts with new datetime and varyMinutes option.");
            // Placeholder: Respond back to the popup
            sendResponse({status: "success", message: "Scheduling started with new settings"});
        }
    }
);
