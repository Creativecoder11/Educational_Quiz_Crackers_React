import React from "react";
import './ErrorPage.css'

const ErrorPage = () => {
  return (
    <div className="container my-5 p-5 text-center errorPage text-light rounded">
      <h1 className="fw-bold mt-3">404 Not Found!</h1>
      <p>
        404 — means not found. Basically, you’re looking for a page but the web
        application you’re talking to has no idea what you’re talking about.{" "}
      </p>
    </div>
  );
};

export default ErrorPage;
