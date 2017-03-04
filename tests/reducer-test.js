import reducer from '../app/reducer';

module('reducer', () => {
  test('it exists', (assert) => {
    assert.ok(reducer, 'reducer exists');
  });

  test('Load All Full Names', (assert) => {
    const oldState = { contacts: [] };
    const oldStateTwo = { contacts: [{ firstName: 'Angelina', lastName: 'Jolie' }] };
    const actionOne = { type: 'CONTACT@FIND_ALL', data: [{ firstName: 'John', lastName: 'Cena' }] };
    const actionTwo = { type: 'CONTACT@FIND_ALL', data: [{ firstName: 'John', lastName: 'Cena' }] };

    assert.deepEqual(reducer(oldState, actionOne), { contacts: [{ firstName: 'John', lastName: 'Cena' }] });
    assert.deepEqual(reducer(oldStateTwo, actionTwo), { contacts: [{ firstName: 'John', lastName: 'Cena' }] });
  });

  test('Add A Full Name', (assert) => {
    const emptyState = { contacts: [] };
    const oldState = { contacts: [{ firstName: 'Angelina', lastName: 'Joloe' }] };
    const actionOne = { type: 'CONTACT@CREATE', data: { firstName: 'Johnny', lastName: 'Depp' } };
    const actionTwo = { type: 'CONTACT@CREATE', data: { firstName: 'Johnny', lastName: 'Depp' } };

    assert.deepEqual(reducer(emptyState, actionOne), { contacts: [{ firstName: 'Johnny', lastName: 'Depp' }] });
    assert.deepEqual(reducer(oldState, actionTwo), { contacts: [{ firstName: 'Angelina', lastName: 'Joloe' }, { firstName: 'Johnny', lastName: 'Depp' }] });
  });
});
