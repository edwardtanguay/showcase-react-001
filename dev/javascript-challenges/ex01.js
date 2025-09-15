// der Floyd Algorithmus zur Schleifenerkennung ist so einfach wie schlau.
// Ersetze im folgenden Code die "???" Platzhalter durch den entsprechenden Code.
// Mit dem Beginn einer Liste von verketteten Elementen aufgerufen
function hasCycleFloyd(head) {
	// durchläuft man diese in zwei Geschwindigkeiten
	let slow = head,
		fast = head;
	// bis der schnelle Teil am Ende angelangt ist
	while (fast !== null && fast.next !== null) {
		// der langsame Teil bewegt sich dabei ein Element weiter
		// SOLVE:
		slow = slow.next; // ???
		// der schnelle Teil doppelt so schnell
		// SOLVE:
		fast = fast.next.next; // ???
		// sollten sich die beiden treffen, wurde eine Schleife gefunden
		if (slow === fast) {
			return true;
		}
	}
	// aber wenn man das Ende erreicht, ist keine Schleife vorhanden
	return false;
}

// zuerst testen wir eine Liste ohne Schleife
const head = [1, 2, 3, 4, 5]
	.map((i) => {
		return { item: i, next: null };
	})
	.reduce((a, e) => {
		e.next = a;
		return e;
	});

console.log("start");

// first test a list without a cycle
// console.assert(!hasCycleFloyd(head));
console.log(JSON.stringify(head, null, 2));
console.log(111, hasCycleFloyd(head));
// dann fügen wir eine Schleife ein
head.next.next.next.next = head.next.next;

// jetzt testen wir eine Liste mit Schleife
// console.assert(hasCycleFloyd(head));
// console.log(JSON.stringify(head, null, 2)); // can't print because it's a cycle
console.log(222, hasCycleFloyd(head));

// why do we need two speeds
// because if there is a cycle, the fast pointer will eventually meet the slow pointer
// Fast pointer moves 2x faster than slow pointer
// In a cycle, the fast pointer will eventually "lap" the slow pointer
// When they meet, we know there's a cycle
