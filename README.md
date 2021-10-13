# Verifica GreenPass APP


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Progetto generato con [Angular CLI](https://github.com/angular/angular-cli) version 11.2.9.

## Prima di iniziare

Nessun dato viene salvato!
Per funzionare necessita del progetto [gp-node](https://github.com/alexucgit/gp-node) installato e avviato.

## Installazione

Modificare il file environment con l'ip della macchina che ospita l'applicazione node, incluso di porta (default http://localhost:3002).

Per avviare il progetto è necessario modificare il file package.json aggiungendo --ssl al "serve" perchè il plugin della fotocamera, per ragioni di sicurezza, lavora in SSL.

```sh
cd greenpass
npm i
ng serve
```
se non si è modificato il package.json, dopo i primi due comandi eseguire
```sh
ng serve --ssl
```
A server avviato raggiungere l'applicazione all'indirizzo https:/localhost:4200


## Immagini di test

Potete scaricare i QRcode di Green Pass demo da [qui](https://github.com/ministero-salute/dcc-utils/tree/master/test/test_data) oppure potete provare col vostro.

## License

MIT
**Free Software, Hell Yeah!**
Ogni contributo esterno è utile!
###### Grazie a [Guido Porcaro](https://github.com/elgorditosalsero) per le dritte
