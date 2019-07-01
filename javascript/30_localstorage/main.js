console.log('hallo world');

// localStorage
//
// .getItem(itemName) liest item aus
// .setItem(itemName, itemWert) setzt neues item
// .removeItem(itemName) löscht item
// .clear() löscht localStorage


// Aufgabe:
//
// Implementiere folgende Funktionalität:
// 1) Wenn der Nutzer auf "Benutzername lokal speichern" klickt, soll der Benutzername aus dem Input-text in der localStorage gespeichert werden.
// 2) Wenn der Nutzer auf Benutzername löschen klickt, soll der Benutzername aus dem localStorage gelöscht werden
// 3) Wenn der Nutzer die Seite neu lädt, soll eine Begrüßung zu sehen sein: "Hallo " + nutzername. Allerdings nur, falls getItem nicht null zurückliefert, d.h. falls der Nutzername gespeichert ist.