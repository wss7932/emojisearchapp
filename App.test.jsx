import React from "react";
import ReactDom from "react-dom";
import App from "./App";


it("render without crashing", () =>{
    const div = document.createElement("div");
    ReactDom.render(<app />, div);

});