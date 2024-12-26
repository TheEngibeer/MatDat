import sys
import os

# Sætter path til backend
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from extensions.database import db
from auth.routes import auth_bp
from resources.routes import resources_bp
from userprofile.routes import profile_bp

# Flask-app og konfigurationer
app = Flask(__name__)
CORS(app, supports_credentials=True)

# Miljøkonfiguration
BASE_DIR = os.path.abspath(os.path.dirname(__file__))  # Sætter en absolut sti
app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{os.path.join(BASE_DIR, 'instance', 'database.db')}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'fallback_nøgle')

# Initialisering af udvidelser
db.init_app(app)
jwt = JWTManager(app)
migrate = Migrate(app, db)

# Registrering af blueprints
app.register_blueprint(auth_bp, url_prefix="/")
app.register_blueprint(resources_bp, url_prefix="/resources")
app.register_blueprint(profile_bp, url_prefix="/profile")

# Flask-serveren startes
if __name__ == "__main__":
    DEBUG_MODE = os.getenv('DEBUG_MODE', 'True') == 'True'
    app.run(debug=DEBUG_MODE)
