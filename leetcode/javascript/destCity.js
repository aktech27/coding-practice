/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  const set1 = new Set();
  const set2 = new Set();

  for (const path of paths) {
    set1.add(path[0]);
    set1.add(path[1]);
    set2.add(path[0]);
  }

  return set1.difference(set2).values().next().value;
};

console.log(destCity([["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]]));
console.log(destCity([["B", "C"], ["D", "B"], ["C", "A"]]));
console.log(destCity([["A", "Z"]]));