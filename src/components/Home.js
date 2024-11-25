import React, { Component } from 'react';
import Web3 from 'web3';
import RobToken from '../abis/RobToken.json';
import CatToken from '../abis/CatToken.json';
import TokenFarm from '../abis/TokenFarm.json';
import Navigation from './Navbar';
import Main from './Main';

class App extends Component {
  state = {
    account: '0x0',
    loading: true,
    robToken: {},
    robTokenBalance: '0',
    catToken: {},
    catTokenBalance: '0',
    tokenFarm: {},
    stakingBalance: '0',
  };

  async componentDidMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      this.setState({ account: accounts[0] });
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert('¡Deberías considerar usar Metamask!');
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });

    const networkId = await web3.eth.net.getId();
    console.log('networkid:', networkId);

    // Cargar RobToken
    const robTokenData = RobToken.networks[networkId];
    if (robTokenData) {
      const robToken = new web3.eth.Contract(RobToken.abi, robTokenData.address);
      this.setState({ robToken });
      const robTokenBalance = await robToken.methods.balanceOf(this.state.account).call();
      this.setState({ robTokenBalance: robTokenBalance.toString() });
    } else {
      window.alert('¡RobToken no se encuentra en la red!');
    }

    // Cargar CatToken
    const catTokenData = CatToken.networks[networkId];
    if (catTokenData) {
      const catToken = new web3.eth.Contract(CatToken.abi, catTokenData.address);
      this.setState({ catToken });
      const catTokenBalance = await catToken.methods.balanceOf(this.state.account).call();
      this.setState({ catTokenBalance: catTokenBalance.toString() });
    } else {
      window.alert('CatToken no se encuentra en la red!');
    }

    // Cargar TokenFarm
    const tokenFarmData = TokenFarm.networks[networkId];
    if (tokenFarmData) {
      const tokenFarm = new web3.eth.Contract(TokenFarm.abi, tokenFarmData.address);
      this.setState({ tokenFarm });
      const stakingBalance = await tokenFarm.methods.stakingBalance(this.state.account).call();
      this.setState({ stakingBalance: stakingBalance.toString() });
    } else {
      window.alert('TokenFarm no se encuentra en la red!');
    }

    this.setState({ loading: false });
  }

  stakeToken = async (amount) => {
    this.setState({ loading: true });
    try {
      await this.state.robToken.methods
        .approve(this.state.tokenFarm._address, amount)
        .send({ from: this.state.account });
      await this.state.tokenFarm.methods.stakeToken(amount).send({ from: this.state.account });
      this.setState({ loading: false });
    } catch (error) {
      console.error('Error en stakeToken', error);
      this.setState({ loading: false });
    }
  };

  unstakeToken = async () => {
    this.setState({ loading: true });
    try {
      await this.state.tokenFarm.methods.unstakeToken().send({ from: this.state.account });
      this.setState({ loading: false });
    } catch (error) {
      console.error('Error en unstakeToken', error);
      this.setState({ loading: false });
    }
  };

  render() {
    let content;
    if (this.state.loading) {
      content = <p id="loader" className="text-center">Loading...</p>;
    } else {
      content = (
        <Main
          robTokenBalance={this.state.robTokenBalance}
          catTokenBalance={this.state.catTokenBalance}
          stakingBalance={this.state.stakingBalance}
          stakeToken={this.stakeToken}
          unstakeToken={this.unstakeToken}
        />
      );
    }

    return (
      <div>
        <Navigation account={this.state.account} />
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">{content}</div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
