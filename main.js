const {app, BrowserWindow} = require('electron')
const service = require('./proto/chat_grpc_pb')
const chat = require('./proto/chat_pb')
const grpc = require('grpc')

function createWindow() {
    // Create the browser window.
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.removeMenu();
    // Open the DevTools.
    win.webContents.openDevTools({
        mode: "detach"
    })
    // and load the index.html of the app.
    win.loadFile('index.html')

    let client = new service.ChatServerClient('localhost:11912', grpc.credentials.createInsecure())
    let note = new chat.Note()
    note.setMessage('Hello from electron')
    console.log('sending note to server')
    client.sendNote(note, function(err, response) {
        console.log('received reply', response);
    });
}

app.on('ready', createWindow)
