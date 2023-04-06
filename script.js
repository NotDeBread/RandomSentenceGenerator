const P1D = '<span id="P1" class="person1"></span>'
const P2D = '<span id="P2" class="person2"></span>'
const O1D = '<span id="O1" class="object1"></span>'
const O2D = '<span id="O2" class="object2"></span>'

const F1 = document.getElementById('friend1')
const F2 = document.getElementById('friend2')
const F3 = document.getElementById('friend3')

const people = [
    'Obama',
    'Racism',
    'Microsoft Defender',
    'Duolingo Owl',
    'Walter White',
    'Saul Goodman',
    'Black Baby Yoda',
    'Big floppa',
    'Bingus',
    'Giga Chad',
    'Glen Quagmire',
    'Skylar White',
    'SpongeBob',
    'Mr. Beast',
    'Joe Biden',
    'Donald Trump',
    'DeBread',
    'Every Osu! player',
    'Spamton',
    'Amazon Elexa',
    'Kid named finger',
    'MR BEAAAASSTT!!!!',
    'Peter Griffin',
    'Brain Griffin',
    'Sans Undertale',
    'Mario', //From Skact
    'Luigi',
    'Bowser',
    'Queen Elizabeth',
    'Karen',
    'Kanye West',
    'Soggy Cat',
    'Wise Mystical Tree',
    'The Voices'
];

const objects = [
    'Dog',
    'Water Bottle',
    'Lawn Mower',
    'Gigantic Oily man',
    'Twitter Account',
    'Discord Server',
    'Lamp',
    'British Person',
    'Crackhead',
    'Cubic Foot of Tungsten',
    'Door',
    'Bag of Crystal Meth',
    'rock',
    'Pet Rock',
    'Imaginary Girlfriend',
    'Fruit Loop',
    'Grain of rice',
    'Amazon Elexa',
    'Big Red Jewel',
    '12kg wheel of cheese',
    'Cocaine',
]

const sentences = [
    `${P1D} just ratioed ${P2D}!`,
    `${P1D} LOVES ${P2D}`,
    `${P1D} HATES ${P2D}`,
    `${P1D} really hates ${P2D}'s ${O1D} for some reason.`,
    `${P1D} just smacked the SHIT out of ${P2D}`,
    `${P1D} just covered ${P2D}'s ${O1D} with peanut butter!`,
    `${P1D} just destroyed ${P2D}'s ${O1D} using a ${O2D}!`,
    `${P1D} just threw ${P2D}'s ${O1D} out the window!`,
    `${P1D} just threw ${P2D} out the window!`,
    `${P1D} just got jumpscared by ${P2D}!`,
    `${P1D} just got jumpscared by ${P2D}'s ${O1D}!`,
    `${P1D} is really tempted to kill ${P2D}`,
    `${P1D} is really tempted to kill ${P2D}'s ${O1D}`,
    `${P1D} just broke up with ${P2D} :(`,
    `${P1D} just hooked up with ${P2D}`,
    `${P1D} just took ${P2D} on a date!`,
    `${P1D} just killed ${P2D}`,
    `${P1D} will never find their ${O1D}`,
    `${P1D} just threw a ${O1D} at ${P2D}`,
    `${P1D} just reacted with '💀' on ${P2D}'s message about a ${O1D}`,
    `${P1D} just forgor 💀`,
    `${P1D} just got jumpscared by looking at a ${O1D}`,
    `Smash or pass ${P1D}`,
    `Smash or pass, a ${O1D}`,
    `${P1D} and ${P2D} are going to make a song about a ${O1D}!`,
    `Clearly, ${P1D} doesn't own an air fryer.`,
    `Clearly, ${P1D} doesn't own an air fryer, they instead own a ${O1D}`,
    `${P1D} really needs to seek help about thier ${O1D} problem.`,
    `${P1D} just found a box with a ${O1D} inside!`,
    `${P1D} just learned Kotlin...`,
    `${P1D} is now in Fortnite!`,
    `${P1D} is planning on ending Racism!`,
    `It's national ${O1D} day!`,
    `${P1D} loves refrigerators!`,
    `${P1D} is giving away a free ${O1D}!`,
    `${P1D} is finally able to buy a ${O1D} and maybe even a ${O2D}!`,
    `${P1D} wants to be a [BIG SHOT]!`,
    `${P1D} dreams on becoming a ${O1D}!`,
    `${P1D} dreams on having a ${O1D}!`,
    `${P1D} has been reported missing`,
    `${P1D} is the one who knocks...`,
    `${P1D} is living in your walls`,
    `${P1D} dreams on hanging out with ${P2D}`,
    `${P1D} just downloaded the 16 trillion polygon poptart!`,
    `${P1D} just built thier ${O1D} in Minecraft!`,
    `${P1D} just tried to steal ${P2D}'s ${O1D} and got INSTANT KARMA!`,
    `${P1D} just fell down the stairs`,
    `${P1D} just got a 12kg wheel of cheese as a gift from ${P2D}!`,
    `${P1D} just ate a burgur with no honery mustard!`
];

var animationTime = 1

const sentence = document.getElementById("sentence");
const T1 = document.getElementById('T1')
const T2 = document.getElementById('T2')

let timesGenerated = localStorage.getItem('timesGenerated') || 0;
document.getElementById('generated').innerText = timesGenerated

function generate() {
            
    timesGenerated++
    document.getElementById('generated').innerText = timesGenerated
    localStorage.setItem('timesGenerated', timesGenerated);
            
    console.clear()
    console.log(people)

    var sentenceRandom = sentences[Math.round(Math.random() * (sentences.length - 1))];

    var P1Random = people[Math.round(Math.random() * (people.length - 1))];
    var P2Random = people[Math.round(Math.random() * (people.length - 1))];

    var O1Random = objects[Math.round(Math.random() * (objects.length - 1))];
    var O2Random = objects[Math.round(Math.random() * (objects.length - 1))];

    sentence.innerHTML = sentenceRandom;

    setTimeout(() => {        
        if(sentenceRandom.includes(`${P1D}`)) {
            displayPer1()
    
            setTimeout(() => {
                if(sentenceRandom.includes(`${P2D}`)) {
                    displayPer2()
    
                    setTimeout(() => {
                        if(sentenceRandom.includes(`${O1D}`)) {
                            displayObj1()
    
                            setTimeout(() => {
                                if(sentenceRandom.includes(`${O2D}`)) {
                                    displayObj2()
                                }
                            }, 100 * animationTime);
                        }   
                    }, 100 * animationTime);
                } else if(sentenceRandom.includes(`${O1D}`)) {
                    displayObj1()
    
                    setTimeout(() => {
                        if(sentenceRandom.includes(`${O2D}`)) {
                            displayObj2()
                        }
                    }, 100 * animationTime);
                }
            }, 100 * animationTime);
        } else if(sentenceRandom.includes(`${O1D}`)) {
    
            displayObj1()
    
            setTimeout(() => {
                if(sentenceRandom.includes(`${O2D}`)) {
                    displayObj2()
                }
            }, 100 * animationTime);
        }
    }, 100 * animationTime);

    function displayPer1() {
        document.getElementById('P1').innerText = P1Random
        console.log(`Person 1 ("${P1Random}") Generated`)
    }

    function displayPer2() {
        document.getElementById('P2').innerText = P2Random
        console.log(`Person 2 ("${P2Random}") Generated`)
    }

    function displayObj1() {
        document.getElementById('O1').innerText = O1Random
        console.log(`Object 1 ("${O1Random}") Generated`)
    }

    function displayObj2() {
        document.getElementById('O2').innerText = O2Random
        console.log(`Object 2 ("${O2Random}") Generated`)
    }
}

const animSlider = document.getElementById('slider')

animSlider.value = 1.0

animSlider.addEventListener('mousemove', (event) => {

    animationTime = parseFloat(animSlider.value).toFixed(1)
    document.getElementById('animValue').innerText = animationTime
})

animSlider.addEventListener('input', () => {
    animationTime = parseFloat(animSlider.value).toFixed(1)
    document.getElementById('animValue').innerText = animationTime
})