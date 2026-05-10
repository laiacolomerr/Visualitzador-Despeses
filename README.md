# Visualitzador de despeses
Aquesta aplicació està dissenyada per guardar i visualitzar les despeses personals.

L'objectiu és portar un control d'aquestes despeses, de manera que es pugui planejar millor l'estalvi, així com les possibles despeses futures.


# Mapa de rutes

| Path          | Component                     | Accés  |
| ------------- | ----------------------------- | ------ |
| `pagaments`   | LlistaPagamentsComponent      | públic |
| `cerca`       | LlistaPagamentsCercaComponent | públic |
| `destacats`   | PagamentPageComponent         | privat |
| `detall/:id`  | PagamentComponent             | públic |
| `login`       | LoginComponent                | públic |


# Instruccions d'execució en local
Clonar el projecte al nostre ordinador:
```bash
git clone https://github.com/laiacolomerr/Visualitzador-Despeses.git
```

Accedir al projecte:
```bash
cd Visualitzador-Despeses
```

Instal·lar les dependències del projecte:
```bash
npm install
```

Executar el projecte en local, per accedir-hi s'ha d'introduir la URL `http://localhost:4200`al navegador.
```bash
ng serve
```

# Build de producció
Per generar el build de producció cal executar la següent comanda:
```bash
ng build
```
La mida total dels fitxers generats és aproximadament de 631.28 kB.

# Credencials de prova
Per accedir a la secció protegida cal introduir les següents credencials:

- email: admin@test.com

- contrasenya: 1234