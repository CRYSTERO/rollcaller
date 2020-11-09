const electron = require("electron");
const url = require("url");
const path = require("path");

const {app, BrowserWindow, Menu, ipcMain, dialog} = electron;

let mainWindow;
let idiot;
let about;


app.on("ready", function () {
    mainWindow = new BrowserWindow({webPreferences:
            {
                nodeIntegration: true
            },
            resizable: false});

    mainWindow.loadURL(url.format(
        {
            pathname: path.join(__dirname, "index.html"),
            protocol: "file:",
            slashes: true
        }
    ));

    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);
});


const mainMenuTemplate =
    [
        //几个大选项
        {
            //大选项名称
            label: '高级',
            //下拉后的小选项
            submenu:
                [
                    {
                        label: '导入csv文件(正在开发，别点)',
                        // click() {
                        //     // mainWindow.webContents.send("pop-file-uploader")
                        //     dialog.showOpenDialog({properties: ['openFile'],
                        //     filters: [{ name: 'CSVs', extensions: ['csv'] }]})
                        //         .then(function (fileObject) {
                        //
                        //                 mainWindow.webContents.send("FILE", fileObject);
                        //         })
                        //         .catch(function (error) {
                        //             console.error(error);
                        //         })
                        // }
                        click() {
                            do_not_open();
                        }
                    },
                    {
                        label: '导出幸运儿名单(也别点)',
                        click() {
                            do_not_open();
                        }
                    },
                    {
                        label: '关于',
                        click() {
                            aboutMe();
                        }
                    },
                    {
                        label: '退出',
                        //根据运行的系统设置不同的快捷键
                        accelerator: process.platform === 'darwin' ? 'Command+Q' : 'Ctrl+Q',
                        //添加点击事件，点了退出应用程序
                        click()
                        {
                            app.quit();
                        },
                    }
                ]
        }
    ]

if (process.env.NODE_PATH !== 'production')
{
    mainMenuTemplate.push(
        {
            label: '开发者工具',
            submenu:
                [
                    {
                        label: 'Toggle Devtools',
                        accelerator: process.platform === 'darwin' ? 'Command+I' : 'Ctrl+I',
                        click(item, focusedWindow) {
                            focusedWindow.toggleDevTools();
                        }
                    },
                    {
                        role: 'reload'
                    }
                ]
        }
    )
}

function do_not_open() {
    idiot = new BrowserWindow(
        {
            width: 350, height: 100, title: "傻瓜", webPreferences:
                {
                    nodeIntegration: true
                },
            resizable: false
        }
    );
    idiot.setMenuBarVisibility(false);
    idiot.loadURL(url.format(
        {
            pathname: path.join(__dirname, 'do_not_open.html'),
            protocol: 'file:',
            slashes: true
        }));
    idiot.on('close', function () {
        idiot = null;
    })

}

function aboutMe() {
    about = new BrowserWindow(
        {
            width: 295, height: 620, title: "关于作者", webPreferences:
                {
                    nodeIntegration: true
                },
            resizable: false

        }
    );
    about.setMenuBarVisibility(false);
    about.loadURL(url.format(
        {
            pathname: path.join(__dirname, 'about.html'),
            protocol: 'file:',
            slashes: true
        }));
    about.on('close', function () {
        about = null;
    })
}