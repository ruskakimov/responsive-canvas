# stretch-canvas

1. Make a project with a fixed size canvas using absolute units.
2. `stretch(canvas);`
3. It now works on any screen.

## What does it do?
- Adapt canvas resolution to device screen resolution
- Fit canvas to the viewport while preserving w:h ratio
- Center canvas on the viewport

## Getting started
**HTML**
```html
<body>
    <canvas id="my-canvas" width="200" height="100"></canvas>
</body>
```
**JS**
```js
const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

stretch(canvas); // this is where magic happens

// draw like its an old fixed size canvas
ctx.fillRect(50, 25, 100, 50);
```

## Docs
```js
// second parameter is optional
// test
stretch(canvas, {
    center: false, // don't center the canvas
    maxWidth: 300 // max width in pixels
});
```