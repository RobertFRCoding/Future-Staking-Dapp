# Plataforma de Staking Futurista

Una DApp de staking que permite a los usuarios conectar su billetera, stakear tokens `ROB` y ganar recompensas en `CAT`. Construida con React, Truffle y Ganache.

---

## Funcionalidades
- **Stakear Tokens:** Deposita tus tokens `ROB` para ganar recompensas.
- **Retirar Recompensas:** Recibe tokens `CAT` como recompensa por tu staking.
- **Interfaz Interactiva:** Fácil conexión y visualización de balances.

---

## Requisitos
- Node.js
- Ganache
- Truffle
- Metamask

---

## Instalación

1. Clona el repositorio y accede al proyecto:
   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   cd tu-repo
Instala las dependencias necesarias:

bash
Copiar código
npm install
Compila y migra los contratos:

bash
Copiar código
truffle compile
truffle migrate --network development
Inicia Ganache y configura la red local en Metamask.

Inicia la aplicación React:

bash
Copiar código
npm start
Uso de la Plataforma
Conexión: Abre la aplicación y conecta tu billetera desde Metamask.

Stakear Tokens: Ingresa la cantidad de tokens ROB que deseas stakear y haz clic en Stake.

Retirar Tokens: Si deseas liberar tus tokens, haz clic en Unstake.

Generar Recompensas
Cuando los usuarios tienen tokens en staking, puedes distribuir las recompensas en tokens CAT. Para hacerlo, ejecuta el siguiente comando en la terminal:

bash
Copiar código
truffle exec scripts/issue-token.js
Este script asignará automáticamente la misma cantidad de tokens CAT que los tokens ROB stakeados.

