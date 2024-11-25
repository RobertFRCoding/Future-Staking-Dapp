
import React, { Component } from "react";
import Rob from "../Rob.png";
import "./styles/Main.css";

class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="lateral-animation-left"></div>
        <div className="lateral-animation-right"></div>

        <div className="main-title">
          <h1>Plataforma de Staking Futurista</h1>
          <p>Conecta, Stakea y Gana con Estilo.</p>
        </div>

        <div className="content">
          <div className="grid">
            <div className="card">
              <h5>Balance de Staking</h5>
              <p>{window.web3.utils.fromWei(this.props.stakingBalance, "Ether")} ROB</p>
            </div>

            <div className="card">
              <h5>Balance de Recompensas</h5>
              <p>{window.web3.utils.fromWei(this.props.catTokenBalance, "Ether")} CAT</p>
            </div>
          </div>

          <div className="stake-form">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                let amount;
                amount = this.input.value.toString();
                amount = window.web3.utils.toWei(amount, "Ether");
                this.props.stakeToken(amount);
              }}
            >
              <div className="form-group">
                <label>Stake Tokens</label>
                <span>Balance: {window.web3.utils.fromWei(this.props.robTokenBalance, "Ether")} ROB</span>
              </div>

              <div className="input-group">
                <input
                  type="text"
                  ref={(input) => {
                    this.input = input;
                  }}
                  className="form-control"
                  placeholder="0"
                  required
                />

                <div className="token-display">
                  <img src={Rob} height="32" alt="" />
                  <span>ROB</span>
                </div>
              </div>

              <button type="submit" className="button">Stake!</button>
              <button onClick={() => this.props.unstakeToken()} className="button-unstake">Unstake</button>
            </form>
          </div>
        </div>

        <div className="decorative"></div>
      </div>
    );
  }
}

export default Main;
