import React from "react";

export default function FlareCard({ src, alt }) {
  console.log("Rendering FlareCard with src:", src);
  return (
    <div className="flare-section-card">
      <img src={src} alt={alt}/>
    </div>
  );
}
