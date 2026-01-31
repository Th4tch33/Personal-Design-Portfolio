import React from "react";

export default function FlareCard({ src, alt }) {
  return (
    <div className="flare-section-card">
      <img src={src} alt={alt}/>
    </div>
  );
}
