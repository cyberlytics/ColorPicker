# WAE-TeamGelb

##  :file_folder: Ordner

- client -> react
- server -> express
- data -> Datenbank (von mongoDB)



## :computer: React

Muss im Ordner `client` ausgeführt werden

#### Installation

`npm install`

#### Start

`npm start`



## :gear: Express

Muss im Ordner `server` ausgeführt werden

#### Installation
`npm install`

#### Start
`npm run dev`

führt dann das Script `dev` in package.json aus: `nodemon server.js`

Nodemon startet den Server automatisch neu, wenn Änderungen gespeichert werden.



## :floppy_disk: MongoDB

#### Installation

https://www.mongodb.com/try/download/community

#### Start

`"C:\Program Files\MongoDB\Server\4.4\bin\mongod.exe" --dbpath="C:\Users\Fabi\Desktop\Code\OTH WAE\wae-teamgelb\sys-src\data"`

Startet MongoDB mit der Datenbank in unserem Verzeichnis.

Wahrscheinlich müsst ihr dann noch selbst eine Datenbank mit dem Namen `colorpicker` erstellen (mit Console oder MongoDB Compass)



## :mega: Allgemein

- `npm istall` muss auch wieder ausgeführt werden wenn sich etwas in der `package.json` ändert (wenn zum Beispiel ein anderer ein neues Paket mit mit npm install hinzugefügt hat)