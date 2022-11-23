class ReferencesService {
  getCounterCopyingReferences(object) {
    // TODO: assing object to a new variable and return it.
    const newObject = object;
    return newObject;
  }

  getCounterWithoutCopyingReferences(object) {
    // TODO: assing object to a new variable and return it.
    const newObject = { ...object };
    return newObject;
  }

  // @TIP: if you want to do the extra sub-challenge, uncomment and implement the following function:
  getCounterWithoutDeepCopyingReferences(object) {
    // TODO: assing object to a new variable and return it.
    const newObject = JSON.stringify(object);
    return JSON.parse(newObject);
  }
}

module.exports = ReferencesService;
