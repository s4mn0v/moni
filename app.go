package main

import (
	"context"
	"fmt"

	"github.com/wailsapp/wails/v2/pkg/runtime"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

// Método expuesto (must be exported)
func (a *App) GetMessage() string {
    return "Hola desde Go (Wails)!"
}

// Emite un evento al frontend
func (a *App) SendText() {
    // Asegúrate que a.ctx no sea nil (Startup lo inicializa)
    if a.ctx != nil {
        runtime.EventsEmit(a.ctx, "text_event", "Mensaje enviado desde Go")
    }
}