import "/.config.js";

const getTokenBalance = async () => {
    try {
      const address = await web3.eth.getAccounts();
      const balance = await tokenContract.methods.balanceOf(address).call();
      return balance;
    } catch (error) {
      return null;
    }
  };

  const getNFTBalance = async () => {};

  getTokenBalance().then(balance => {
    //if null return error message, else return value
  });

  const purchaseTokens = async () => {
    const contractAddress = '0xa3361c78C373cDb514717f736DAC5d0A2De00944'
    const TokenAbi = [
      {
          "constant": true,
          "inputs": [],
          "name": "name",
          "outputs": [
              {
                  "name": "",
                  "type": "string"
              }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
      },
      {
          "constant": false,
          "inputs": [
              {
                  "name": "_spender",
                  "type": "address"
              },
              {
                  "name": "_value",
                  "type": "uint256"
              }
          ],
          "name": "approve",
          "outputs": [
              {
                  "name": "",
                  "type": "bool"
              }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "constant": true,
          "inputs": [],
          "name": "totalSupply",
          "outputs": [
              {
                  "name": "",
                  "type": "uint256"
              }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
      },
      {
          "constant": false,
          "inputs": [
              {
                  "name": "_from",
                  "type": "address"
              },
              {
                  "name": "_to",
                  "type": "address"
              },
              {
                  "name": "_value",
                  "type": "uint256"
              }
          ],
          "name": "transferFrom",
          "outputs": [
              {
                  "name": "",
                  "type": "bool"
              }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "constant": true,
          "inputs": [],
          "name": "decimals",
          "outputs": [
              {
                  "name": "",
                  "type": "uint8"
              }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
      },
      {
          "constant": true,
          "inputs": [
              {
                  "name": "_owner",
                  "type": "address"
              }
          ],
          "name": "balanceOf",
          "outputs": [
              {
                  "name": "balance",
                  "type": "uint256"
              }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
      },
      {
          "constant": true,
          "inputs": [],
          "name": "symbol",
          "outputs": [
              {
                  "name": "",
                  "type": "string"
              }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
      },
      {
          "constant": false,
          "inputs": [
              {
                  "name": "_to",
                  "type": "address"
              },
              {
                  "name": "_value",
                  "type": "uint256"
              }
          ],
          "name": "transfer",
          "outputs": [
              {
                  "name": "",
                  "type": "bool"
              }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "constant": true,
          "inputs": [
              {
                  "name": "_owner",
                  "type": "address"
              },
              {
                  "name": "_spender",
                  "type": "address"
              }
          ],
          "name": "allowance",
          "outputs": [
              {
                  "name": "",
                  "type": "uint256"
              }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
      },
      {
          "payable": true,
          "stateMutability": "payable",
          "type": "fallback"
      },
      {
          "anonymous": false,
          "inputs": [
              {
                  "indexed": true,
                  "name": "owner",
                  "type": "address"
              },
              {
                  "indexed": true,
                  "name": "spender",
                  "type": "address"
              },
              {
                  "indexed": false,
                  "name": "value",
                  "type": "uint256"
              }
          ],
          "name": "Approval",
          "type": "event"
      },
      {
          "anonymous": false,
          "inputs": [
              {
                  "indexed": true,
                  "name": "from",
                  "type": "address"
              },
              {
                  "indexed": true,
                  "name": "to",
                  "type": "address"
              },
              {
                  "indexed": false,
                  "name": "value",
                  "type": "uint256"
              }
          ],
          "name": "Transfer",
          "type": "event"
      }
  ]
  
    const tokenContractInstance = web3.eth.Contract(TokenAbi);
    const approvedAddress = "0xa3361c78C373cDb514717f736DAC5d0A2De00944";
    const bigNumberValue = web3.utils.toBN("1000000000000000000");
    const myAddress = "0xC89d705104aFff28245e58C05AcfC82f91F2aEe9";
    await tokenContractInstance.methods.approve(approvedAddress, bigNumberValue).send({ from: myAddress })
        .then((receipt) => {
            console.log("Transaction successful. Receipt:", receipt);
        }).catch((error) => {
            console.error("Transaction failed:", error);
        });

    // Call purchase function on token contract
    //const tokenContractInstance = web3.eth.Contract(TokenAbi, tokenContractAddress);
    //await tokenContractInstance.methods.buyTokens().send({ from: accounts[0], value: web3.utils.toWei('1', 'ether') });
  };

  const sellTokens = async () => {
    const tokenContractInstance = new web3.eth.Contract(TokenAbi, tokenContractAddress);
    // Call sell function on token contract
    //await tokenContractInstance.methods.sellTokens(tokenAmount).send({ from: accounts[0] });
  };


