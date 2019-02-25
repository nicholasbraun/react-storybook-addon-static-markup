"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.style = void 0;

/*
 Solarized Color Schemes originally by Ethan Schoonover
 http://ethanschoonover.com/solarized

 Ported for PrismJS by Hector Matos
 Website: https://krakendev.io
 Twitter Handle: https://twitter.com/allonsykraken)
*/

/*
SOLARIZED HEX
--------- -------
base03    #002b36
base02    #073642
base01    #586e75
base00    #657b83
base0     #839496
base1     #93a1a1
base2     #eee8d5
base3     #fdf6e3
yellow    #b58900
orange    #cb4b16
red       #dc322f
magenta   #d33682
violet    #6c71c4
blue      #268bd2
cyan      #2aa198
green     #859900
*/
var style = "<style>\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tcolor: #657b83; /* base00 */\n\tfont-family: Consolas, Monaco, \"Andale Mono\", \"Ubuntu Mono\", monospace;\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\n\tline-height: 1.5;\n\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\ttab-size: 4;\n\n\t-webkit-hyphens: none;\n\t-moz-hyphens: none;\n\t-ms-hyphens: none;\n\thyphens: none;\n}\n\npre[class*=\"language-\"]::-moz-selection, pre[class*=\"language-\"] ::-moz-selection,\ncode[class*=\"language-\"]::-moz-selection, code[class*=\"language-\"] ::-moz-selection {\n\tbackground: #073642; /* base02 */\n}\n\npre[class*=\"language-\"]::selection, pre[class*=\"language-\"] ::selection,\ncode[class*=\"language-\"]::selection, code[class*=\"language-\"] ::selection {\n\tbackground: #073642; /* base02 */\n}\n\n/* Code blocks */\npre[class*=\"language-\"] {\n\tpadding: 1em;\n\tmargin: .5em 0;\n\toverflow: auto;\n\tborder-radius: 0.3em;\n}\n\n:not(pre) > code[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tbackground-color: #fdf6e3; /* base3 */\n}\n\n/* Inline code */\n:not(pre) > code[class*=\"language-\"] {\n\tpadding: .1em;\n\tborder-radius: .3em;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: #93a1a1; /* base1 */\n}\n\n.token.punctuation {\n\tcolor: #586e75; /* base01 */\n}\n\n.namespace {\n\topacity: .7;\n}\n\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.constant,\n.token.symbol,\n.token.deleted {\n\tcolor: #268bd2; /* blue */\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.url,\n.token.inserted {\n\tcolor: #2aa198; /* cyan */\n}\n\n.token.entity {\n\tcolor: #657b83; /* base00 */\n\tbackground: #eee8d5; /* base2 */\n}\n\n.token.atrule,\n.token.attr-value,\n.token.keyword {\n\tcolor: #859900; /* green */\n}\n\n.token.function,\n.token.class-name {\n\tcolor: #b58900; /* yellow */\n}\n\n.token.regex,\n.token.important,\n.token.variable {\n\tcolor: #cb4b16; /* orange */\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.entity {\n\tcursor: help;\n}\n</style>";
exports.style = style;