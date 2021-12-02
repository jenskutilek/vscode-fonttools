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

### 0.2.3

- Add more details to completions

## How To Build The Extension

If you don’t want to install the extension through the VisualStudio marketplace,you can build and install it from the source code:

```bash
$ vsce package
$ code --install-extension fonttools-0.2.3.vsix
```

## Copyright

© 2021 by Jens Kutilek.
