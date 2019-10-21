import React, { Component } from "react";

export default function getData(url) {
    return fetch(url).then(response => response.json());
}
