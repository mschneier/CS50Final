document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();
    const currency = document.getElementById("currency").value;
    const rateNow = getCurrency(currency, "now");
    getCurrencyLastWeek();
    getCurrencyLastMonth();
});

function getCurrency(currency, time) {
    let url = "";
    if (time == "now") {
        url = `https://api.exchangeratesapi.io/latest?base=USD&symbols=${currency}`;
    }
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open("GET", url);
        req.onload = () => {
            if (req.status == 200) {
                
            } else {
                reject(Error(req.statusText));
            }
        };
        req.onerror = () => {
            reject(Error("Network Error."));
        };
        req.send();
    });
}
