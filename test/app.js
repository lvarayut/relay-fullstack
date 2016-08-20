import test from 'ava';
import path from 'path';
import assert from 'yeoman-assert';
import helpers from 'yeoman-test';

test.beforeEach(() => helpers.run(path.join(__dirname, '../generators/app'), { skipInstall: true }).withPrompts({ moduleName: 'awesome-project' }).toPromise());

test('includes all expected files', () => {
  assert.file([
    '.babelrc',
    '.editorconfig',
    '.eslintrc',
    '.gitattributes',
    '.gitignore',
    'package.json',
    'Procfile',
    'webpack.config.js',
    'client',
    'server'
  ]);
});

test('binds appName and moduleName', () => {
  assert.fileContent('package.json', /"name": "awesome-project"/);
  assert.fileContent('package.json', /"description": "Awesome Project, Powered by Relay Fullstack"/);
  assert.fileContent('webpack.config.js', /title: 'Awesome Project, Powered by Relay Fullstack'/);
  assert.fileContent('client/components/Navbar/NavbarComponent.js', /const title = 'Awesome Project'/);
});

