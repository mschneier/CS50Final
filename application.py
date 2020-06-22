from flask import Flask, flash, render_template, redirect, request, session
from flask_wtf.csrf import CSRFProtect
from functools import wraps

app = Flask(__name__)
app.config["SECRET_KEY"] = "asfl;jasdklfj;lkjlk;23j4"
csrf = CSRFProtect(app)


@app.route("/", methods=["GET", "POST"])
def index():
    return render_template("index.html")
