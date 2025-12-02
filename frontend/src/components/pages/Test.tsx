import { useEffect, useRef, useState } from "react";
import { StartBTCPriceWS, StopBTCPriceWS } from "../../../wailsjs/go/main/App";
import { EventsOn, EventsOff } from "../../../wailsjs/runtime/runtime";

const THROTTLE_MS = 100;

export default function Test() {
  const [price, setPrice] = useState<string>("---");
  const [connected, setConnected] = useState<boolean>(false);

  // último timestamp de actualización al state
  const lastUpdateRef = useRef<number>(0);
  // último valor recibido (sin provocar render)
  const lastReceivedRef = useRef<string | null>(null);
  // timer fallback (por si quieres asegurar actualizaciones periódicas)
  const flushTimerRef = useRef<number | null>(null);

  useEffect(() => {
    // Listener: recibe eventos inmediatamente y guarda el valor en lastReceivedRef
    const handler = (data: any) => {
      // normaliza y extrae el precio (ajusta según tu payload)
      const p =
        data?.data?.[0]?.lastPr ??
        data?.data?.lastPr ??
        data?.data?.[0]?.last ??
        data?.data?.last ??
        data?.lastPr ??
        data?.last ??
        null;

      if (!p && p !== 0) return;

      lastReceivedRef.current = String(p);

      const now = Date.now();
      const lastUpdate = lastUpdateRef.current;

      // Si ya pasó THROTTLE_MS desde la última actualización, aplicamos inmediatamente
      if (now - lastUpdate >= THROTTLE_MS) {
        lastUpdateRef.current = now;
        setPrice(String(p));
        // opcional: cancelar timer si había uno
        if (flushTimerRef.current) {
          window.clearTimeout(flushTimerRef.current);
          flushTimerRef.current = null;
        }
      } else {
        // Si no tocamos state ahora, programamos un flush para cuando termine el intervalo
        if (!flushTimerRef.current) {
          const wait = THROTTLE_MS - (now - lastUpdate);
          flushTimerRef.current = window.setTimeout(() => {
            flushTimerRef.current = null;
            const val = lastReceivedRef.current;
            if (val !== null) {
              lastUpdateRef.current = Date.now();
              setPrice(val);
            }
          }, wait);
        }
      }
    };

    // Registrar y devolver desregistrar
    EventsOn("ticker_btc", handler);

    return () => {
      EventsOff("ticker_btc");
      if (flushTimerRef.current) {
        window.clearTimeout(flushTimerRef.current);
        flushTimerRef.current = null;
      }
    };
  }, []); // dependencias vacías para montar una vez

  const handleConnect = async () => {
    await StartBTCPriceWS();
    setConnected(true);
  };

  const handleDisconnect = async () => {
    await StopBTCPriceWS();
    setConnected(false);
    setPrice("---");
    lastReceivedRef.current = null;
    lastUpdateRef.current = 0;
  };

  return (
    <div className="p-6 bg-gray-900 text-white rounded-xl shadow-lg max-w-sm mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">BTC Real-Time Price</h1>

      <div className="text-center text-5xl font-mono mb-6">
        {price}
      </div>

      {!connected ? (
        <button onClick={handleConnect} className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg font-semibold">
          Conectar
        </button>
      ) : (
        <button onClick={handleDisconnect} className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold">
          Desconectar
        </button>
      )}
    </div>
  );
}
