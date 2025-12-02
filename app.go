package main

import (
    "context"
    "encoding/json"
    "fmt"

    "github.com/wailsapp/wails/v2/pkg/runtime"

    "bitget/internal/model"
    "bitget/pkg/client/ws"
)

type App struct {
    ctx context.Context
    ws  *ws.BitgetWsClient
}

func NewApp() *App {
    return &App{}
}

func (a *App) Startup(ctx context.Context) {
    a.ctx = ctx
}

// HANDLER: recibe mensajes del WS y los envía al frontend
func (a *App) OnWsMessage(msg string) {
    var data map[string]interface{}
    _ = json.Unmarshal([]byte(msg), &data)

    // Emitimos el evento al frontend
    runtime.EventsEmit(a.ctx, "ticker_btc", data)
}

// HANDLER: errores del WS
func (a *App) OnWsError(msg string) {
    runtime.EventsEmit(a.ctx, "ticker_btc_error", msg)
}

// Start WS
func (a *App) StartBTCPriceWS() {
    if a.ws != nil {
        fmt.Println("WS ya está conectado")
        return
    }

    a.ws = new(ws.BitgetWsClient).Init(false, a.OnWsMessage, a.OnWsError)

    a.ws.SubscribeDef([]model.SubscribeReq{
        {
            InstType: "USDT-FUTURES",
            Channel:  "ticker",
            InstId:   "BTCUSDT",
        },
    })
}

// Stop WS
func (a *App) StopBTCPriceWS() {
    if a.ws == nil {
        return
    }

    a.ws.Close()
    a.ws = nil
}
