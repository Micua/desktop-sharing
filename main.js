'use strict';

const path = require('path');
const icons = {
  logo: path.join(__dirname, 'logo.png'),
  play: path.join(__dirname, 'play.png'),
  pause: path.join(__dirname, 'pause.png'),
  stop: path.join(__dirname, 'stop.png'),
};

const { app, Tray, Menu, BrowserWindow } = require('electron');

let tray = null;
let mainWindow = null;

const menu = [
  /* beautify ignore:start */
  {
    accelerator: 'Command+F1',
    label: 'Start Sharing',
    icon: icons.play,
    click: function() {
      mainWindow.show();
    }
  },
  {
    accelerator: 'Command+F2',
    label: 'Stop Sharing',
    icon: icons.stop
  },
  {
    label: 'Options',
    submenu: [
      { label: 'submenu1' },
      { label: 'submenu2', checked: true}
    ],
    click: function() {
      mainWindow.show();
    }
  },
  {
    label: 'Quit',
    accelerator: 'Command+Q',
    selector: 'terminate:',
  }
  /* beautify ignore:end */
];

app.on('ready', function() {
  // mainWindow = new BrowserWindow({ titleBarStyle: 'hidden-inset' });
  // mainWindow.loadURL('https://github.com');
  tray = new Tray(icons.logo);
  tray.setToolTip('Desktop Sharing');
  tray.setContextMenu(Menu.buildFromTemplate(menu));
});
