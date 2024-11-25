# Futuristic Staking Platform

A decentralized application (DApp) that allows users to connect their wallet, stake `ROB` tokens, and earn rewards in `CAT` tokens. Built with **React**, **Truffle**, and **Ganache** for a complete blockchain experience.

---

## 🚀 Features
- **Stake Tokens:** Deposit `ROB` tokens and start earning rewards.
- **Real-Time Rewards:** Receive `CAT` tokens as rewards based on your staking amount.
- **User-Friendly Interface:** Quick connection with Metamask, balance visualization, and staking status.

---

## 🛠️ Requirements
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Ganache](https://trufflesuite.com/ganache/)
- [Truffle](https://trufflesuite.com/)
- [MetaMask](https://metamask.io/)

---

## 📥 Installation

1. **Clone the repository** and navigate to the project folder:
   ```bash
   git clone https://github.com/RobertFRCoding/Future-Staking-Dapp.git
   cd Future-Staking-Dapp
   ```

2. **Install the necessary dependencies**:
   ```bash
   npm install
   ```

3. **Compile and migrate the contracts**:
   ```bash
   truffle compile
   truffle migrate --network development
   ```

4. **Start Ganache** and configure the network on MetaMask (use the keys provided by Ganache).

5. **Run the React application**:
   ```bash
   npm start
   ```

---

## 💡 How to Use the Platform

1. **Connect your wallet**:
   - Open the app in your browser.
   - Use Metamask to connect your wallet.

2. **Stake Tokens**:
   - Enter the amount of `ROB` tokens you want to stake.
   - Click on the *Stake* button.

3. **Unstake Tokens**:
   - Click *Unstake* to release your `ROB` tokens.

4. **Generate Rewards**:
   - Run the script to distribute `CAT` tokens as rewards:
     ```bash
     truffle exec scripts/issue-token.js
     ```
   - This script will automatically assign `CAT` tokens in proportion to the amount of `ROB` tokens staked.

---

## 🔧 Available Scripts
- **Migrate contracts**:  
   ```bash
   truffle migrate --network development
   ```
- **Distribute rewards**:  
   ```bash
   truffle exec scripts/issue-token.js
   ```

---

## 🖥️ Technologies Used
- **Solidity**: Smart contracts.
- **Truffle**: Blockchain development framework.
- **Ganache**: Local blockchain for testing.
- **React.js**: User interface.
- **Web3.js**: Interaction with the blockchain.

---

## 🤝 Contributing
Contributions are welcome! Please:
1. Fork the repository.
2. Create a new branch:  
   ```bash
   git checkout -b feature/new-feature
   ```
3. Submit a *pull request* with your improvements.

---

## 📜 License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

---

## 📬 Contact
If you'd like to contact me for any DApp development, feel free to reach out at:
- **Email:** robertfuentes26@gmail.com

---

**Thanks for exploring the Futuristic Staking Platform!** If you have any questions or suggestions, feel free to open an *issue*.
