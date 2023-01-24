// Функция интератор для класса Team

export default function iterable(set) {
  return {
    ...set,
    [Symbol.iterator]() {
      const setVar = Object.keys(set);
      const arr = [...set[setVar]]; // set to array
      const limit = arr.length;
      let count = 0;
      return {
        next() {
          if (count < limit) {
            return {
              done: false,
              value: arr[count++],
            };
          }
          return {
            done: true,
          };
        },
      };
    },
  };
}
