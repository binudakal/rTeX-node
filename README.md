# rtex-node

[![npm version](https://badge.fury.io/js/rtex-node.svg)](https://badge.fury.io/js/rtex-node) [![install size](https://packagephobia.now.sh/badge?p=rtex-node)](https://packagephobia.now.sh/result?p=rtex-node)

This module is a Node.js wrapper for [DXsmiley's rTeX](https://github.com/DXsmiley/rtex), a minimal LaTeX rendering server.

## Installation

In a Node.js project:

`npm install rtex-node`

## Example usage
The `renderLatex` function accepts an object containing the configuration of the request to the server. <br>
Within this object, the `code` property must be passed as a string literal, while the properties `format`, `quality` and `density` default to 'png', 85 and 200 respectively.

```js
const renderLatex = require('rtex-node');

const LaTeXconfig = {
    code: String.raw`\begin{document}Hello, world!\end{document}`,
    format: 'pdf', //defaults to png
    quality: 100, //defaults to 85
    density: 300 //defaults to 200
}

renderLatex(LaTeXconfig).then((latexURL) => {
    console.log(`LaTeX render: ${latexURL}`);
}).catch((err) => {
    console.log(err);
})
```

Given that no errors are thrown, this would output the following:

```
LaTeX render: https://rtex.probablyaweb.site/api/v2/somefilename.jpg
```


## About
### Details and limitations

• The server is currently running TeX Live 2016 with most* popular packages installed. <br>
• Potential security flaws such as \write18 and \input have been disabled. <br>
• There is a rendering time limit of 8 seconds. <br>
• Rendered documents are stored on the server for at most 2 hours. <br>
• Please don't abuse the system. If you expect to use this module heavily, please contact [DXsmiley](https://rtex.probablyaweb.site/contact).


Feel free to open an issue on the Github repo for bugs.
