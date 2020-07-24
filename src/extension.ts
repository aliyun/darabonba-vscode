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
	CompletionList,
	TextEdit,
	Range
} from 'vscode';
import { parse } from '@darabonba/parser';
import * as Formatter from '@darabonba/cli/lib/formatter';
import { completions } from './completions';

class DaraCompletionItemProvider implements CompletionItemProvider {
	provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken, context: CompletionContext): ProviderResult<CompletionItem[] | CompletionList> {
		return completions;
	}
}

export function activate(context: ExtensionContext) {
	context.subscriptions.push(languages.registerCompletionItemProvider('dara', new DaraCompletionItemProvider(), '.', '\"'));
	languages.registerDocumentFormattingEditProvider({ scheme: "file", language: "dara" }, {
		provideDocumentFormattingEdits(document: TextDocument): TextEdit[] {
			const origContent = document.getText();
			const ast = parse(origContent, document.fileName);
			const formatter = new Formatter();
			formatter.visit(ast, 0);

			const wholeFile = new Range(document.positionAt(0), document.positionAt(origContent.length));
			return [
				TextEdit.replace(wholeFile, formatter.output),
			];
		}
	});
}

export function deactivate(): Thenable<void> | undefined {
	return;
}
