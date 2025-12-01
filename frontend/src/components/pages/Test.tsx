import { useEffect, useState } from "react";
import { GetMessage, SendText } from '../../../wailsjs/go/main/App';
import { EventsOn } from '../../../wailsjs/runtime';

export default function Test() {
  const [msg, setMsg] = useState("");
  const [eventMsg, setEventMsg] = useState("");

  useEffect(() => {
    // Llamada directa a Go
    GetMessage().then((res) => setMsg(res));

    // Escuchar evento emitido por Go
    const off = EventsOn("text_event", (payload: any) => {
      setEventMsg(payload);
    });

    return () => {
      // desuscribir
      off();
    };
  }, []);

  return (
    <div>
      <h3>Direct call: {msg}</h3>
      <h3>Event: {eventMsg}</h3>
      <button onClick={() => SendText()}>Enviar evento desde Go</button>
    </div>
  );
}
