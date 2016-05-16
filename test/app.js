import test from 'ava';
import path from 'path';
import assert from 'yeoman-assert';
import helpers from 'yeoman-test';

test.beforeEach(() => helpers.run(path.join(__dirname, '../generators/app'), { skipInstall: true }).toPromise());

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
    'webpack.production.config.js',
    'client',
    'server'
  ]);
});

