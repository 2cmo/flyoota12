var says = 
[
    "Welcome!",
    "my coder friends copying me and hes better at coding then me",
    "Schools Pretty Boring",
    "This Websites Trash", 
    "i took too long making this :(", 
    "AOSUDHASIUD4u3ghiuj34hgi34gH", 
    "tinyurl.com/RailinDev", 
    "I stole 3kh0's idea to make a website >:)", 
    "hotline bling", 
    "all 1v1lol's are blocked at my school", 
    "the person who made this websites pretty cool", 
    "what day is it?", 
    "fortnite battl pass", 
    "i made this on the weekend :((((",
    "hiiii aiden :)"
]

function pageload() {
    document.getElementById('randomting').innerHTML = says[Math.floor(Math.random() * says.length)]
}