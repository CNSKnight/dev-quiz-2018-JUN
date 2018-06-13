const dot = require('../node_modules/dot-object');

module.exports = (obj, prop, def) => {
    var val = dot.pick(prop, obj);
    return (val !== undefined && val !== null) ? val : def;
}