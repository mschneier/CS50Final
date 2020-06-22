from flask import Flask, flash, render_template, redirect, request, session
from flask_wtf.csrf import CSRFProtect
from functools import wraps

app = Flask(__name__)
app.config["SECRET_KEY"] = "asfl;jasdklfj;lkjlk;23j4"
csrf = CSRFProtect(app)


def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if not session.get("username"):
            return redirect("/login")
        return f(*args, **kwargs)
    return decorated_function


@app.route("/", methods=["GET", "POST"])
@login_required
def index():
    return render_template("index.html")
