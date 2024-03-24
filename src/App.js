import logo from './logo.svg';
import './App.css';
import detectEthereumProvider from "@metamask/detect-provider";
import { ethers } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.7.0/ethers.min.js";
import Web3 from "web3";

function App() {
  const walletAddress = "";
  const setWalletAddress = "";
  const buyAmount = "";
  const sellAmount = "";
  let carbonCoinAmount ="";
  let web3 = "";

  async function requestAccount(){
    console.log('Requesting account');

    if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setWalletAddress(accounts[0]);
      web3 = initWeb3();
    } catch (error) {
      console.log('Error connecting..')
    }

  } else {
    console.log("For the moment the use of MetaMask is required. Please, download it to your browser.");
    //exibir modal
  }
  }
  
const handleBuyAmount = () => {
    console.log('O valor final é: ', buyAmount);
};

const handleSellAmount = () => {
  console.log('O valor final é: ', sellAmount);
};

const initWeb3 = async () => {
  let web3 = null;
  const metamaskProvider = await detectEthereumProvider();

  if (metamaskProvider) {
    web3 = new Web3(metamaskProvider);

    metamaskProvider.on("chainChanged", reloadPage);
    metamaskProvider.on("accountsChanged", reloadPage);   //login - redirect to home
    metamaskProvider.on("disconnect", reloadPage);        //logout - redirect to login

    const reloadPage = () => {
      window.location.reload();
    };
  } else {
    console.log("For the moment the use of MetaMask is required. Please, download it to your browser.");
    //exibir modal
  }
  return web3;
};

  return (
    <div className="App"> 
      <header className="App-header">
          <button onClick={requestAccount}>Conectar carteira</button>
        <h3>Endereço da carteira : {walletAddress}</h3>
      </header>

      <div className="page-center">
        {web3 !== null && (
          <>
            <h1 className="no-margin-top">Your CarbonCoin amount is:</h1>
            <p className="no-margin">{carbonCoinAmount}</p>
          </>
        )}
      </div>

      {web3 !== null && (
        <>
          <form onSubmit={handleBuyAmount}>
            <h1>How much CarbonCoins do you want to buy?</h1>
            <div>
              <label>CAC:</label>{" "}
              <input value={buyAmount} />{" "}
              <button className="btn primaryBtn" type="submit">
                Enter
              </button>
            </div>
          </form>
        </>
      )}

      {web3 !== null && (
        <>
          <form onSubmit={handleSellAmount}>
            <h1>How much CarbonCoins do you want to sell?</h1>
            <div>
              <label>CAC:</label>{" "}
          <   input value={sellAmount}/>{" "}
              <button className="btn primaryBtn" type="submit">
                Enter
              </button>
            </div>
          </form></>
      )}      
    </div>
  );
}

export default App;