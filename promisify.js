function promisify(fn, callback = true) {
  if (typeof (fn !== "function")) {
    return "first argument is not a function";
  }

  return function (...args) {
    return new Promise((resolve, reject) => {
      f;
      function callbackHandler(error, result) {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }

      if (callback) {
        fn(...args, callbackHandler);
      } else {
        try {
          const result = fn(...args);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      }
    });
  };
}
