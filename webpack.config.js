const path = require('path');
const outputDir = path.resolve(__dirname, 'dist/js/');
module.exports = {
    devtool: 'eval-source-map',
    entry: {
        main: path.resolve(__dirname,'src/js/main.js'),
        booleanConverts: path.resolve(__dirname,'src/js/booleanConverts.js'),
        createBody: path.resolve(__dirname,'src/js/createBody.js'),
        createEditForm: path.resolve(__dirname,'src/js/createEditForm.js'),
        handleEdit: path.resolve(__dirname,'src/js/handleEdit.js'),
        modifyTableRow: path.resolve(__dirname,'src/js/modifyTableRow.js'),
      },
    mode: 'production',
    output: {
        path: outputDir,
        // filename: 'main.js'
    }
};
