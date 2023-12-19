# Font Development Support for Visual Studio Code

Work in progress to add support for common font development tasks based on the Python font tools toolchain ([FontTools](https://github.com/fonttools/fonttools), [ufo2ft](https://github.com/googlefonts/ufo2ft), etc.)

## Features

- Syntax highlighting for [`.ttx`](https://github.com/fonttools/fonttools) files including TrueType assembly and Visual TrueType assembly
- Syntax highlighting for standalone TrueType assembly files (`.ttasm`)
- Syntax highlighting for standalone Visual TrueType assembly files (`.vttasm`)
- Makes ttx files navigable by supporting SFNT table tags as document symbols. Press `cmd-shift-O` to jump to a symbol.
- Completions for all TrueType instructions
- Documentation for some TrueType instructions

## Release Notes

### 0.3.0

- Add a formatter for TTX and VTT assembly. Press `opt-shift-F` to reindent a source file.

## How To Build The Extension

If you don’t want to install the extension through the VisualStudio marketplace, you can build and install it from the source code:

```bash
$ npm install -g @vscode/vsce
$ vsce package
$ code --install-extension fonttools-0.3.0.vsix
```

## Copyright

© 2021-2023 by [Jens Kutilek](https://www.kutilek.de/).
