document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();
    const currency = document.getElementById("currency").value;
    const dollars = document.getElementById("usd").value;
    getCurrency(currency, "now").then((response) => {
        const rate = response.rates[Object.keys(response.rates)[0]].toFixed(5);
        const exchanged = (dollars * rate).toFixed(2);
        document.getElementById("resultNow").innerText = `
            With an exchange rate of ${rate}, $${dollars}
            equals ${exchanged} ${currency}.
        `;
    }, (error) => {
        console.error("Failed!", error);
    });
    getCurrency(currency, "lastWeek").then((response) => {
        const rate = response.rates[Object.keys(response.rates)[0]].toFixed(5);
        document.getElementById("lastWeek").innerText = `
            The exchange rate of USD to ${currency} last week was ${rate}.
        `;
    }, (error) => {
        console.error("Failed!", error);
    });
    getCurrency(currency, "lastMonth").then((response) => {
        const rate = response.rates[Object.keys(response.rates)[0]].toFixed(5);
        document.getElementById("lastMonth").innerText = `
            The exchange rate of USD to ${currency} last month was ${rate}.
        `;
    }, (error) => {
        console.error("Failed!", error);
    });
});

function getCurrency(currency, time) {
    let url = "";
    if (time == "now") {
        url = `https://api.exchangeratesapi.io/latest?base=USD&symbols=${currency}`;
    } else if (time == "lastWeek") {
        const today = new Date();
        const lastWeek = new Date(today.setDate(today.getDate() - 7));
        const dateString = `${lastWeek.getFullYear()}-${lastWeek.getMonth()}-${lastWeek.getDate()}`;
        url = `https://api.exchangeratesapi.io/${dateString}?base=USD&symbols=${currency}`;
    } else {
        const today = new Date();
        const lastMonth = new Date(today.setDate(1).setMonth(today.getMonth() - 1));
        const dateString = `${lastMonth.getFullYear()}-${lastMonth.getMonth()}-${lastMonth.getDate()}`;
        url = `https://api.exchangeratesapi.io/${dateString}?base=USD&symbols=${currency}`;
    }
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open("GET", url);
        req.onload = () => {
            if (req.status == 200) {
                resolve(JSON.parse(req.response));
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
