const { app, BrowserWindow } = require('electron');

/**
 * Function used to create an Eelctron.js window.
 *
 * @see https://medium.com/folkdevelopers/the-ultimate-guide-to-electron-with-react-8df8d73f4c97
 */
function createWindow() {
  const win = new BrowserWindow({
    width: '100%',
    height: '100%',
    webPreferences: {
      nodeIntegration: true,
    },
    title: 'smart_mirror_v2',
    frame: false,
    show: false,
  });
  win.removeMenu();
  win.setMenu(null);
  win.maximize();
  win.show();
  win.loadURL('http://localhost:3000');
}

// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here
