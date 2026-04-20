# Serveis
## Pagament
El servei `PagamentService` realitza consultes contra un json-server. La comanda per posar-lo en marxa és:

```bash
json-server --watch tools/api/despeses.json --port 4301
```
>El paràmetre `--delay` es va eliminar a partir de versions més modernes.

### Estats
Es pot saber l'estat del servei a partir de 3 `signals`.
- `payments`: llista de pagaments, buida si no hi ha dades o hi ha un error a l'aplicació.
- `loading`: booleana, només en `true` si s'està esperant una resposta del servidor.
- `error`: per defecte a `null`, però amb el missatge d'error si se n'ha produït un en realitzar una crida

### Endpoints
L'URL base de totes les peticions és `http://localhost:4301/despeses`. Tots els serveis que omplen el signal `payments` posen a `true` el `loading` abans de fer la petició i el retornen al valor per defecte en finalitzar. Si hi ha un error s'assigna el missatge a `error`

#### Obtenir Recurrents
Cal afegir un filtre indicat que només volem els que `isRecuring` sigui `true`. Ho implementa el mètode `obtenirRecurrents`.

```
http://localhost:4301/despeses?isRecurring=true
```

#### Cercar
rep per paràmetre un camp de tipus `string` i l'envia al servidor per filtrar tots els elements que el continguin en el nom. Ho implementa el mètode `cercar`.

Hi ha el mètode `search` que retorna un Observable de tipus `PaymentApiResponse`, és necessari per al validador asíncron `senseResultatsValidator`.

## Destacats
Conté un signal privat amb la llista de pagaments destacats (`pagamentsDestacats`). També en té un altre de públic per poder consultar els valors (`destacats`) i un computed amb el nombre de pagaments destacats (`totalDestacats`).

### Mètodes
- `afegirDestacat`: afegeix un destacat a la llista i el guarda al local storage.
- `eliminarDestacat`: elimina un element destacat de la llista i del local storage.
- `esDestacat`: retorna `true` si l'element és destacat.
- `obtenirDestacat`: retorna un Pagament destacat del signal, a partir de la seva id.
- `afegirNota`: afegeix una nota al pagament que té la id passada per paràmetre i actualitza el local storage
- `eliminarNota`: elimina la nota a la posició passada per paràmetre del pagament que té la id passada per paràmetre i actualitza el local storage
- `desarDestacats`: mètode privat per guardar la llista de destacats al local storage
- `carregarDestacats`: mètode privat per carregar la llista de destacats del local storage