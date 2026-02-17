import React from "react";

function HomePage() {
  return (
    <div
      style={{
        backgroundColor: "#0f172a",
        minHeight: "100vh",
        color: "white",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
        Java Selenium Automation Demo
      </h1>

      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        Built by Kevin Tan
      </p>

      <div
        style={{
          backgroundColor: "#1e293b",
          padding: "30px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <h2>Project Overview</h2>
        <p>
          This project demonstrates an end-to-end Selenium automation framework
          using Java, TestNG and Extent Reports.
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#1e293b",
          padding: "30px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <h2>Tech Stack</h2>
        <ul>
          <li>Java</li>
          <li>Selenium WebDriver</li>
          <li>TestNG</li>
          <li>Extent Reports</li>
          <li>Maven</li>
        </ul>
      </div>

      <div
        style={{
          backgroundColor: "#1e293b",
          padding: "30px",
          borderRadius: "10px",
        }}
      >
        <h2>Automation Coverage</h2>
        <p>✔ Login Test ✔ Add to Cart Test ✔ Checkout Flow ✔ API Validation</p>
      </div>
    </div>
  );
}

export default HomePage;
