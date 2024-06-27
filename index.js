import express from 'express';
import bodyParser from "body-parser";

const app = express();
const port = 1000;
app.use(bodyParser.urlencoded({extended: true}));

let card_info = [
    {
        type: 'LIP CREAM',
        title: 'Lip Soufflé Matte Lip Cream',
        des: 'Airy, whipped cream formula glides on easy for full-on color with a featherweight feel.' + 'Velvety matte finish with a soft blurring effect—lips look fuller, smoother, and more plump.\n' + 'Hydrates, softens, and stays put. Lips feel comfortable all day—no drying or caking here!\n' + 'Precise applicator tip makes it easy to apply.',
        price: '19.9',
        src: "./images/rare.webp"
    },
    {
        type: 'PILLOW KIT\n',
        title: 'TALK LIP KIT\n',
        des: 'Darlings, unlock the pout-perfecting secrets behind my PILLOW TALK EFFECT with the Pillow Talk Lip Kit!\n' + 'Pillow Talk is EVERYONE\'S PERFECT SHADE! Loved by celebrities, supermodels and icons across the globe, my suits-all Pillow Talk lipsticks and lip liners are the secret to sumptuous, fuller, wider looking lips!\n' + '\n',
        price: '19.9',
        src: './images/tibury.jpeg'

    },
    {
        type: 'lipstick',
        title: 'Romand Lipstick\n',
        des: 'No information yet...\n',
        price: '19.9',
        src: './images/romand-glasting-nude.webp'

    },
    {
        type: 'lip glose',
        title: 'Anasasia Lip Glose',
        des: 'no info yet...\n',
        price: '19.9',
        src: './images/anasasia-lig-glose.webp'

    },
    {
        type: 'lipstick',
        title: 'KIKO Lipstick',
        des: 'no information yet...\n',
        price: '19.9',
        src: './images/kiko.webp'

    },
    {
        type: 'balm',
        title: 'Clio Galm Balm',
        des: 'no information yet...\n',
        price: '19.9',
        src: "./images/clio-crystal-glam-balm.jpeg"

    },
    {
        type: 'lipstick',
        title: 'Lip Oil Rose\n',
        des: 'no information yet...',
        price: '19.9',
        src: "./images/lip-oil-rose.jpeg"

    },
    {
        type: 'lipstick',
        title: 'Jelly Lipstick\n',
        des: 'no information yet...',
        price: '19.9',
        src: './images/jelly-lipstick.jpeg'

    },
    {
        type: 'Powder',
        title: 'Gircult Powder\n',
        des: 'no information yet...',
        price: '19.9',
        src: "./images/gircult.webp"
    },
    {
        type: 'Powder',
        title: 'Handaiyan Powder\n',
        des: 'no information yet...',
        price: '19.9',
        src: "./images/handaiyan.webp"
    },
    {
        type: 'Powder', title: 'Nars Powder', des: 'no information yet...', price: '19.9', src: "./images/nars.webp"
    },
    {
        type: 'Powder',
        title: 'Novo Powder\n',
        des: 'no information yet...',
        price: '19.9',
        src: "./images/novo-powder-silky.webp"

    },
    {
        type: 'EYESHADOW PALETTES\n',
        title: 'Charllotte Tibery\n',
        des: 'Bigger Brighter Eyes in Exagger-Eyes is a rose-gold eyeshadow palette quad, featuring an ivory-cream,\n' + ' rose-gold, red-brown and a transparent sparkle shade to create the illusion of wider, brighter-looking eyes. \n' + 'Inspired by the sparkling, eye-widening filters of social media!',
        price: '19.9',
        src: "./images/eye.jpeg"
    },
    {
        type: 'bag',
        title: 'Givengy Bag\n',
        des: 'no information yet...\n',
        price: '19.9',
        src: "./images/givengy-bag.jpeg"

    },
    {
        type: 'Bag',
        title: 'Hermes Bag\n',
        des: 'no information yet...\n',
        price: '19.9',
        src: "./images/hermes-bag.webp"

    },
    {
        type: 'bag',
        title: 'Dior Bag',
        des: 'no information yet...\n',
        price: '19.9',
        src: "./images/dior-white-bag.jpeg"
    },
    {
        type: 'brush set',
        title: 'Vegan Brush Set\n',
        des: 'ZOEVA Makeup Brush Sets are the perfect addition to your beauty kit. Distinctively stylish and available in different shapes, sizes and functions to make all your beautiful dreams come true.',
        price: '19.9',
        src: "./images/zoeva.webp"
    },
    {
        type: 'brush set',
        title: 'Dior Makeup Indenim Set',
        des: 'no information yet...\n',
        price: '19.9',
        src: "./images/dior-indenim.jpeg"

    },
    {
        type: 'brush set',
        title: 'Zoeva Brush Set',
        des: 'no information yet...\n',
        price: '19.9',
        src: "./images/zoeva2.webp"
    },
    {
        type: 'sponge',
        title: 'Oem Sponge\n\n',
        des: '3pcs sponge for applying any liquid makeup with a uniform effect and a support base for easier drying. Ideal for laying foundation evenly on cheeks, chin and forehead, without leaving any marks or lines. After each use, rinse the sponge with liquid soap.',
        price: '19.9',
        src: "./images/noBg.jpeg"
    },
    {
        type: 'brush set',
        title: 'Sheonly Brush Set\n',
        des: 'no information yet...\n',
        price: '19.9',
        src: "./images/brush-set.webp"
    },
    {
        type: 'Hair comb',
        title: 'Vibe Comb\n',
        des: 'Light weight detangling hair brush wet & dry rectangle shape glides through the hair to gently untangle even the toughest tangles with ease. This hair brush is designed brilliantly to minimize pain and protect hair against split ends and breakage.',
        price: '19.9',
        src: "./images/vibe.jpeg"
    },
    {
        type: 'Mirror',
        title: 'Dior Lather Mirror\n',
        des: 'no information yet...',
        price: '19.9',
        src: "./images/dio-mirror.webp"
    },
    {
        type: 'CURLER',
        title: 'Eyelash Curler\n',
        des: 'no information yet...',
        price: '19.9',
        src: "./images/eyelash-curler.webp"
    }
]

app.use(express.static("public"));


app.get('/', async (req, res) => {
    res.render('index.ejs', {
        card_info: card_info,
    });
})

app.get('/detailed_info', async (req, res) => {
    let id = req.query.id;
    res.render('more_info.ejs', {
        card_info: card_info[id],
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});