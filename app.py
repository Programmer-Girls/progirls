from flask import Flask
from config import Config
import os
from controllers.user_controller import UserController
from models.banco import db, Adms

app = Flask(__name__, template_folder=os.path.join('view', 'templates'))

app.config.from_object(Config)

#inicializar o banco de dados

db.init_app(app)

#criar tabelas

with app.app_context():
    db.create_all()
    


# Verifica se a tabela está vazia para não duplicar e adiciona os dados na tabela
    if not Adms.query.first():
        adms_para_adicionar = [
            Adms(name="Raquel Maia", cargo="Líder", imagem="image/raquel.jpg"),
            Adms(name="Leticya Locha", cargo="Vice-Líder", imagem="image/leti.jpg"),
            Adms(name="Sabrinne Sousa", cargo="Coordenadora", imagem="image/sabrinne.jpg"),
            Adms(name="Karol Falcão", cargo="Coordenadora", imagem="image/karol.jpg"),
            Adms(name="Lariane Azevedo", cargo="Coordenadora", imagem="image/lari.jpg"),
            Adms(name="Danielle Costa", cargo="Coordenadora", imagem="image/dani.jpg"),
        ]
        

        db.session.add_all(adms_para_adicionar)
        db.session.commit()


    # Função para Atualizar nome da Leticya se já existir com nome antigo
"""     leticya = Adms.query.filter_by(name="Leticya Locha").first()
    if leticya:
        leticya.name = "Letycia Locha"
        db.session.commit()
        print("Nome atualizado com sucesso.") """
#rota para redirecionamento

app.add_url_rule('/', 'home', UserController.home)
app.add_url_rule('/sobre', 'sobrenos', UserController.sobrenos)

if __name__ == '__main__':
    app.run(debug=True)