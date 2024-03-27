# flask --app app run --debug
from flask import Flask, render_template
app = Flask(__name__)

@app.get("/")
def index():
    return render_template('index.html')

@app.get("/views/abrigos")
def abrigos():
    return render_template('abrigos.html')

@app.get("/views/camisetas")
def camisetas():
    return render_template('camisetas.html')

@app.get("/views/carrito")
def carrito():
    return render_template('carrito.html')

@app.get("/views/pantalones")
def pantalones():
    return render_template('pantalones.html')

app.run()