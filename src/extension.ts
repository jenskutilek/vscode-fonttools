// https://stackoverflow.com/questions/46045245/how-to-enable-go-to-symbol-with-a-custom-language-in-vscode/46054953#46054953
'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.languages.registerDocumentSymbolProvider(
        {language: "foo"}, new FooDocumentSymbolProvider()
    ));
}

class FooDocumentSymbolProvider implements vscode.DocumentSymbolProvider {
    public provideDocumentSymbols(document: vscode.TextDocument,
            token: vscode.CancellationToken): Thenable<vscode.SymbolInformation[]> {
        return new Promise((resolve, reject) => {
            var symbols = [];

            for (var i = 0; i < document.lineCount; i++) {
                var line = document.lineAt(i);
                if (line.text.match(/\s<[A-Za-z0-9_ ]>/g)) {
                    symbols.push({
                        name: line.text.substr(1),
                        kind: vscode.SymbolKind.Field,
                        location: new vscode.Location(document.uri, line.range)
                    });
                }
            }

            resolve(symbols);
        });
    }
}