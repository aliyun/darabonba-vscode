import * as path from 'path';
import {
	languages,
	ExtensionContext,
	TextDocument,
	CompletionItemProvider,
	CancellationToken,
	CompletionItem,
	CompletionContext,
	ProviderResult,
	Position,
	CompletionList
} from 'vscode';
import { completions } from './completions';

class TeaCompletionItemProvider implements CompletionItemProvider {
	provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken, context: CompletionContext): ProviderResult<CompletionItem[] | CompletionList> {
		return completions;
	}
}

export function activate(context: ExtensionContext) {
	context.subscriptions.push(languages.registerCompletionItemProvider('tea', new TeaCompletionItemProvider(), '.', '\"'));
}

export function deactivate(): Thenable<void> | undefined {
	return;
}
