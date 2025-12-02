import { useEffect, useState, useRef } from "react";
import { EventsOn, EventsOff } from "../../../wailsjs/runtime/runtime";

export default function Test() {
  const [price, setPrice] = useState<string>("Conectando...");

  const lastPriceRef = useRef<string | null>(null);
  const throttleRef = useRef<boolean>(false);

  useEffect(() => {
    EventsOn("ticker_btc", (data: any) => {
      const last =
        data?.data?.[0]?.lastPr ??
        data?.data?.[0]?.last ??
        data?.last ??
        null;

      if (!last) return;

      lastPriceRef.current = last.toString();

      if (!throttleRef.current) {
        throttleRef.current = true;

        setTimeout(() => {
          if (lastPriceRef.current) {
            setPrice(lastPriceRef.current);
          }
          throttleRef.current = false;
        }, 200);
      }
    });

    EventsOn("ticker_btc_error", (err) => {
      console.error("WS Error:", err);
    });

    return () => {
      EventsOff("ticker_btc");
      EventsOff("ticker_btc_error");
    };
  }, []);

  return (
    <div className="p-6 bg-gray-900 text-white rounded-xl shadow-lg max-w-sm mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">BTC Real-Time Price</h1>

      <div className="text-center text-5xl font-mono mb-6">
        {price}
      </div>
    </div>
  );
}
