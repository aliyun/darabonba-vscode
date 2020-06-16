import { CompletionItem, CompletionItemKind } from "vscode";

export const completions : CompletionItem[] = [];

const keywords = ['const', 'extends', 'import', 'async', 'static', 'var', 'return', 'throw'];

keywords.forEach((value) => {
    completions.push({
        label: value,
        kind: CompletionItemKind.Keyword,
        detail: `keyword ${value}`,
        documentation: ''
    });
});

const functions = ['api', 'init', 'function'];

functions.forEach((value) => {
    completions.push({
        label: value,
        kind: CompletionItemKind.Function,
        detail: `${value} function`,
        documentation: ''
    });
});

const types = [
    'any',
    'void',
    'string',
    'boolean',
    'number',
    'integer',
    'int8',
    'int16',
    'int32',
    'int64',
    'uint8',
    'uint16',
    'uint32',
    'uint64',
    'float',
    'double',
    'object',
    'bytes',
    'map',
    'readable',
    'writable'
];

types.forEach((value) => {
    completions.push({
        label: value,
        kind: CompletionItemKind.Text,
        detail: `type ${value}`,
        documentation: ''
    });
});

const consts = [
    'true',
    'false',
    'null'
];

consts.forEach((value) => {
    completions.push({
        label: value,
        kind: CompletionItemKind.Constant,
        detail: `type ${value}`,
        documentation: ''
    });
});

completions.push({
    label: 'model',
    kind: CompletionItemKind.Class,
    detail: `model`
});