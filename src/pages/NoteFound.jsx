import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="container vh-100 d-flex flex-column align-items-center justify-content-center text-center">
            <h1 className="display-1 fw-bold text-warning">404</h1>
            <h2 className="mb-4">Oops! You've drifted into deep space.</h2>
            <p className="lead text-muted mb-5">
                The page you are looking for doesn't exist or has been moved. 
                Let's get you back to safety.
            </p>
            <Link to="/" className="btn btn-warning btn-lg px-5 shadow-sm fw-bold">
                Return Home
            </Link>
        </div>
    );
}