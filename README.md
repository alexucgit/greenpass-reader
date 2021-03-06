# Verifica GreenPass APP


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)
[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/N4N06L91H)

Progetto generato con [Angular CLI](https://github.com/angular/angular-cli) version 11.2.9.
### [VISUALIZZA LA DEMO](https://greenpass-reader.vercel.app)
Utility [DCC-UTILS](https://github.com/ministero-salute/dcc-utils)

## Prima di iniziare

Nessun dato viene salvato!
Per funzionare necessita del progetto [gp-node](https://github.com/alexucgit/gp-node) installato e avviato oppure lasciate il file environment così com'è per la modalità dev.

## Installazione

Modificare il file environment con l'url della del server node, incluso di porta (es. nodeServer:'http://localhost:3002').

Per avviare il progetto è necessario modificare il file package.json aggiungendo --ssl al "serve" perchè il plugin della fotocamera, per ragioni di sicurezza, lavora in SSL.

```sh
git clone https://github.com/alexucgit/greenpass-reader.git
cd greenpass-reader
npm i
ng serve
```
se non si è modificato il package.json, dopo i primi due comandi eseguire
```sh
ng serve --ssl
```
A server avviato raggiungere l'applicazione all'indirizzo https://localhost:4200


## Immagini di test

Potete scaricare i QRcode di Green Pass e risultati da Test demo da [qui](https://github.com/eu-digital-green-certificates/dgc-testdata/tree/main/IT) oppure potete provare col vostro.

## Interpretazione dei dati

Per l'interpretazione dei dati sono state seguite le indicazioni del [Technical Specifications
for EU Digital COVID Certificates](https://ec.europa.eu/health/sites/default/files/ehealth/docs/covid-certificate_json_specification_en.pdf)

Gli valuesets usati sono stati presi dal github dell'[European eHealth network - digital covid certificate coordination
](https://github.com/ehn-dcc-development/ehn-dcc-schema/tree/release/1.3.0/valuesets)

## License

MIT
**Free Software, Hell Yeah!**
Ogni contributo esterno è utile!
