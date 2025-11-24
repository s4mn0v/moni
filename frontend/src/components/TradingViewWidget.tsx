import { useEffect, useRef } from "react"

export default function TradingViewWidget() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    containerRef.current!.innerHTML = ""

    const script = document.createElement("script")
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js"
    script.type = "text/javascript"
    script.async = true

    script.innerHTML = JSON.stringify({
      allow_symbol_change: false,
      calendar: false,
      details: false,
      hide_side_toolbar: false,
      hide_top_toolbar: false,
      hide_legend: false,
      hide_volume: false,
      hotlist: false,
      interval: "D",
      locale: "en",
      save_image: false,
      style: "1",
      symbol: "BITGET:BTCUSDT.P",
      theme: "dark",
      timezone: "America/Bogota",
      backgroundColor: "#0F0F0F",
      gridColor: "rgba(242, 242, 242, 0.06)",
      watchlist: [],
      withdateranges: true,
      compareSymbols: [],
      studies: ["STD;Bollinger_Bands", "STD;DEMA"],
      "width": 980,
      "height": 610
    })

    containerRef.current?.appendChild(script)
  }, [])

  return (
    <div
      className="tradingview-widget-container"
      style={{ height: "100%", width: "100%" }}
    >
      <div
        ref={containerRef}
        className="tradingview-widget-container__widget"
        style={{ height: "calc(100% - 32px)", width: "100%" }}
      />
    </div>
  )
}
