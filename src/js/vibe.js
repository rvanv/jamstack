const vibes = [
    `let's go!`,
    `go go gadget`,
    `rescue rangers`,
    `another saying`,
    `dancing in the dark`
];

var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

document.querySelector(".vibe").append(vibe);