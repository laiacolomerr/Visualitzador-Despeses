# Formularis
## Cerca
El formulari consisteix en un camp de text per cercar pagaments que el seu nom contingui el substring introduït, un botó per realitzar la cerca i un botó per netejar el formulari i mostrar la llista original.

### Validadors
#### Síncrons
- Longitud mínima de dos caràcters.
- Longitud màxima de cinquanta caràcters.

#### Asíncrons
- Validador implementat a `sense-resultats-validador.ts` que comprova si hi ha pagaments que continguin el substring que hi ha al camp de cerca. Si no passa la validació retorna l'error `senseResultats: true`.

### Debounce
Quan l'usuari escriu al formulari, es realitza una cerca automàtica si passen 400ms des de l'última tecla premuda.