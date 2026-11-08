
document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("lookup");
    const citiesButton = document.getElementById("lookup-cities");
    const countryInput = document.getElementById("country");
    const result = document.getElementById("result");

    function lookup(country, lookupType) {

        fetch("world.php?country=" + encodeURIComponent(country) +
              "&lookup=" + lookupType)

            .then(response => response.text())

            .then(data => {
                result.innerHTML = data;
            })

            .catch(error => {
                console.log(error);
                result.textContent = "Error retrieving information.";
            });
    }

    button.addEventListener("click", function () {

        const country = countryInput.value;

        lookup(country, "countries");

    });

    citiesButton.addEventListener("click", function () {

        const country = countryInput.value;

        lookup(country, "cities");

    });

});
