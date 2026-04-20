# Models
Els noms de les interfícies i de les propietats les he adaptat per fer-les compatibles amb la meva aplicació.

### Interfícies
| Nom enunciat        | Nom aplicació      |
| ------------------- | ------------------ |
| ElementApiResponse  | PaymentApiResponse |
| ElementCataleg      | Pagament           |

### Propietats
| ElementApiResponse  | PaymentApiResponse  | Pagament        | Tipus                       |
| ------------------- | ------------------- | --------------- | --------------------------- |
| id                  | id                  | id              | `string`                    |
| nom                 | name                | nom             | `string`                    |
| descripcio          | notes               | notes           | `string`                    |
| categoria           | category            | categoria       | `string`                    |
| preu                | amount              | quantitat       | `number`                    |
| imatge              | icon                | icona           | `string`                    |
| popular             | isRecurring         | esRecurrent     | `boolean`                   |
| stock               | timestamp           | data            | `number` / `Date`           |
| ---                 | paymentMethod       | metodePagament  | `string` / `PaymentMethod`  |   

### Adaptadors
El fitxer amb els adaptadors l'he anomenat `pagament.adaptador.ts`, els seus mètodes són:
- adaptarPagamentApi
- adaptarPagamentsApi
