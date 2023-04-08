const { app, BrowserWindow } = require("electron");
const path = require("path");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    });

    if (process.env.NODE_ENV === "development") {
        win.loadURL("http://localhost:3000");
        win.webContents.openDevTools();
    } else {
        win.loadFile(path.join(__dirname, "../../build/index.html"));
    }
};

app.whenReady().then(() => {
    createWindow();
});