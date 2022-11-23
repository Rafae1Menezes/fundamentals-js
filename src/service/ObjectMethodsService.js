class ObjectMethodsService {
  getEnhancedObject(rawObject) {
    // TODO: return an enhanced object implementing `valueOf` or `toString` depending on the context

    const object = {
      ...rawObject,
      valueOf: () => rawObject.age,
    };
    return object;
  }

  getEnhancedObject2(rawObject) {
    // TODO: return an enhanced object implementing `valueOf` or `toString` depending on the context

    const object = {
      ...rawObject,
      toString: () => `[name="${rawObject.name}",age=${rawObject.age}]`,
    };
    return object;
  }

  getEnhancedObjectWithoutValueOfOrToString(rawObject) {
    // TODO: return an enhanced object **WITHOUT** implementing `valueOf` nor `toString`.
    // Note: Implementing `toString` and `valueOf` will NOT be allowed in this function.

    const object = {
      ...rawObject,
      [Symbol.toPrimitive]: (type) => {
        if (type === "number") return rawObject.age;
        else return `[name="${rawObject.name}",age=${rawObject.age}]`;
      },
    };
    return object;
  }
}

module.exports = ObjectMethodsService;
