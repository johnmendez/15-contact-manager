export function findAll ( [action] ) {
  return {
    type: 'CONTACT@FIND_ALL',
    data: {action},
  };
}

export function createContact(data) {
  return {
    type: 'CONTACT@CREATE',
    data: { ...data, id: new Date() }
  };
}

export function removeContact(id) {
  return {
    type: 'CONTACT@DETELE',
    id,
  };
}
