# Font Development Support for Visual Studio Code

Work in progress to add support for common font development tasks based on the Python font tools toolchain ([FontTools](https://github.com/fonttools/fonttools), [ufo2ft](https://github.com/googlefonts/ufo2ft), etc.)

## Features

- Syntax highlighting for [`.ttx`](https://github.com/fonttools/fonttools) files including TrueType assembly
- Syntax highlighting for standalone TrueType assembly files (`.ttasm`)
- Makes ttx files navigable by supporting SFNT table tags as document symbols. Press `cmd-shift-O` to jump to a symbol.

## Release Notes

### 0.1.2

- Support table tags for raw "hexdata" tables

## How To Build The Extension

If you don’t want to use the builds from the [releases](/jenskutilek/vscode-fonttools/releases) page, you can build and install the extension yourself:

```bash
$ vsce package
$ code --install-extension fonttools-0.1.2.vsix
```

## Copyright

© 2021 by Jens Kutilek.
