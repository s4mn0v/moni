package main

import (
	"context"
	"encoding/json"
	"fmt"

	"github.com/wailsapp/wails/v2/pkg/runtime"

	"bitget/internal/model"
	"bitget/logging/applogger"
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

	// Arranca automáticamente
	go func() {
		err := a.StartBTCPriceWS()
		if err != nil {
			applogger.Error("Failed to auto-start WS: %v", err)
		}
	}()
}

func (a *App) OnWsMessage(msg string) {
	var data map[string]interface{}
	_ = json.Unmarshal([]byte(msg), &data)

	runtime.EventsEmit(a.ctx, "ticker_btc", data)
}

func (a *App) OnWsError(msg string) {
	runtime.EventsEmit(a.ctx, "ticker_btc_error", msg)
}

func (a *App) StartBTCPriceWS() error {
	if a.ws != nil {
		fmt.Println("WS ya está conectado")
		return nil
	}

	a.ws = new(ws.BitgetWsClient).Init(false, a.OnWsMessage, a.OnWsError)

	a.ws.SubscribeDef([]model.SubscribeReq{
		{
			InstType: "USDT-FUTURES",
			Channel:  "ticker",
			InstId:   "BTCUSDT",
		},
	})

	return nil
}
