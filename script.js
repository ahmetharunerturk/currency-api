function fetchJSON(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

var url = "https://doviz.dev/v1/try.json";

fetchJSON(url)
    .then(data => {

        var exchangeRatesDiv = document.getElementById("exchangeRates");
        var html = "<ul>";

        for (var currency in data) {
            if (currency !== "_meta") {
                var currencyCode = currency.substring(0, 3);
                var currencyCode2 = currency.substring(3, 6);

                html += "<li>1 " + currencyCode + " = " + data[currency] + " "+currencyCode2 +"</li>";
            }
        }

        html += "</ul>";

        exchangeRatesDiv.innerHTML = html;
    });
