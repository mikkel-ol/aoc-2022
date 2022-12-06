declare global {
  interface Array<T> {
    chunkByDelim: (delim: string) => T[][];
    max: () => T;
    distinct: () => boolean;
  }
}

if (!Array.prototype.chunkByDelim) {
  Array.prototype.chunkByDelim = function <T>(delim: string) {
    const newArr: T[][] = [];

    let i = 0;

    for (const entry of this) {
      if (!newArr[i]) newArr[i] = [];

      newArr[i].push(entry);

      if (entry === delim) {
        i += 1;
      }
    }

    return newArr;
  };
}

if (!Array.prototype.max) {
  Array.prototype.max = function () {
    return this.sort((a, b) => b - a)[0];
  };
}

if (!Array.prototype.distinct) {
  Array.prototype.distinct = function <T>() {
    const set = new Set<T>();

    this.forEach((x) => set.add(x));

    return set.size === this.length;
  };
}

export {};
