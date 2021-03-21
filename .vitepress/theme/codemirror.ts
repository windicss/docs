import { EditorView } from '@codemirror/view'

export const prismTheme = EditorView.theme({
  '&': {
    color: 'var(--prism-foreground)',
    backgroundColor: 'transparent',
  },
  '.cm-content': {
    caretColor: 'var(--prism-foreground)',
  },
  '&.cm-focused .cm-cursor': {
    borderLeftColor: '#0e9',
  },
  '&.cm-focused .cm-selectionBackground, ::selection': {
    backgroundColor: '#004767',
  },
  '.cm-gutters': {
    'backgroundColor': 'transparent',
    'padding-left': '1rem',
    'padding-right': '1rem',
    'color': 'var(--prism-foreground)',
    'border': 'none',
  },
  '.cm-foldPlaceholder': {
    background: 'var(--prism-background)',
    border: 'none',
  },
  '.cm-activeLine': {
    background: 'none',
  },
  '.cm-line .ͼk': {
    color: '#4C7C40',
  },
  '.cm-line .ͼg': {
    color: 'var(--prism-builtin)',
  },
  '.cm-line .ͼc': {
    color: 'var(--prism-selector)',
  },
  '.cm-line .ͼ9': {
    color: 'var(--prism-namespace)',
  },
  '.cm-line .ͼh': {
    color: 'var(--prism-selector)',
  },
  '.cm-line .ͼa': {
    color: 'var(--prism-selector)',
  },
})
