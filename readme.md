# gcode-utils-document
Helpers to ease gcode manipulation.

## Install

```
npm install --save gcode-utils-document
```


## Usage

```js
import GDoc from 'gcode-utils-document'

let doc = new GDoc

doc.append(';Start...')
doc.spindleOn()
...
let gcodeString = doc.toString()
```


## License

[MIT](license) &copy; [Manguluka Kakia][author]


[author]: https://github.com/manguluka
