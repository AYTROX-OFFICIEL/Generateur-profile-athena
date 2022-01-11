<!-- By AYTROX -->

Made By [AYTROX](https://aytrox.com/?=readme-Generateur-profile-athena)

## Home

<p align="center">Generateur profile-athena V1.0.1<p><br>
  <p align="center">(Fortnite profile-athena generator for private servers)<p>
    <p align="center">(Générateur de profile-athena Fortnite pour les serveurs privés)<p>
      
## Menu
      
<ol>
  <li><a href="#home">Home</a></li>
  <li><a href="#intro">Intro</a></li>
  <li><a href="#install">Install</a></li>
  <li><a href="#options">Options</a></li>
  <li><a href="#credits">Credits</a></li>
  <li><a href="#licence">Licence</a></li>
</ol>


## Intro

-FR (Le Générateur de profile-athena Fortnite sert à Générer des **Cosmetics** Fortnite automatiquement pour les serveurs privé dont le mien ([AYTROX V4](https://github.com/AYTROX-OFFICIEL/AYTROX-V4)))

-EN (Fortnite's profile-athena generator is used to generate Fortnite **Cosmetics** automatically for private servers including mine ([AYTROX V4](https://github.com/AYTROX-OFFICIEL/AYTROX-V4)))

## Install

- installer la version 16.13.2 de **[NodeJs](https://nodejs.org/dist/v16.13.2/node-v16.13.2-x64.msi)**
- Extraire le fichier `Generateur-profile-athena-main.zip`
- Ouvrir `install.bat` attendre la fin de l'installation.
- Lancer le fichier `run.exe`

## Options

Vous pouvez mofifier l'option de génération dans le fichier ``index.js`` vous devez aller en bas de la page est modifier optionone() par optiontwo()
```js
// optionone() sert à générer tout les Cosmetics
optionone()
// remplacer par
optiontwo()
// optiontwo() sert à générer seulement les nouveau Cosmetics

```
<br>
Vous pouvez modifier le lien du site de Génération...<br>
(You can modify the link of the Generation site...)

```json
{
    "host": "localhost",
    "directory": "__dirname",
    "dir": "__dirname",
    "liendefault": ``"https://fortnite-api.com/v2/cosmetics/br/"``,
    "liensecond": ``"https://fortnite-api.com/v2/cosmetics/br/new"``,
    "version": "1.0.1",
    "author": "AYTROX",
    "website": "https://aytrox.com"
}
```

## Credits

Language utilisé: **[JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript) :**
        <br/>
	</br>
	<img src="https://i.imgur.com/cbpCqLw.png" width="70" height="70" title="Javascript">
	<br/>
	</br>
	<br>
	• **[Node.Js](https://nodejs.org/fr/about/) :**<br/>
	<img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg" width="110" height="110" title="Node.JS"><br>
  <br>
  application utilisé: 
  
  • **[Visual Studio Code](https://code.visualstudio.com/)** <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png" width="30" title="Visual Studio Code"> Créer par [Microsoft](https://github.com/microsoft)<br>
  <br>
  • **[Fortnite-api](https://fortnite-api.com/)** <img src="https://fortnite-api.com/assets/img/logo_transparent.png?v=2021_7" width="60" title="Fortnite-api"> Créer par [Officer](https://github.com/NotOfficer)


## Licence

Ce projet est licencié par [Apache License 2.0](https://github.com/AYTROX-OFFICIEL/Generateur-profile-athena/blob/main/LICENSE)
