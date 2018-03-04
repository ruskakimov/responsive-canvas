(function() {

var coordinate_scaling_factors = null;

function unstretchCoordinates(x, y) {
    if (!scaling_factors) return;
    return [x / coordinate_scaling_factors[0], y / coordinate_scaling_factors[1]];
}

function stretch(canvas, config) {
    config = config || {};
    config.center = config.center === undefined ? true : config.center;
    config.maxWidth = config.maxWidth || window.innerWidth;

    var originalWidth = canvas.width,
        originalHeight = canvas.height,
        dpr = window.devicePixelRatio || 1;

    // full height
    var newHeight = window.innerHeight,
        newWidth = newHeight * originalWidth / originalHeight;

    if (newWidth > window.innerWidth || newWidth > config.maxWidth) {
        // go with full width instead
        newWidth = Math.min(window.innerWidth, config.maxWidth);
        newHeight = newWidth * originalHeight / originalWidth;
    }

    coordinate_scaling_factors = [newWidth / originalWidth, newHeight / originalHeight];

    canvas.width = newWidth * dpr;
    canvas.height = newHeight * dpr;

    canvas.style.width = newWidth + 'px';
    canvas.style.height = newHeight + 'px';

    var ctx = canvas.getContext('2d');
    ctx.scale(canvas.width / originalWidth, canvas.height / originalHeight);

    if (config.center) center(canvas);
}

function center(canvas) {
    var styles = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    };

    Object.keys(styles).forEach(function(prop) {
        canvas.style[prop] = styles[prop];
    });
}

if (typeof module === 'object') {
    module.exports = {
        stretch,
        unstretchCoordinates,
    }
}
else if (typeof window === 'object') {
    window.stretch = stretch;
    window.unstretchCoordinates = unstretchCoordinates;
}

})();