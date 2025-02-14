// VARIABLES
// MAIN
const main = document.querySelector('.main')

// BUTTON
// BUTTON > DISK
const playButton = document.querySelector('.js-play-button')
const pauseButton = document.querySelector('.js-pause-button')
const prevButton = document.querySelector('.js-prev-button')
const nextButton = document.querySelector('.js-next-button')
// BUTTON > BOARD
const welcomeButton = document.querySelectorAll('.board__welcome__button')
const doneButton = document.querySelectorAll('.board__done__button')
const sizeButton = document.querySelectorAll('.board__size__button')
const baseButton = document.querySelectorAll('.board__base__button')
const flavorButton = document.querySelectorAll('.board__flavor__button')
const toppingButton = document.querySelectorAll('.board__topping__button')
const strawButton = document.querySelectorAll('.board__straw__button')
const labelButton = document.querySelectorAll('.board__label__button')

// CUP SIZE
const cup = document.querySelector('.main__cup')
const largeSize = document.querySelector('.largeSize')
const mediumSize = document.querySelector('.mediumSize')
const smallSize = document.querySelector('.smallSize')

//DISK
const disk = document.querySelector('.main__right__bot__player__box__disk')

// CUP CONTAIN
const flavorLiquid = document.querySelector('.main__cup__body__liquid__flavor')
const label = document.querySelector('.main__cup__body__label')

// CIRCLE TOP COLOR
const circleLiquid = document.querySelector('.main__machine__top__circle__liquid')
const straw = document.querySelector('.main__cup__straw')

// BOARD
const board = document.querySelector('.board')
const boardTitle = document.querySelector('.board__title')
const boardWelcome = document.querySelector('.board__welcome')
const boardSize = document.querySelector('.board__size')
const boardBase = document.querySelector('.board__base')
const boardFlavor = document.querySelector('.board__flavor')
const boardTopping = document.querySelector('.board__topping')
const boardStraw = document.querySelector('.board__straw')
const boardLabel = document.querySelector('.board__label')
const boardDone = document.querySelector('.board__done')

// DISTRIB
const distrib = document.querySelector('.main__machine__middle__distrib')
const bubble = document.querySelectorAll('.main__machine__middle__distrib__topping__bubble')
const distribBot = document.querySelector('.main__machine__middle__distrib__bot')
const distribLiquid = document.querySelector('.main__machine__middle__liquid')
const distribTopping = document.querySelector('.main__machine__middle__distrib__topping')

// DISTRIB BUBBLES 
const tapioca = document.querySelector('.topping__tapioca')
const tapiocaButton = document.querySelector('.tapioca')
const jelly = document.querySelector('.topping__jelly')
const jellyButton = document.querySelector('.jelly')
const multi = document.querySelector('.topping__multi')
const multiButton = document.querySelector('.multi')

// SOUND 
//effect
const servSound = new Audio('audio/serv2.mp3');
const toppingSound = new Audio('audio/topping.wav');
const bubbleSound = new Audio('audio/bubble.mp3');
const stickSound = new Audio('audio/stick.mp3');
const trashSound = new Audio('audio/trash.wav');
// let open = new Audio ('../audio/open.wav');
//disk music
// const earfQuakeSound = new Audio('audio/earfquake.mp3');
const playlist = [
    new Audio("audio/bossa.mp3"),
    new Audio("audio/dreams.mp3"),
    new Audio("audio/softly.mp3"),
    new Audio("audio/earfquake.mp3"),
    new Audio("audio/lanterns.mp3"),
    new Audio("audio/technicolor.mp3")
]
let playlistStateIndex = 0
// TRASH
const trash = document.querySelector('.board__footer__trash')
// NIGHT MODE
const nightMode = document.querySelector('.js-night')
const dayMode = document.querySelector('.js-day')
const windowBg = document.querySelector('.js-windowBg')
const machineMiddle = document.querySelector('.js-middle')
const machineMiddleBg = document.querySelector('.js-middle-bg')
const machineTop = document.querySelector('.main__machine__top')
const machineBottom = document.querySelector('.main__machine__bot')
// WORK
const work = document.querySelector('.js-work')
// WORK 3D
const poster3D = document.querySelector('.js-poster-3D')
const work3D = document.querySelector('.js-work3D')
const work3DClose = document.querySelector('.js-work-3D-close')
const posterLogo = document.querySelector('.js-poster-logo')
const workLogo = document.querySelector('.js-work-logo')
const workLogoClose = document.querySelector('.js-work-logo-close')
const posterRecipe = document.querySelector('.js-poster-recipe')
const workRecipe = document.querySelector('.js-work-recipe')
const workRecipeClose = document.querySelector('.js-work-recipe-close')

// EVENT LISTENER CLICK
// BOARD 
// BOARD > WELCOME BUTTON
welcomeButton.forEach(welcomeButton => {
    welcomeButton.addEventListener('click', () => {
        stickSound.play()
        boardTitle.querySelector('.welcome').classList.add('hidden')
        boardTitle.querySelector('.size').classList.remove('hidden')
        boardSize.classList.remove('hidden')
        boardWelcome.classList.add('hidden')
    })
})

doneButton.forEach(doneButton =>{
    doneButton.addEventListener('click', () => {
        stickSound.play()
        window.location.href = "index.html"

    })
})

// BOARD > CUP SIZE
// BOARD > CUP SIZE > Button
sizeButton.forEach(sizeButton => {
    sizeButton.addEventListener('click', () => {
        stickSound.play()
        trash.classList.remove('hidden')
        setTimeout(() => {
            boardSize.classList.add('next-board')
        }, 100);
        boardTitle.querySelector('.size').classList.add('hidden')
        boardTitle.querySelector('.label').classList.remove('hidden')
        boardLabel.classList.add('hidden')
        boardBase.classList.remove('hidden')
        // boardSize.classList.add('hidden')
    })
})
// BOARD > CUP SIZE > large
largeSize.addEventListener('click', () => {
    cup.classList.remove('hidden')
    main.style.setProperty('--height_cup', '220px')
    if (window.innerWidth < 812) {
        main.style.setProperty('--height_cup', '170px')
    }
})
// BOARD > CUP SIZE > medium
mediumSize.addEventListener('click', () => {
    cup.classList.remove('hidden')
    main.style.setProperty('--height_cup', '200px')
    if (window.innerWidth < 812) {
        main.style.setProperty('--height_cup', '150px')
    }
})
// BOARD > CUP SIZE > small
smallSize.addEventListener('click', () => {
    cup.classList.remove('hidden')
    main.style.setProperty('--height_cup', '185px')
    if (window.innerWidth < 812) {
        main.style.setProperty('--height_cup', '130px')
    }
})



// BOARD > LABEL > BUTTON
labelButton.forEach(labelButton => {
    labelButton.addEventListener('click', () => {
        stickSound.play()
        label.style.background = labelButton.getAttribute('data')
        // activeButton = strawButton
        // boardStraw.classList.remove('hidden')
        setTimeout(() => {
            boardLabel.classList.add('next-board')
        }, 100);
        boardTitle.querySelector('.label').classList.add('hidden')
        boardTitle.querySelector('.straw').classList.add('hidden')
        boardTitle.querySelector('.flavor').classList.remove('hidden')
        boardFlavor.classList.remove('hidden')
        boardSize.classList.add('hidden')
        // boardLabel.classList.add('hidden')
    })
    labelButton.addEventListener('mouseover', () => {
        label.style.background = labelButton.getAttribute('data')
    })
})

baseButton.forEach(baseButton => {
    baseButton.addEventListener('click', () => {
        servSound.play()
        flavorLiquid.classList.remove('flavor-animation')
        distribLiquid.classList.remove('distrib-animation')
        // flavorButton.style.background = flavorButton.getAttribute('data')
        circleLiquid.style.background = baseButton.getAttribute('data')
        flavorLiquid.style.background = baseButton.getAttribute('data')
        distribLiquid.style.background = baseButton.getAttribute('data')
        // distribTopping.style.background = baseButton.getAttribute('data')
        setTimeout(() => {
            flavorLiquid.classList.add('base-flavor-animation')
            distribLiquid.classList.add('distrib-animation')
            // distribTopping.classList.add('distrib-topping')

        }, 100);
        boardBase.classList.remove('hidden')
        boardSize.classList.add('hidden')
        boardLabel.classList.remove('hidden')
        boardBase.classList.add('hidden')
        
        // boardFlavor.classList.add('hidden')
    })
})

// BOARD > FLAVOR > BUTTON
flavorButton.forEach(flavorButton => {
    flavorButton.addEventListener('click', () => {
        servSound.play()
        // flavorLiquid.classList.remove('flavor-animation')
        distribLiquid.classList.remove('distrib-animation')
        // flavorButton.style.background = flavorButton.getAttribute('data')
        circleLiquid.style.background = flavorButton.getAttribute('data')
        flavorLiquid.style.background = flavorButton.getAttribute('data')
        distribLiquid.style.background = flavorButton.getAttribute('data')
        setTimeout(() => {
            flavorLiquid.classList.remove('base-flavor-animation')
            flavorLiquid.classList.add('flavor-animation')
            distribLiquid.classList.add('distrib-animation')
            boardFlavor.classList.add('next-board')
            // distrib.Child(distrib.children).style.background = 'pink'
        }, 100);
        boardTitle.querySelector('.topping').classList.remove('hidden')
        boardTitle.querySelector('.flavor').classList.add('hidden')
        boardTitle.querySelector('.straw').classList.add('hidden')
        boardTitle.querySelector('.label').classList.add('hidden')
        boardTopping.classList.remove('hidden')
        boardStraw.classList.add('hidden')
        boardLabel.classList.add('hidden')
        boardSize.classList.add('hidden')
        // boardFlavor.classList.add('hidden')
    })
})

// BOARD > TOPPING
// BOARD > TOPPING > BUTTON
toppingButton.forEach(toppingButton => {
    toppingButton.addEventListener('click', () => {
        setTimeout(() => {
            toppingSound.play()
        }, 200)
        distribTopping.classList.remove('distrib-topping')
        circleLiquid.style.background = toppingButton.getAttribute('data')
        // toppingButton.style.background = toppingButton.getAttribute('data')
        setTimeout(() => {
            distrib.classList.add('change-distrib')
            // distrib.style.width = '230px'
            distribBot.style.width = '0px'
            distribTopping.classList.add('distrib-topping')
            boardTopping.classList.add('next-board')
        }, 100);
        // next
        boardTitle.querySelector('.straw').classList.remove('hidden')
        boardTitle.querySelector('.flavor').classList.add('hidden')
        boardTitle.querySelector('.topping').classList.add('hidden')
        boardStraw.classList.remove('hidden')
        boardFlavor.classList.add('hidden')
        boardSize.classList.add('hidden')
        // boardTopping.classList.add('hidden')
    })
})

// BOARD > TOPPING > DISTRIB BUBBLE
// BOARD > TOPPING > DISTRIB BUBBLE > tapioca
tapiocaButton.addEventListener('click', function () {
    tapioca.classList.remove('hidden')
    jelly.classList.add('hidden')
    multi.classList.add('hidden')
})
// BOARD > TOPPING > DISTRIB BUBBLE > jelly
jellyButton.addEventListener('click', function () {
    jelly.classList.remove('hidden')
    tapioca.classList.add('hidden')
    multi.classList.add('hidden')
})
// BOARD > TOPPING > DISTRIB BUBBLE > both
multiButton.addEventListener('click', function () {
    multi.classList.remove('hidden')
    tapioca.classList.add('hidden')
    jelly.classList.add('hidden')
})

// BOARD > STRAW 
strawButton.forEach(strawButton => {
    strawButton.addEventListener('click', () => {
        stickSound.play()
        // strawSound.play()
        straw.classList.add('straw-animation')
        straw.style.background = strawButton.getAttribute('data')
        circleLiquid.style.background = 'white'
        setTimeout(() => {
            // distrib.style.width = '0px'
            // distribBot.style.width = '0px'
            boardStraw.classList.add('next-board')
        }, 100);
        activeButton = strawButton
        // boardStraw.classList.remove('hidden')
        boardTitle.querySelector('.done').classList.remove('hidden')
        boardTitle.querySelector('.label').classList.add('hidden')
        boardTitle.querySelector('.straw').classList.add('hidden')
        boardFlavor.classList.add('hidden')
        boardLabel.classList.add('hidden')
        boardTopping.classList.add('hidden')
        boardSize.classList.add('hidden')
        boardStraw.classList.add('hidden')
        boardDone.classList.remove('hidden')
    })
})

//DISK MUSIC PLAY
//play




//FOTTER
//FOOTER > TRASH
trash.addEventListener('click', () => {
    stickSound.play()
    // window.location.reload();
    tapioca.classList.add('hidden')
    jelly.classList.add('hidden')
    multi.classList.add('hidden')
    setTimeout(() => {
        boardSize.classList.remove('next-board')
        boardLabel.classList.remove('next-board')
        boardFlavor.classList.remove('next-board')
        boardTopping.classList.remove('next-board')
        boardDone.classList.remove('next-board')
        boardStraw.classList.remove('next-board')
        distrib.classList.remove('change-distrib')
        flavorLiquid.classList.remove('base-flavor-animation')
        flavorLiquid.classList.remove('flavor-animation')
        straw.style.background = ('transparent')
        label.style.background = ('transparent')
        boardWelcome.classList.add('hidden')
        boardFlavor.classList.add('hidden')
        boardLabel.classList.add('hidden')
        boardTopping.classList.add('hidden')
        boardStraw.classList.add('hidden')
        boardDone.classList.add('hidden')
        boardSize.classList.remove('hidden')
        boardBase.classList.add('hidden')
    }, 100);
    cup.classList.add('hidden')
    distrib.classList.remove('change-distrib')
    // distrib.classList.remove('hidden')
    distribBot.style.width = '20%'
    // flavorButton.style.background = "#4e4444"
    boardTitle.querySelector('.welcome').classList.add('hidden')
    boardTitle.querySelector('.topping').classList.add('hidden')
    boardTitle.querySelector('.flavor').classList.add('hidden')
    boardTitle.querySelector('.done').classList.add('hidden')
    boardTitle.querySelector('.label').classList.add('hidden')
    boardTitle.querySelector('.straw').classList.add('hidden')
    boardTitle.querySelector('.size').classList.remove('hidden')
})

// NIGHT MODE

nightMode.addEventListener('click', night)
dayMode.addEventListener('click', day)

function day(){
    stickSound.play()
    main.style.background = "rgb(251,196,171)"
    board.style.background = "rgb(207, 141, 110)"
    dayMode.classList.add('hidden')
    nightMode.classList.remove('hidden')
    windowBg.src = "img/day.jpg"
    machineMiddle.style.background = "rgb(235, 172, 143)"
    machineMiddleBg.style.background = "rgb(207, 141, 110)"
    machineTop.style.background = "rgb(236, 205, 191)"
    machineBottom.style.background = "rgb(236, 205, 191)"
}

function night(){
    stickSound.play()
    main.style.background = "rgb(137, 72, 88)"
    board.style.background = "rgb(80, 34, 56)"
    dayMode.classList.remove('hidden')
    nightMode.classList.add('hidden')
    windowBg.src = "img/night.avif"
    machineMiddle.style.background = "rgb(184, 125, 139)"
    machineMiddleBg.style.background = "rgb(50, 3, 15)"
    machineTop.style.background = "rgb(237, 183, 203)"
    machineBottom.style.background = "rgb(237, 183, 203)"
}


//WORK POSTER
poster3D.addEventListener('click', () =>{
    stickSound.play()
    work.classList.remove('hidden')
    work3D.classList.remove('hidden')
})

posterLogo.addEventListener('click', () =>{
    stickSound.play()
    work.classList.remove('hidden')
    workLogo.classList.remove('hidden')
})

posterRecipe.addEventListener('click', () =>{
    stickSound.play()
    work.classList.remove('hidden')
    workRecipe.classList.remove('hidden')
})

//CLOSE WINDOW 

work3DClose.addEventListener('click' , quit)
workLogoClose.addEventListener('click' , quit)
workRecipeClose.addEventListener('click' , quit)

function quit(){
    stickSound.play()
    work.classList.add('hidden')
    workLogo.classList.add('hidden')
    work3D.classList.add('hidden')
    workRecipe.classList.add('hidden')
}

document.addEventListener('keyup', event => {
    if (event.key == 'Escape') {
        quit()
    }
})


