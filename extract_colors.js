const ColorThief = require('colorthief');
const path = require('path');

const imgPath = 'C:/Users/USER/.gemini/antigravity/brain/b7b9bd4f-433e-4b29-9a47-7ca8931a1488/uploaded_media_1769831096738.jpg';

ColorThief.getPalette(imgPath, 5)
    .then(palette => {
        console.log('Palette:');
        palette.forEach(color => {
            const hex = '#' + color.map(x => {
                const hex = x.toString(16);
                return hex.length === 1 ? '0' + hex : hex;
            }).join('');
            console.log(hex);
        });
    })
    .catch(err => {
        console.error('Error:', err);
    });
