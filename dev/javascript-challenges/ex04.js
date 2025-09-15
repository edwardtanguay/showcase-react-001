// der Longest Prefix Suffix (LPS) Array wurde im Rahmen des Muster-Suche-Algorithmus von
// Knuth, Morris und Pratt (KMP Search) erfunden. Er erzeugt einen Array der gleichen Länge
// wie das Such-Muster, wobei jedes Element der Anzahl der Zeichen entspricht, die an der
// jeweiligen Stelle von Beginn des Musters wiederholt wurden.
// Das grösste mögliche Suffix ist also immer die Hälfte der Gesamtlänge des Suchmusters:
// in diesem Fall wären Beginn und Ende des Textes gleich.
// Beispiel: AABAABA -> 0101234
function buildLPS(pattern) {
  const lps = Array(pattern.length).fill(0);
  let len = 0, i = 1;
  // wir beginnen die Suche beim zweiten Zeichen (das erste ist immer 0)
  // bis zum Ende des Musters
  while (i < pattern.length) {
    // falls das aktuelle Zeichen immer noch ein gültiges Prefix bezeichnet
    if (???) {
      // wird das Prefix noch länger und dem aktuellen Zeichen zugewiesen
      // bevor es mit dem nächsten weitergeht
      lps[i++] = ++len;
    } else {
      if (len !== 0) {
        len = lps[len - 1];
      } else {
        ???; // es gibt keine Überschneidungen mehr: weiter mit dem nächsten Zeichen
      }
    }
  }
  return lps;
}

const pattern = "AABABABBAABA";
const lps = buildLPS(pattern);
const expected = [0, 1, 0, 1, 0, 1, 0, 0, 1, 2, 3, 4];
console.assert(arrayEquals(expected, lps));
