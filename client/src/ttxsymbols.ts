'use strict';
import * as vscode from 'vscode';


export class TtxDocumentSymbolProvider implements vscode.DocumentSymbolProvider {
    public provideDocumentSymbols(document: vscode.TextDocument,
        token: vscode.CancellationToken): Thenable<vscode.SymbolInformation[]> {
        return new Promise((resolve, reject) => {
            var symbols = [];
            var line, match;

            for (var i = 0; i < document.lineCount; i++) {
                line = document.lineAt(i);
                match = line.text.match(/^(  |\t)<(?<tag>[A-Za-z0-9_ ]{1,4})(?<err> ERROR="decompilation error")?(?<raw> raw="True")?>/);
                if (match?.groups) {
                    symbols.push({
                        containerName: "SFNT Table",
                        name: match.groups.tag,
                        kind: vscode.SymbolKind.Field,
                        location: new vscode.Location(document.uri, line.range)
                    });
                    continue;
                }
                match = line.text.match(/^(  |\t)<(?<tag>GlyphOrder)>/);
                if (match?.groups) {
                    symbols.push({
                        containerName: "Pseudo Table",
                        name: "Glyph Order",
                        kind: vscode.SymbolKind.Field,
                        location: new vscode.Location(document.uri, line.range)
                    });
                }
            }

            resolve(symbols);
        });
    }
}
