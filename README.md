# stretch-canvas

1. Make a project with a fixed size canvas using absolute units.
2. `stretch(canvas);`
3. It now works on any screen.

## What does it do?
- Adapts to device resolution
- Fits to viewport preserving w:h ratio
- Absolute center

## Getting started
```
npm install --save stretch-canvas
```
**or place this script tag before your code**
```html
<script src="https://unpkg.com/stretch-canvas@0.2.0/index.js"></script>
```
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
// accepts an optional config object
stretch(canvas, {
    center: false, // skip canvas centering
    maxWidth: 300  // max width in pixels
});
```