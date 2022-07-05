from flask import Flask, render_template ,url_for;
app =Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')


@app.route("/admin")
def admin():
    return render_template("admin.html")

@app.errorhandler(404)
def page_not_found(e):
    return('404')
    
if __name__ == "__main__":
    app.run(debug=True,host ="192.168.0.168")