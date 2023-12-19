'use strict';
import * as vscode from 'vscode';


export class VttAsmFormatter implements vscode.DocumentFormattingEditProvider {
    public provideDocumentFormattingEdits(document: vscode.TextDocument,
        options: vscode.FormattingOptions,
        token: vscode.CancellationToken): vscode.ProviderResult<vscode.TextEdit[]> {
        let result: vscode.ProviderResult<vscode.TextEdit[]> = [];
        let indent = 0;
        let indentOld = 0;
        const indentString = '  ';
        const indentSize = indentString.length;
        let line;
        for (let i = 0; i < document.lineCount; i++) {
            line = document.lineAt(i);

            // Skip empty lines (incl. lines containing only whitespace)
            if (line.isEmptyOrWhitespace) {
                continue;
            }

            // Check for indent after current
            let text = line.text.trimStart();
            if (text.startsWith('ENDF[') || text.startsWith('EIF[') || text.startsWith('ELSE[')) {
                indent -= 1;
            }
            if (text.startsWith('{')) {
                indentOld = indent;
                indent = 0;
            }

            // Check if the line has the expected amount of indentation
            if (line.firstNonWhitespaceCharacterIndex !== indent * indentSize + 1) {
                result.push(
                    vscode.TextEdit.replace(
                        new vscode.Range(
                            line.range.start,
                            new vscode.Position(i, line.firstNonWhitespaceCharacterIndex)
                        ),
                        indentString.repeat(indent)
                    )
                );
            }

            // Check for indent after current
            if (text.startsWith('{')) {
                indent = indentOld;
            }
            if (text.startsWith('FDEF[') || text.startsWith('IF[') || text.startsWith('ELSE[')) {
                indent += 1;
            }
        };
        return result;
    }
}
