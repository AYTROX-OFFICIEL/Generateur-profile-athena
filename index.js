// Made By AYTROX V1.0.3

const bodyParser = require('body-parser');
const express = require('express');
const package = require('./package.json')
const fs = require('fs');
const version = require('./config.json').version;
const config = require('./config.json');
const option = require('./config.json').option;
const axios = require('axios');
const axiosPackage = require('axios/package.json');
const consoleoutput = require('./structs/consoleoutput');
const versionCompare = require('compare-versions');

console.info(`\n\n    Generateur by \x1b[34m${package.author}\x1b[0m \x1b[35mV ${version}\x1b[0m\n`)

axios.defaults.headers["user-agent"] = `AYTROXServer/${version} axios/${axiosPackage.version}`;

axios.get('https://raw.githubusercontent.com/AYTROX-OFFICIEL/Generateur-profile-athena/main/package.json', { validateStatus: undefined }).then((response) => {
	if (response.status == 200) {
		var compare = versionCompare(response.data.version, version);

		if (compare > 0) {
			console.log('\n')
			consoleoutput.warn(`UNE NOUVELLE MISE À JOUR EST DISPONIBLE!!!.\nVERSION ${response.data.version} EST MAINTENANT DISPONIBLE\nVOUS AVEZ ACTUELLEMENT LA VERSION ${version}`, false)
		}
	}
});

/* dans le fichier config.json aller dans la catégorie "option" entrer soit "1" ou "2" (1 signifie tout les cosmetics et 2 seulment les nouveaux)
  (pour plus d'info: https://github.com/AYTROX-OFFICIEL/Generateur-profile-athena#options)
*/

if (option == 1) {
    class backend {
        get directory() {
            return `${__dirname}`;
        }
    
        constructor() {
            consoleoutput.log(`\x1b[33mVeuillez attendre le chargement du lien...\x1b[0m`);
            this.app = express();
        }
    
        loadProfile(profileId) {
            return JSON.parse(fs.readFileSync(`${this.directory}/profile/profile_${profileId}.json`));
        };
    
        async updateAthena() {
            while (true) {
                const req = await axios.get(
                    config.liendefault,
                    consoleoutput.log(`Chargement du lien (\x1b[32m${config.liendefault}\x1b[0m) Finis!`),
                    consoleoutput.log('Ajout des Cosmetics dans le fichier...')
                );
                var athena = this.loadProfile("athena");
                var items = req.data.data;
    
                items.forEach(
                    cosmetic => {
                        var cosmeticVariants = [];
    
                        if (cosmetic.variants) {
                            cosmetic.variants.forEach(
                                variant => {
                                    var owned = [];
                                    variant.options.forEach(option => {owned.push(option.tag)});
                                    cosmeticVariants.push({
                                            'channel': variant.channel,
                                            'active': owned[0],
                                            'owned': owned
                                        })
                                })
                        };
    
                        athena.items[`${cosmetic.type.backendValue}:${cosmetic.id}`] = {
                            'templateId': `${cosmetic.type.backendValue}:${cosmetic.id}`,
                            'attributes': {
                                'max_level_bonus': 99999,
                                'level': 9999,
                                'item_seen': true,
                                'rnd_sel_cnt': 0,
                                'xp': 9999,
                                'variants': cosmeticVariants,
                                'favorite': false 
                            },
                            'quantity': 1
                        };
                    }
                )
                fs.writeFileSync(`${this.directory}/profile/profile_athena.json`, JSON.stringify(athena, null, 2));
                consoleoutput.log("Les Cosmetics ont bien été changer!")
                console.log('\nVous pouvez quitter la fenêtre!!!')
                await new Promise(r => setTimeout(r, 1000000));
            }
        }
    
        router() {
            this.app.use(
                (req, res, next) => {
                  
                    consoleoutput.request(`${req.url}`);
                    next();
                }
            )
    
               this.app.use("/", express.static("public"));
        }
    
        init() {
            this.app.use(bodyParser.json());
            this.app.use(bodyParser.urlencoded({
                extended: true
            }));
            
            this.updateAthena();
            this.router();
        }
    }
    backendClass = new backend();
    backendClass.init();
};




if (option == 2) {
    consoleoutput.log(`\x1b[33mVeuillez attendre le chargement du lien...\x1b[0m`);
    class backend {
    
        get directory() {
            return `${__dirname}`;
        }
    
        constructor() {
            this.config = require(`${this.directory}/config.json`);
            this.app = express();
        }
    
        loadProfile(profileId) {
            return JSON.parse(fs.readFileSync(`${this.directory}/profile/profile_${profileId}.json`));
        };
    
        async updateAthena() {
            while (true) {
                consoleoutput.log(`Chargement du lien (\x1b[32m${config.liensecond}\x1b[0m) Finis!`)
                const req = await axios.get(
                    config.liensecond
                );
                var athena = this.loadProfile("athena");
                var items = req.data.data.items;
    
                items.forEach(
                    cosmetic => {
                        var cosmeticVariants = [];
    
                        if (cosmetic.variants) {
                            cosmetic.variants.forEach(
                                variant => {
                                    var owned = [];
                                    variant.options.forEach(option => {owned.push(option.tag)});
                                    cosmeticVariants.push({
                                            'channel': variant.channel,
                                            'active': owned[0],
                                            'owned': owned
                                        })
                                })
                        };
    
                        athena.items[`${cosmetic.type.backendValue}:${cosmetic.id}`] = {
                            'templateId': `${cosmetic.type.backendValue}:${cosmetic.id}`,
                            'attributes': {
                                'max_level_bonus': 99999,
                                'level': 9999,
                                'item_seen': true,
                                'rnd_sel_cnt': 0,
                                'xp': 9999,
                                'variants': cosmeticVariants,
                                'favorite': false 
                            },
                            'quantity': 1
                        };
                    },
                    consoleoutput.log('Ajout des Cosmetics dans le fichier...')
                )
                fs.writeFileSync(`${this.directory}/profile/profile_athena.json`, JSON.stringify(athena, null, 2));
                consoleoutput.log("Les Cosmetics ont bien été changer!")
                console.log('\nVous pouvez quitter la fenêtre!!!')
                await new Promise(r => setTimeout(r, 1000000));
            }
        }
    
        router() {
            this.app.use(
                (req, res, next) => {
                  
                    consoleoutput.request(`${req.url}`);
                    next();
                }
            )
    
               this.app.use("/", express.static("public"));
        }
    
        init() {
            this.app.use(bodyParser.json());
            this.app.use(bodyParser.urlencoded({
                extended: true
            }));
            
            this.updateAthena();
            this.router();
        }
    }
    backendClass = new backend();
    backendClass.init();
};