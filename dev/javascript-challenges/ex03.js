// das Sieb des Eratosthenes ist ein Algorithmus, um alle Primzahlen bis zu einem
// gewissen Punkt zu bestimmen
function findPrimesEratosthenes(limit) {
  const primes = Array(limit + 1)
  .fill(false, 0, 2) // 0 und 1 gelten hier nicht als Primzahlen
  .fill(true, 2, limit) // während alle anderen erstmal Kandidaten sind

  // 2 ist die erste Primzahl, von hier aus gehen wir durch die Kandidaten
  for (i = 2; i <= limit; i++) {
    // falls die aktuelle Zahl eine Primzahl ist
    if (primes[i]) {
      // dann können wir alle ihre Vielfachen als nicht-prim markieren
      for (j = ???; j <= limit; ???) {
        primes[j] = false;
      }
    }
  }

  return primes
}

const primes = findPrimesEratosthenes(1000);
const numberOfPrimes = primes.filter((b) => b).length;
console.assert(numberOfPrimes === 168);
