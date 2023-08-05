

import { ethers } from "ethers";

async function getAccountInfo(address: string): Promise<void> {
 try {
  // Initialize Ethereum provider
  const provider = new ethers.JsonRpcProvider(
   "https://eth-mainnet.g.alchemy.com/v2/YOUR_ALCHEMY_PRIVATE_KEY"
  );

  // Get balance
  const balance = await provider.getBalance(address);
  const balanceEth = ethers.formatEther(balance);

  // Get transaction count
  const transactionCount = await provider.getTransactionCount(address);

  console.log("Address:", address);
  console.log("Balance:", balanceEth, "ETH");
  console.log("Transaction Count:", transactionCount);
 } catch (error) {
  console.error("Error:", error);
 }
}

const address = "0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85";
const address1 = "0xf4bfaf916a68b0fC859D63a319034C0f72A88a5C";
const address2 = "0x3b138FC7eC06B2A44565994CfDe5134A75915995";

getAccountInfo(address);
getAccountInfo(address1);
getAccountInfo(address2);