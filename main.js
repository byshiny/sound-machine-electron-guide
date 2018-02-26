'use strict';

<<<<<<< HEAD
=======
var app = require('app');
var BrowserWindow = require('browser-window');
var globalShortcut = require('global-shortcut');
var configuration = require('./configuration');
var ipc = require('ipc');
>>>>>>> 04329d06e0336d4b222df9c335c3b87c3037cf01

var electron = require('electron');
var app = electron.app;
const {BrowserWindow, ipcMain, globalShortcut} = require('electron')
var configuration = require('./configuration');
var mainWindow = null;
<<<<<<< HEAD

=======
var settingsWindow = null;
>>>>>>> 04329d06e0336d4b222df9c335c3b87c3037cf01

app.on('ready', function() {
    if (!configuration.readSettings('shortcutKeys')) {
        configuration.saveSettings('shortcutKeys', ['ctrl', 'shift']);
    }

    mainWindow = new BrowserWindow({
        frame: false,
        height: 700,
        resizable: false,
        width: 368
    });


<<<<<<< HEAD
    mainWindow.loadURL('file://' + __dirname + '/app/index.html');

    setGlobalShortcuts();
});

ipcMain.on('close-main-window', function () {
=======
    setGlobalShortcuts();
});

function setGlobalShortcuts() {
    globalShortcut.unregisterAll();

    var shortcutKeysSetting = configuration.readSettings('shortcutKeys');
    var shortcutPrefix = shortcutKeysSetting.length === 0 ? '' : shortcutKeysSetting.join('+') + '+';

    globalShortcut.register(shortcutPrefix + '1', function () {
        mainWindow.webContents.send('global-shortcut', 0);
    });
    globalShortcut.register(shortcutPrefix + '2', function () {
        mainWindow.webContents.send('global-shortcut', 1);
    });
}
>>>>>>> 04329d06e0336d4b222df9c335c3b87c3037cf01

    app.quit();
});

<<<<<<< HEAD
var settingsWindow = null;

ipcMain.on('open-settings-window', function () {
=======
ipc.on('open-settings-window', function () {
>>>>>>> 04329d06e0336d4b222df9c335c3b87c3037cf01
    if (settingsWindow) {
        return;
    }

    settingsWindow = new BrowserWindow({
        frame: false,
        height: 200,
        resizable: false,
        width: 200
    });

    settingsWindow.loadURL('file://' + __dirname + '/app/settings.html');

    settingsWindow.on('closed', function () {
        settingsWindow = null;
    });
});

ipcMain.on('close-settings-window', function () {
  console.log("boink");
    if (settingsWindow) {
        settingsWindow.close();
    }
});

<<<<<<< HEAD
ipcMain.on('set-global-shortcuts', function () {

    setGlobalShortcuts();
});

function setGlobalShortcuts() {
    globalShortcut.unregisterAll();

    var shortcutKeysSetting = configuration.readSettings('shortcutKeys');
    var shortcutPrefix = shortcutKeysSetting.length === 0 ? '' : shortcutKeysSetting.join('+') + '+';

    globalShortcut.register(shortcutPrefix + '1', function () {
        mainWindow.webContents.send('global-shortcut', 0);
    });
    globalShortcut.register(shortcutPrefix + '2', function () {
        mainWindow.webContents.send('global-shortcut', 1);
    });
}
=======
ipc.on('set-global-shortcuts', function () {
    setGlobalShortcuts();
});
>>>>>>> 04329d06e0336d4b222df9c335c3b87c3037cf01
