from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity
from extensions.database import db
from models import Resource

# Blueprint for ressourcer
resources_bp = Blueprint('resources', __name__)

# Hent alle offentliggjorte ressourcer
@resources_bp.route('/', methods=['GET'])
def get_resources():
    resources = Resource.query.filter_by(status="published").all()
    resources_list = [{
        "id": r.id,
        "material": r.material,
        "quantity": r.quantity,
        "price": r.price,
        "description": r.description,
        "category": r.category,
        "location": r.location,
        "status": r.status,
        "image_url": r.image_url
    } for r in resources]
    return jsonify(resources_list), 200

# Opret ny ressource
@resources_bp.route("/", methods=["POST"])
@jwt_required()
def create_resource():
    data = request.get_json()
    user_id = get_jwt_identity()  # Henter bruger-ID fra token
    print("Modtagne data:", data)  # Log data fra frontend
    print("Bruger-ID:", user_id)   # Log bruger-ID fra token

    # Opret en ny resource baseret på request-data
    new_resource = Resource(
        material=data.get("material"),
        quantity=data.get("quantity"),
        price=data.get("price"),
        description=data.get("description"),
        category=data.get("category"),  # Tilføj kategori
        location=data.get("location"),  # Tilføj lokation
        user_id=user_id,                # Tilføj bruger-ID
        image_url=data.get("image_url"), 
        status=data.get("status", "draft"),
    )

    db.session.add(new_resource)
    db.session.commit()

    return jsonify({"id": new_resource.id, "message": "Ressource oprettet"}), 201


@resources_bp.route('/myresources', methods=['GET'])
@jwt_required()
def get_my_resources():
    # Hent brugerens ID fra JWT-token
    user_id = get_jwt_identity()

    # Filtrer ressourcer, der tilhører brugeren
    resources = Resource.query.filter_by(user_id=user_id).all()

    # Omformater ressourcer til JSON
    resources_list = [
        {
            "id": r.id,
            "material": r.material,
            "quantity": r.quantity,
            "price": r.price,
            "description": r.description,
            "category": r.category,
            "location": r.location,
            "status": r.status,
            "image_url": r.image_url,
        }
        for r in resources
    ]

    return jsonify(resources_list), 200

