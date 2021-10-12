# Verifica GreenPass node-server


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Progetto generato con [Angular CLI](https://github.com/angular/angular-cli) version 11.2.9.

## Prima di iniziare

Nessun dato viene salvato!

## Installazione

Per avviare il progetto è necessario modificare il file package.json sostituendo a 192.168.1.113 l'ip della macchina sulla quale si esegue la web app.
Il plugin della fotocamera, per ragioni di sicurezza, lavora in SSL.
A server avviato raggiungere l'applicazione all'indirizzo https://TUOIP:4200


```sh
cd greenpass
npm i
ng serve --host xxx.xxx.xxx.xxx --ssl
```

## Immagini di test

Potete scaricare i QRcode di Green Pass demo da [qui](https://github.com/ministero-salute/dcc-utils/tree/master/test/test_data) oppure potete provare col vostro.
Per comodità viene visualizzato solo nome, cognome e data di nascita del cittadino.
E' poossibile aggiungere informazioni sulla vaccinazione (luogo, data, numero dosi...)
## License

MIT
**Free Software, Hell Yeah!**

Ogni contributo esterno è utile!
