"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Based on https://github.com/microsoft/vscode-extension-samples/blob/main/lsp-sample/server/src/server.ts
const node_1 = require("vscode-languageserver/node");
const vscode_languageserver_textdocument_1 = require("vscode-languageserver-textdocument");
// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = node_1.createConnection(node_1.ProposedFeatures.all);
// Create a simple text document manager.
const documents = new node_1.TextDocuments(vscode_languageserver_textdocument_1.TextDocument);
let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
let hasDiagnosticRelatedInformationCapability = false;
connection.onInitialize((params) => {
    const capabilities = params.capabilities;
    // Does the client support the `workspace/configuration` request?
    // If not, we fall back using global settings.
    hasConfigurationCapability = !!(capabilities.workspace && !!capabilities.workspace.configuration);
    hasWorkspaceFolderCapability = !!(capabilities.workspace && !!capabilities.workspace.workspaceFolders);
    hasDiagnosticRelatedInformationCapability = !!(capabilities.textDocument &&
        capabilities.textDocument.publishDiagnostics &&
        capabilities.textDocument.publishDiagnostics.relatedInformation);
    const result = {
        capabilities: {
            textDocumentSync: node_1.TextDocumentSyncKind.Incremental,
            // Tell the client that this server supports code completion.
            completionProvider: {
                resolveProvider: true
            }
        }
    };
    if (hasWorkspaceFolderCapability) {
        result.capabilities.workspace = {
            workspaceFolders: {
                supported: true
            }
        };
    }
    return result;
});
connection.onInitialized(() => {
    if (hasConfigurationCapability) {
        // Register for all configuration changes.
        connection.client.register(node_1.DidChangeConfigurationNotification.type, undefined);
    }
    if (hasWorkspaceFolderCapability) {
        connection.workspace.onDidChangeWorkspaceFolders(_event => {
            connection.console.log('Workspace folder change event received.');
        });
    }
});
// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
const defaultSettings = { maxNumberOfProblems: 1000 };
let globalSettings = defaultSettings;
// Cache the settings of all open documents
const documentSettings = new Map();
connection.onDidChangeConfiguration(change => {
    if (hasConfigurationCapability) {
        // Reset all cached document settings
        documentSettings.clear();
    }
    else {
        globalSettings = ((change.settings.vttAssemblyLanguageServer || defaultSettings));
    }
    // Revalidate all open text documents
    documents.all().forEach(validateTextDocument);
});
function getDocumentSettings(resource) {
    if (!hasConfigurationCapability) {
        return Promise.resolve(globalSettings);
    }
    let result = documentSettings.get(resource);
    if (!result) {
        result = connection.workspace.getConfiguration({
            scopeUri: resource,
            section: 'vttAssemblyLanguageServer'
        });
        documentSettings.set(resource, result);
    }
    return result;
}
// Only keep settings for open documents
documents.onDidClose(e => {
    documentSettings.delete(e.document.uri);
});
// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent(change => {
    validateTextDocument(change.document);
});
async function validateTextDocument(textDocument) {
    // In this simple example we get the settings for every validate run.
    const settings = await getDocumentSettings(textDocument.uri);
    // The validator creates diagnostics for all uppercase words length 2 and more
    const text = textDocument.getText();
    const pattern = /\b[A-Z]{2,}\b/g;
    let m;
    let problems = 0;
    const diagnostics = [];
    while ((m = pattern.exec(text)) && problems < settings.maxNumberOfProblems) {
        problems++;
        const diagnostic = {
            severity: node_1.DiagnosticSeverity.Warning,
            range: {
                start: textDocument.positionAt(m.index),
                end: textDocument.positionAt(m.index + m[0].length)
            },
            message: `${m[0]} is all uppercase.`,
            source: 'ex'
        };
        if (hasDiagnosticRelatedInformationCapability) {
            diagnostic.relatedInformation = [
                {
                    location: {
                        uri: textDocument.uri,
                        range: Object.assign({}, diagnostic.range)
                    },
                    message: 'Spelling matters'
                },
                {
                    location: {
                        uri: textDocument.uri,
                        range: Object.assign({}, diagnostic.range)
                    },
                    message: 'Particularly for names'
                }
            ];
        }
        diagnostics.push(diagnostic);
    }
    // Send the computed diagnostics to VSCode.
    connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}
connection.onDidChangeWatchedFiles(_change => {
    // Monitored files have change in VSCode
    connection.console.log('We received an file change event');
});
// This handler provides the initial list of the completion items.
connection.onCompletion((_textDocumentPosition) => {
    // The pass parameter contains the position of the text document in
    // which code complete got requested. For the example we ignore this
    // info and always provide the same completion items.
    return [
        {
            label: 'SVTCA[Y]',
            kind: node_1.CompletionItemKind.Text,
            data: 1
        },
        {
            label: 'SPVTCA[Y]',
            kind: node_1.CompletionItemKind.Text,
            data: 2
        },
        {
            label: 'SFVTCA[Y]',
            kind: node_1.CompletionItemKind.Text,
            data: 3
        },
        {
            label: 'SPVTL[r]',
            kind: node_1.CompletionItemKind.Text,
            data: 4
        },
        {
            label: 'SFVTL[r]',
            kind: node_1.CompletionItemKind.Text,
            data: 5
        },
        {
            label: 'MDAP[R]',
            kind: node_1.CompletionItemKind.Text,
            data: 6
        },
        {
            label: 'IUP[Y]',
            kind: node_1.CompletionItemKind.Text,
            data: 7
        },
        {
            label: 'SHP[2]',
            kind: node_1.CompletionItemKind.Text,
            data: 8
        },
        {
            label: 'SHC[2]',
            kind: node_1.CompletionItemKind.Text,
            data: 9
        },
        {
            label: 'SHZ[2]',
            kind: node_1.CompletionItemKind.Text,
            data: 10
        },
        {
            label: 'MSIRP[M]',
            kind: node_1.CompletionItemKind.Text,
            data: 11
        },
        {
            label: 'MIAP[R]',
            kind: node_1.CompletionItemKind.Text,
            data: 12
        },
        {
            label: 'GC[N]',
            kind: node_1.CompletionItemKind.Text,
            data: 13
        },
        {
            label: 'MD[N]',
            kind: node_1.CompletionItemKind.Text,
            data: 14
        },
        {
            label: 'ROUND[Gr]',
            kind: node_1.CompletionItemKind.Text,
            data: 15
        },
        {
            label: 'NROUND[Gr]',
            kind: node_1.CompletionItemKind.Text,
            data: 16
        },
        {
            label: 'SDPVTL[r]',
            kind: node_1.CompletionItemKind.Text,
            data: 17
        },
        {
            label: 'MDRP[M>RBl]',
            kind: node_1.CompletionItemKind.Text,
            data: 18
        },
        {
            label: 'MIRP[M>RBl]',
            kind: node_1.CompletionItemKind.Text,
            data: 19
        },
    ];
});
// This handler resolves additional information for the item selected in
// the completion list.
connection.onCompletionResolve((item) => {
    if (item.data === 1) {
        item.detail = 'Set Vectors To Coordinate Axis [Y|X]';
        item.documentation = 'Sets the projection_vector to one of the coordinate axes depending on the value of the flag a.';
    }
    else if (item.data === 2) {
        item.detail = 'Set Projection Vector To Coordinate Axis [Y|X]';
    }
    else if (item.data === 3) {
        item.detail = 'Set Freedom Vector To Coordinate Axis [Y|X]';
    }
    else if (item.data === 4) {
        item.detail = 'Set Projection Vector To Line [r|R]';
    }
    else if (item.data === 5) {
        item.detail = 'Set Freedom Vector To Line[r|R]';
    }
    else if (item.data === 6) {
        item.detail = 'Move Direct Absolute Point [r|R]';
    }
    else if (item.data === 7) {
        item.detail = 'Interpolate Untouched Points [Y|X]';
    }
    else if (item.data === 8) {
        item.detail = 'Shift Point [2|1]';
    }
    else if (item.data === 9) {
        item.detail = 'Shift Contour[2|1]';
    }
    else if (item.data === 10) {
        item.detail = 'Shift Zone [2|1]';
    }
    else if (item.data === 11) {
        item.detail = 'Move Stack-indirect Relative Point [m|M]';
    }
    else if (item.data === 12) {
        item.detail = 'Move Indirect Absolute Point [r|R]';
    }
    else if (item.data === 13) {
        item.detail = 'Get Coordinate [N|O]';
    }
    else if (item.data === 14) {
        item.detail = 'Measure Distance [N|O]';
    }
    else if (item.data === 15) {
        item.detail = 'Round [Gr|Bl|Wh]';
    }
    else if (item.data === 16) {
        item.detail = 'No Round [Gr|Bl|Wh]';
    }
    else if (item.data === 17) {
        item.detail = 'Set Dual Projection Vector To Line [r|R]';
    }
    else if (item.data === 18) {
        item.detail = 'Move Direct Relative Point [m|M <|> r|R Gr|Bl|Wh]';
    }
    else if (item.data === 19) {
        item.detail = 'Move Indirect Relative Point [m|M <|> r|R Gr|Bl|Wh]';
    }
    return item;
});
// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);
// Listen on the connection
connection.listen();
//# sourceMappingURL=server.js.map