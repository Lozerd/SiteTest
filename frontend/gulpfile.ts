const { series } = require('gulp')

function clean(cb: () => void) {
    cb();
}

function build(cb: () => void) {
    cb();
}

exports.build = build;
exports.default = series(clean, build);