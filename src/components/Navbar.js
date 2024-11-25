import React from 'react';

const Navigation = ({ account }) => {
  return (
    <nav
    style={{
      width: "100%",
      position: "fixed",
      top: 0,
      left: 0,
      background: "linear-gradient(135deg, #1a1a2e, #0f0c29)", // Asegúrate de que tenga un color de fondo
      zIndex: 1000, // Para asegurar que esté por encima del contenido
      padding: "10px 20px", // Ajusta el padding como necesites
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxSizing: "border-box",
    }}
    >
      {/* Logo */}
      <div
        style={{
          fontSize: "1.8rem",
          fontWeight: "bold",
          color: "#00d2ff", // Cambié el color del logo para hacerlo consistente con el footer
          animation: "glow 2s infinite",
        }}
      >
        <span style={{ color: "#ffffff" }}>D</span>App
      </div>

      {/* Wallet Address */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "rgba(15, 15, 45, 0.9)", // Mismo color de fondo del footer
          padding: "0.5rem 1rem",
          borderRadius: "20px",
          boxShadow: "0 0 10px rgba(13, 242, 201, 0.5)",
          fontSize: "1rem",
          color: "#fff",
        }}
      >
        <span style={{ marginRight: "1rem", color: "#00d2ff" }}>Wallet:</span> {/* Cambié el color para hacerlo coherente */}
        {account
          ? `${account.slice(0, 10)}...${account.slice(32, 42)}`
          : "Connect Wallet"}
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes glow {
            0% { text-shadow: 0 0 5px #00d2ff, 0 0 10px #00d2ff; }
            50% { text-shadow: 0 0 20px #00d2ff, 0 0 30px #00d2ff; }
            100% { text-shadow: 0 0 5px #00d2ff, 0 0 10px #00d2ff; }
          }

          @media (max-width: 768px) {
            nav {
              flex-direction: column;
              padding: 1rem;
              text-align: center;
            }

            .wallet {
              margin-top: 1rem;
            }

            .logo {
              font-size: 1.5rem;
            }

            .wallet {
              font-size: 0.9rem;
            }
          }
        `}
      </style>
    </nav>
  );
};

export default Navigation;
