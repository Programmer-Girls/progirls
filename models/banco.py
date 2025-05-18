from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Integrante(db.Model):
    __tablename__ = 'integrante'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    bio = db.Column(db.String(1500), nullable=False)
    cargo = db.Column(db.String(800), nullable=False)
    imagem = db.Column(db.String(200))


class Adms(db.Model):
    __tablename__ = 'adms'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    cargo = db.Column(db.String(100), nullable=False)
    imagem = db.Column(db.String(200))


##Indicado inserir uma FK que correlaciona as tabelas. Toda ADM é uma integrante. 
##FK de correlação futura
##integrante_id = db.Column(db.Integer, db.ForeignKey('integrante.id'), nullable=True)