// Made By AYTROX V1.0.1

const bodyParser = require('body-parser');
const express = require('express');
const package = require('./package.json')
const fs = require('fs');
const config = require('./config.json');
const axios = require('axios');
const consoleoutput = require('./structs/consoleoutput');

console.info(`\n\n    Generateur by \x1b[34m${package.author}\x1b[0m \x1b[35mV ${config.version}\x1b[0m\n`)


function optionone() {
    class backend {
    
        get directory() {
            return `${__dirname}`;
        }
    
        constructor() {
            this.config = require(`${this.directory}/config.json`);
            consoleoutput.log(`\x1b[33mVeuillez attendre le chargement du lien...\x1b[0m`);
            this.app = express();
        }
    
        loadProfile(profileId) {
            return JSON.parse(fs.readFileSync(`${this.directory}/profile/profile_${profileId}.json`));
        };
    
        async updateAthena() {
            while (true) {
                const req = await axios.get(
                    config.liendefault ,
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
            this.app.listen(
                this.config.port,
            )
        }
    }
    backendClass = new backend();
    backendClass.init();
};






function optiontwo() {
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
            this.app.listen(
                this.config.port,
            )
        }
    }
    backendClass = new backend();
    backendClass.init();
};

optionone()