from flask import Flask, jsonify, render_template
from flask_wtf.csrf import CSRFProtect
from functools import wraps
from requests import get

app = Flask(__name__)
app.config["SECRET_KEY"] = "asfl;jasdklfj;lkjlk;23j4"
csrf = CSRFProtect(app)


@app.route("/", methods=["GET", "POST"])
def index():
    return render_template("index.html")


@app.route("/api/<currency>/")
def api(currency):
    url = f"https://api.exchangeratesapi.io/latest?base=USD&symbols={currency}"
    response = jsonify(get(url).text)
    return response
