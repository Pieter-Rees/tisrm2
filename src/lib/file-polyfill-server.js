if (typeof global !== 'undefined' && typeof global.File === 'undefined') {
  global.File = class File {
    constructor() {
      return {};
    }
  };
}

