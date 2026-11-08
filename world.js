
document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("lookup");
    const countryInput = document.getElementById("country");
    const result = document.getElementById("result");

    button.addEventListener("click", function () {

        const country = countryInput.value;

        // Send AJAX request to world.php
        fetch("/info2180-lab5/world.php?country=" + encodeURIComponent(country))

            .then(response => {
                console.log("Response status:", response.status);

                if (!response.ok) {
                    throw new Error("HTTP error: " + response.status);
                }

                return response.text();
            })

            .then(data => {
                console.log("Data received:", data);
                result.innerHTML = data;
            })

            .catch(error => {
                console.error("Fetch error:", error);
                result.textContent = "Error retrieving country information.";
            });

    });

});
