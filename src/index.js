import fs from 'fs'
import settings from './settings.js';

let tokens = []

let theme = buildTheme("Lionheart", settings, tokens);

function buildTheme(name, colors, tokenColors) {
    let theme = { name: name, colors: { ...colors }, tokenColors }
    return theme;
}

fs.writeFile('./themes/lionheart-color-theme.json', JSON.stringify(theme), (err) => {
    if (err) console.log('Something went wrong!');

    console.log(`${theme.name} was created!`);
});