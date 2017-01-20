import path from 'path';
import test from 'ava';
import ifFileRead from './';

test('basic', t => {
  const fixturePath = path.join('fixtures/fixture.txt');
  t.regex(ifFileRead(['a', 'b', fixturePath]), /fixture/);
  t.throws(() => {
    ifFileRead(['']);
  });
});

test('prepend', t => {
  t.regex(ifFileRead(['a', 'b', 'fixture.txt'], {
    prepend: 'fixtures'
  }), /fixture/);
});
