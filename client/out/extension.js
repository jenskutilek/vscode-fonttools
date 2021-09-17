'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const path = require("path");
const vscode = require("vscode");
const node_1 = require("vscode-languageclient/node");
let client;
function activate(context) {
    // Language server for assembly commands
    // Based on https://code.visualstudio.com/api/language-extensions/language-server-extension-guide
    let serverModule = context.asAbsolutePath(path.join('server', 'out', 'server.js'));
    let debugOptions = { execArgv: ['--nolazy', '--inspect=6009'] };
    let serverOptions = {
        run: { module: serverModule, transport: node_1.TransportKind.ipc },
        debug: {
            module: serverModule,
            transport: node_1.TransportKind.ipc,
            options: debugOptions
        }
    };
    let clientOptions = {
        documentSelector: [{ scheme: 'file', language: 'vttasm' }],
        synchronize: {
            fileEvents: vscode.workspace.createFileSystemWatcher('**/.clientrc')
        }
    };
    // Create the language client and start the client.
    client = new node_1.LanguageClient('vttAssemblyLanguageServer', 'VTT Assembly Language Server', serverOptions, clientOptions);
    // Start the client. This will also launch the server
    client.start();
}
exports.activate = activate;
function deactivate() {
    if (!client) {
        return undefined;
    }
    return client.stop();
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map