# Plataforma de Staking Futurista

Una DApp que permite a los usuarios conectar su billetera, stakear tokens `ROB` y ganar recompensas en `CAT`. Construida con **React**, **Truffle** y **Ganache** para una experiencia completa en la blockchain.

---

## 🚀 Funcionalidades
- **Stakear Tokens:** Deposita tokens `ROB` y comienza a ganar recompensas.
- **Recompensas en Tiempo Real:** Recibe tokens `CAT` como recompensa proporcional al staking realizado.
- **Interfaz Intuitiva:** Conexión rápida con Metamask, visualización de balances y estado del staking.

---

## 🛠️ Requisitos
Asegúrate de tener instalados:
- [Node.js](https://nodejs.org/)
- [Ganache](https://trufflesuite.com/ganache/)
- [Truffle](https://trufflesuite.com/)
- [MetaMask](https://metamask.io/)

---

## 📥 Instalación

1. **Clona el repositorio** y accede al directorio:
   ```bash
   git clone https://github.com/RobertFRCoding/Future-Staking-Dapp.git
   cd Future-Staking-Dapp
   ```

2. **Instala las dependencias necesarias**:
   ```bash
   npm install
   ```

3. **Compila y migra los contratos**:
   ```bash
   truffle compile
   truffle migrate --network development
   ```

4. **Inicia Ganache** y configura la red en MetaMask (usa las claves proporcionadas por Ganache).

5. **Ejecuta la aplicación React**:
   ```bash
   npm start
   ```

---

## 💡 Uso de la Plataforma

1. **Conecta tu billetera**:
   - Abre la aplicación en el navegador.
   - Usa Metamask para conectar tu billetera.

2. **Stakear Tokens**:
   - Ingresa la cantidad de tokens `ROB` que deseas stakear.
   - Haz clic en el botón *Stake*.

3. **Retirar Tokens**:
   - Haz clic en *Unstake* para liberar tus tokens `ROB`.

4. **Generar Recompensas**:
   - Ejecuta el script para distribuir tokens `CAT` como recompensas:
     ```bash
     truffle exec scripts/issue-token.js
     ```
   - Este script asignará automáticamente tokens `CAT` en proporción al staking realizado.

---

## 🔧 Scripts Disponibles
- **Migración de contratos**:  
   ```bash
   truffle migrate --network development
   ```
- **Distribuir recompensas**:  
   ```bash
   truffle exec scripts/issue-token.js
   ```

---

## 🖥️ Tecnologías Utilizadas
- **Solidity**: Contratos inteligentes.
- **Truffle**: Framework de desarrollo blockchain.
- **Ganache**: Blockchain local para pruebas.
- **React.js**: Interfaz de usuario.
- **Web3.js**: Interacción con la blockchain.

---

## 🤝 Contribución
¡Contribuciones son bienvenidas! Por favor:
1. Haz un fork del repositorio.
2. Crea una rama nueva:  
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Envía un *pull request* con tus mejoras.

---

## 📜 Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para más detalles.

---

**¡Gracias por explorar la Plataforma de Staking Futurista!** Si tienes preguntas o sugerencias, no dudes en abrir un *issue*.
