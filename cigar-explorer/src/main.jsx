import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<React.StrictMode><App /></React.StrictMode>);

const gate = document.getElementById("ageGate");
const enter = document.getElementById("ageEnter");

if (gate && enter) {
  let allowed = false;
  try { allowed = localStorage.getItem("empireAgeVerified") === "true"; } catch (_) {}
  root.inert = !allowed;
  gate.classList.toggle("open", !allowed);
  gate.setAttribute("aria-hidden", String(allowed));
  if (!allowed) enter.focus();
  enter.addEventListener("click", () => {
    try { localStorage.setItem("empireAgeVerified", "true"); } catch (_) {}
    gate.classList.remove("open");
    gate.setAttribute("aria-hidden", "true");
    root.inert = false;
    root.querySelector(".home-link")?.focus();
  });
  gate.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") return;
    const exit = gate.querySelector("a");
    if (event.shiftKey && document.activeElement === enter) {
      event.preventDefault(); exit?.focus();
    } else if (!event.shiftKey && document.activeElement === exit) {
      event.preventDefault(); enter.focus();
    }
  });
}
