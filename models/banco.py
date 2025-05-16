from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

#class tabela
class Adms(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    cargo = db.Column(db.String(100), nullable=False)
    imagem = db.Column(db.String(200))
    
    __tablename__= 'adms'
    