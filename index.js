var rework    = require('rework'),
    join      = require('path').join,
    fs        = require('fs'),
    pureGrids = require('rework-pure-grids');

var basepath = join(__dirname, 'grid', '__col');

var medias = {
    sm: 'screen and (min-width: 35.5em)',
    md: 'screen and (min-width: 48em)',
    lg: 'screen and (min-width: 64em)',
    xl: 'screen and (min-width: 80em)'
};

for (var key in medias) {
    var query = {};
    query[key] = medias[key];
    var css = rework('').use(pureGrids.units({
        mediaQueries: query
    })).toString();
    fs.writeFileSync(join(basepath, 'grid__col_' + key + '.css'), css);
}
