from flask import Flask, render_template, url_for

app = Flask(__name__)


@app.route("/")
@app.route("/home")
def home():
    return render_template('index.html')


@app.route("/about")
def about():
    return "<h1>About Hoots</h1>"


if __name__ == '__main__':
    print("hello")
    app.run(debug=True)
