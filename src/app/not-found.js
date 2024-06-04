import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="notfound">
      <p>404</p>
      <h5>
        OOPS! Page you&apos;re looking for doesn&apos;t exist. Please use search
        for help
      </h5>
      <Link href="/">Go back to Home Page</Link>
    </div>
  );
};

export default NotFound;
