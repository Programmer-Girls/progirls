from models.banco import Adms
from flask import render_template

class UserController:
    @staticmethod
    def home(): 
        return render_template('home.html')
    
    def sobrenos():
        adms = Adms.query.all()  
        return render_template('sobrenos.html', adms=adms)