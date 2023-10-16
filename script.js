const button = document.getElementById("selection_button");
const body = document.body;
const clickButtons = document.querySelectorAll(".click_button, .read_link");
const clickCount = {};

button.addEventListener("click", function() {
    body.classList.toggle("special-bg");
    if (body.classList.contains("special-bg")) {
        button.textContent = "Save";
    } else {
        button.textContent = "Edit";
    }
});

clickButtons.forEach(function(element) {
    element.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default behavior of links
        const text = element.textContent;

        if (clickCount[text] === undefined) {
            // If the count is undefined, set it to 1
            clickCount[text] = 1;
        } else {
            // If the count is already set, remove it
            delete clickCount[text];
        }

        console.clear(); // Clear the console

        // Display the counts of buttons that have a count
        for (const key in clickCount) {
            if (clickCount.hasOwnProperty(key)) {
                console.log(`Element text: "${key}" Count: ${clickCount[key]}`);
            }
        }
    });
});