import React from "react";

import { useEffect } from "react";
import { gridCreation } from "../js/cursorAnim.js";


function CursorAnim() {

  useEffect(() => {
    gridCreation();
  })
  
  return (
    <>
      <div id="cursorGrid" />
    </>
  );
}

export default CursorAnim;