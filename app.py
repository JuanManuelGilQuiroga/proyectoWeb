# flask --app app run --debug
import requests
from flask import Flask, render_template
app = Flask(__name__)

@app.get("/")
def index():
    peticion = requests.get("https://660485882ca9478ea17e22bb.mockapi.io/allProduct")
    return render_template('index.html', data=peticion.json())

@app.get("/views/abrigos")
def abrigos():
    peticion = requests.get("https://660485882ca9478ea17e22bb.mockapi.io/allProduct")
    return render_template('abrigos.html', data=peticion.json())

@app.get("/views/camisetas")
def camisetas():
    peticion = requests.get("https://660485882ca9478ea17e22bb.mockapi.io/allProduct")
    return render_template('camisetas.html', data=peticion.json())

@app.get("/views/carrito")
def carrito():
    peticion = requests.get("https://660485882ca9478ea17e22bb.mockapi.io/allProduct")
    return render_template('carrito.html', data=peticion.json())

@app.get("/views/pantalones")
def pantalones():
    peticion = requests.get("https://660485882ca9478ea17e22bb.mockapi.io/allProduct")
    return render_template('pantalones.html', data=peticion.json())

app.run(debug=True)