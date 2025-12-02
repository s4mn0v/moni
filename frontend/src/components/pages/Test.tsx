import { useEffect, useState } from "react";
import { StartBTCPriceWS, StopBTCPriceWS } from "../../../wailsjs/go/main/App";
import { EventsOn, EventsOff } from "../../../wailsjs/runtime/runtime";

export default function Test() {
  const [price, setPrice] = useState<string>("---");
  const [connected, setConnected] = useState<boolean>(false);

  useEffect(() => {
    // Registramos el listener del evento emitido por el backend
    EventsOn("ticker_btc", (data: any) => {
      console.log("EVENT DATA:", data);

      const p =
        data?.data?.[0]?.lastPr ??
        data?.data?.lastPr ??
        data?.data?.[0]?.last ??
        data?.data?.last ??
        data?.lastPr ??
        data?.last ??
        null;

      if (p) setPrice(p.toString());
    });

    return () => {
      EventsOff("ticker_btc");
    };
  }, []);

  const handleConnect = async () => {
    await StartBTCPriceWS();
    setConnected(true);
  };

  const handleDisconnect = async () => {
    await StopBTCPriceWS();
    setConnected(false);
    setPrice("---");
  };

  return (
    <div className="p-6 bg-gray-900 text-white rounded-xl shadow-lg max-w-sm mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">BTC Real-Time Price</h1>

      <div className="text-center text-5xl font-mono mb-6">
        {price}
      </div>

      {!connected ? (
        <button
          onClick={handleConnect}
          className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg font-semibold"
        >
          Conectar
        </button>
      ) : (
        <button
          onClick={handleDisconnect}
          className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold"
        >
          Desconectar
        </button>
      )}
    </div>
  );
}
