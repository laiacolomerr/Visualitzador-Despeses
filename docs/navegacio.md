# Navegació

| Path          | Component                     | Accés  |
| ------------- | ----------------------------- | ------ |
| `pagaments`   | LlistaPagamentsComponent      | públic |
| `cerca`       | LlistaPagamentsCercaComponent | públic |
| `destacats`   | PagamentPageComponent         | privat |
| `detall/:id`  | PagamentComponent             | públic |
| `login`       | LoginComponent                | públic |

## Configuracions
### provideRouter
He afegit als providers de l'`app.config.ts` el `provideRouter` importat d'`@angular/router`. He hagut d'afegir les rutes que exporto des del fitxer `app.routes.ts` com a paràmetre del provider.

### RouterOutlet
Als imports  d'`app.component.ts` he afegit el `RouterModule` que m'ha permès utilitzar l'element `<router-outlet></router-outlet>` al seu html, que renderitza l'element corresponent a la ruta actual, configurada a l'`app.routes.ts`.

### RouterLink
Al component `barra-menu.component` he creat un menú amb botons utilitzant `<a>`, per poder configurar enllaços. A cada un dels tags he afegit l'atribut `routerLink` amb la ruta a la quan ha de navegar. També he hagut d'importar `RouterModule`, d'altra manera els atributs no funcionen.