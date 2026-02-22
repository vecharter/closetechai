import { h, render } from "preact";
import Routes from "./Routes.jsx";
import "./style.css";

const root = document.getElementById("app");
render(h(Routes, null), root);
