const { readFileSync } = require('fs');
const { execSync } = require('child_process');

const path = `../../../taj/`
const content = readFileSync(path + "package.json");

const packageInfo = JSON.parse(content);

if (packageInfo) {
    const version = packageInfo.version;
    console.log('version', version);
    execSync(`npm i ${path}taj-${version}.tgz`);
}
else {
    throw "no package found";
}