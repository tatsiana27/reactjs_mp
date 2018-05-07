const path = require('path');
const PROJECT_ROOT = path.resolve(__dirname, '../');

module.exports = {
    projectRoot: PROJECT_ROOT,
    outputPath: path.join(PROJECT_ROOT, 'dist'),
    appEntry: path.join(PROJECT_ROOT, 'src')
};
module.exports = {
    PORT: 3000,
    DEV_MODE: 'development',
    PROD_MODE: 'production',
    LOCALHOST: 'localhost',
    PROJECT_ROOT: PROJECT_ROOT,
    OUTPUT_PATH: path.join(PROJECT_ROOT, 'dist'),
    APP_ENTRY: path.join(PROJECT_ROOT, 'src')
};