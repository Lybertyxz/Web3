const WalletInfo: React.FC<{ balance: number; address: string }> = ({
  balance,
  address,
}) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(address).then(
      () => alert("Wallet address copied to clipboard!"),
      (err) => console.error("Error copying text: ", err)
    );
  };

  return (
    <div className="absolute bottom-4 right-4 m-2 flex items-center justify-between rounded-md bg-white p-2  text-black">
      <span>Balance: ${balance.toFixed(2)}</span>
      <div className="flex items-center gap-2">
        <span>
          {address.slice(0, 6)}
          {address.slice(-4)}
        </span>
        <button
          onClick={copyToClipboard}
          className="rounded bg-blue-500 px-2 py-1 font-bold text-white hover:bg-blue-700"
        >
          Copy Adress
        </button>
      </div>
    </div>
  );
};

export default WalletInfo;
