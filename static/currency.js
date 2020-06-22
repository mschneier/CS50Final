document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();
    const currency = document.getElementById("currency").value;
    getCurrency(currency, "now").then((response) => {
        console.log(response);
    }, (error) => {
        console.error("Failed!", error);
    });
    //getCurrencyLastWeek();
    //getCurrencyLastMonth();
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
                resolve(req.response);
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
