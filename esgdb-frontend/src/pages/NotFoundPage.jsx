import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="text-center py-5">
      <h1>404</h1>
      <p>Siden blev ikke fundet.</p>
      <Link to="/" className="btn btn-primary">
        Gå til forsiden
      </Link>
    </div>
  );
}

export default NotFoundPage;
