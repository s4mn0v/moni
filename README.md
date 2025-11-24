# README

## About

This is the official Wails Vue template.

You can configure the project by editing `wails.json`. More information about the project settings can be found
here: https://wails.io/docs/reference/project-config

## Live Development

To run in live development mode, run `wails dev` in the project directory. This will run a Vite development
server that will provide very fast hot reload of your frontend changes. If you want to develop in a browser
and have access to your Go methods, there is also a dev server that runs on http://localhost:34115. Connect
to this in your browser, and you can call your Go code from devtools.

## Building

To build a redistributable, production mode package, use `wails build`.

## Ignoring files for builds

When building your Wails application, you may want to exclude certain files or directories from being


find .   -path ./node_modules -prune -o   -path ./wails -prune -o -path ./wailsjs -prune -o  -path ./.dist -prune -o   -path ./public -prune -o -path ./.gitignore -prune -o -path ./package.json -prune -o -path ./package.json.md5 -prune -o -path ./pnpm-lock.yaml -prune -o -type f -print