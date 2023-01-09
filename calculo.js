async function getUsdCol() {
    // Hacer una solicitud a la página web
    const response = await fetch("https://www.banrep.gov.co/es");
    const html = await response.text();

    // Utilizar jQuery para procesar el HTML y obtener el valor del tipo de cambio
    const $ = cheerio.load(html);
    const exchangeRateText = $("#usd > div.col-sm-8.text-right > p").text();
    const exchangeRate = parseFloat(exchangeRateText);

    return exchangeRate;
}

var usdCol, usdArg, col;
      //usdCol = await getUsdCol();
      //getUsdCol().then(result => usdCol = result);
      //usdCol = prompt("Valor en Colombianos de 1 Dolar. Ej: 4885.66")
      
      
      usdArg = 400;

       function colToUsd(col) {
        return col / usdCol;
      }

       function usdToArg(usd) {
        return usd * usdArg;
      }

      function processForm(event) {
        // Evitar que el formulario envíe los datos y redirija a otra página
        event.preventDefault();

        var inputUsdCol = document.getElementById("dolCol");
        usdCol = inputUsdCol.value
        var inputElement = document.getElementById("col");
        col = inputElement.value;
        var final = usdToArg(colToUsd(col));
        console.log(final);

        var resultElement = document.getElementById("result");
        resultElement.textContent = "Pesos: $" + Math.trunc(final).toLocaleString();
      }

      var formElement = document.getElementById("conversion-form");
      formElement.addEventListener("submit", processForm);