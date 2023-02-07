import type { ExtensionContext } from 'vscode'
import { commands, window } from 'vscode'
import { version } from '../package.json'
import { log } from './log'

export function activate(context: ExtensionContext) {
  log.appendLine(`⚪️ Diff Compiler for VS Code v${version}\n`)
  const disposable = commands.registerCommand('diffCompiler.reload', () => {
    window.showInformationMessage('test')
  })

  context.subscriptions.push(disposable)
}

export function deactivate() {}
