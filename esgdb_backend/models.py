from extensions.database import db

class User(db.Model):
    __tablename__ = 'user'
    __table_args__ = {'extend_existing': True}  # Tillad ændringer

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    password_hash = db.Column(db.String(200), nullable=False)
    resources = db.relationship('Resource', back_populates='user')  # Brug klassenavnet direkte

class Resource(db.Model):
    __tablename__ = 'resource'
    __table_args__ = {'extend_existing': True}  # Tillad ændringer

    id = db.Column(db.Integer, primary_key=True)
    material = db.Column(db.String(100), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Float, nullable=False)
    description = db.Column(db.Text)  # Tilføj afsluttende parentes her
    category = db.Column(db.String(100))
    location = db.Column(db.String(200))
    status = db.Column(db.String(50), default="draft")
    image_url = db.Column(db.String(300))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))  # Reference til brugeren
    user = db.relationship('User', back_populates='resources')  # Backref til User
