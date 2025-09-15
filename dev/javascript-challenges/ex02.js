// Merge Sort ist ein bekannter Algorithmus zum Sortieren von Arrays
// Er bezieht seinen Namen daraus, dass die beiden Hälften der Arrays rekursiv sortiert
// und die jeweiligen linken und rechten Hälften danach wieder zusammengefügt werden. 
function merge(left, right) {
  const merged = []
  // wir nehmen solange Element aus dem linken und rechten Teil, bis eine Hälfte keines mehr enthält
  while (left.length && right.length) {
    // falls das Element aus dem linken Teil kleiner ist
    if (left[0] < right[0]) {
      // dann wird das linke Element zum Ergebnis hinzugefügt
      ???
    } else {
      // ansonsten das rechte Element 
      ???
    }
  }
  // schliesslich geben wir die verschmolzenen Elemente zurück
  // plus einen eventuellen Rest aus einer der beiden Hälften
  return [...merged, ...left, ...right]
}

function sort(unsorted) {
  if (unsorted.length < 2) {
    return unsorted
  }

  const middle = (unsorted.length / 2) >> 0;

  const leftSorted = sort(unsorted.splice(0, middle))
  const rightSorted = sort(unsorted)
  return merge(leftSorted, rightSorted)
}

const arr = [12, 11, 13, 5, 8, 10, 6, 7];
const sorted = sort(arr);
const expected = [5, 6, 7, 8,10, 11, 12, 13];
console.assert(sorted.length == expected.length && expected.every((e, i) => sorted[i] === e));
