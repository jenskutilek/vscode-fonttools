'use strict';
import * as path from 'path';
import * as vscode from 'vscode';
import { TtxDocumentSymbolProvider } from './ttxsymbols';

import {
    LanguageClient,
    LanguageClientOptions,
    ServerOptions,
    TransportKind
} from 'vscode-languageclient/node';


let client: LanguageClient;


export function activate(context: vscode.ExtensionContext):void {
    // https://stackoverflow.com/questions/46045245/how-to-enable-go-to-symbol-with-a-custom-language-in-vscode/46054953#46054953
    context.subscriptions.push(
        vscode.languages.registerDocumentSymbolProvider(
            {language: "ttx"}, new TtxDocumentSymbolProvider()
        )
    );

    // Language server for assembly commands
    // Based on https://code.visualstudio.com/api/language-extensions/language-server-extension-guide

    let serverModule = context.asAbsolutePath(path.join('server', 'out', 'server.js'));
    let debugOptions = { execArgv: ['--nolazy', '--inspect=6009'] };
    let serverOptions: ServerOptions = {
        run: { module: serverModule, transport: TransportKind.ipc },
        debug: {
            module: serverModule,
            transport: TransportKind.ipc,
            options: debugOptions
        }
    };

    let clientOptions: LanguageClientOptions = {
        documentSelector: [{ scheme: 'file', language: 'vttasm' }],
        synchronize: {
            fileEvents: vscode.workspace.createFileSystemWatcher('**/.clientrc')
        }
    };

      // Create the language client and start the client.
    client = new LanguageClient(
        'vttAssemblyLanguageServer',
        'VTT Assembly Language Server',
        serverOptions,
        clientOptions
    );

    // Start the client. This will also launch the server
    client.start();
}


export function deactivate(): Thenable<void> | undefined {
    if (!client) {
      return undefined;
    }
    return client.stop();
  }
