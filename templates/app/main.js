/*
 * This is minimal entory point script for atom-shell.
 *
 * original source from below.
 * [ https://github.com/dougnukem/hello-atom ]
 */

var app = require('app'),
    BrowserWindow = require('browser-window'),
    CrashReporter = require('crash-reporter');

var mainWindow = null,
    subWindow = null;

CrashReporter.start();

app.on('window-all-closed', function() {
    if (process.platform != 'darwin')
        app.quit();
});

app.on('ready', function() {
    mainWindow = new BrowserWindow({width: 800, height: 600});

    mainWindow.loadUrl('file://' + __dirname + '/index.html');

    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});
