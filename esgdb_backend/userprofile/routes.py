from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity
from extensions.database import db
from models import User

profile_bp = Blueprint('profile', __name__)

# Hent brugerens profil
@profile_bp.route('/', methods=['GET'])
@jwt_required()
def get_profile():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)

    if not user:
        return jsonify({'error': 'Bruger ikke fundet'}), 404

    return jsonify({'username': user.username}), 200

# Opdater brugerens oplysninger (valgfrit)
@profile_bp.route('/', methods=['PUT'])
@jwt_required()
def update_profile():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)

    if not user:
        return jsonify({'error': 'Bruger ikke fundet'}), 404

    data = request.get_json()
    if 'username' in data:
        user.username = data['username']
    db.session.commit()

    return jsonify({'message': 'Profil opdateret'}), 200
