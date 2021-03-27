import React from "react";
import ReactDOM from "react-dom";

const blockImg = React.createElement(
    "img", 
    {
        src: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fprogressive.ua%2Fwp-content%2Fuploads%2F2016%2F07%2F109.png&imgrefurl=https%3A%2F%2Fprogressive.ua%2Fwebsite_development%2F&tbnid=uCkDlA5tPHqIqM&vet=12ahUKEwjq2aiPgdDvAhUPwioKHVk3B0wQMygNegUIARDNAQ..i&docid=BFL1x3GKnW4ccM&w=396&h=263&q=%D1%81%D0%B0%D0%B9%D1%82&ved=2ahUKEwjq2aiPgdDvAhUPwioKHVk3B0wQMygNegUIARDNAQ",
        alt: "sorry, img is loading"
    })

const blockH1 = React.createElement(
    "h1",{},"text",
)
const blockDiv = React.createElement(
    "div",
    {
        children: [blockImg, blockH1],
    }
);

ReactDOM.render(blockDiv, document.getElementById("root"));