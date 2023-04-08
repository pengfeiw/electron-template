const { app, BrowserWindow } = require("electron");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    });

    if (process.env.NODE_ENV === "development") {
        win.loadURL("http://localhost:8000");
        win.webContents.openDevTools();
    } else {
        win.loadFile("./build/index.html");
    }
};

app.whenReady().then(() => {
    createWindow();
});