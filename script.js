var player;
var playerX = 400;
var playerY = 200;
//an object in js is a set of key-value pairs
var items = {
    item1: { element: document.createElement('div'), x: 800, y: 10, onBelt: true},
    item2: { element: document.createElement('div'), x: 600, y: 10, onBelt: true},
    item3: { element: document.createElement('div'), x: 200, y: 30, onBelt: true},
    item4: { element: document.createElement('div'), x: 400, y: 10, onBelt: true}
};

items.item1.element.className = 'item1';
items.item1.element.id = '1';
items.item2.element.className = 'item2';
items.item2.element.id = '2';
items.item3.element.className = 'item3';
items.item3.element.id = '3';
items.item4.element.className = 'item4';
items.item4.element.id = '4';
function paintItemsOnBelt(items) {
    for (let i in items) {
        // if (items[i].onBelt){
        items[i].element.style.left = items[i].x + 'px';
        document.getElementById('conveyorBelt').appendChild(items[i].element);
    //}
}
}
function moveItemsOnBelt(items){
    for (let i in items){
        if(items[i].onBelt){
            items[i].x +=  10;
            if(items[i].x > viewportWidth){
                items[i].onBelt = false;
                items[i].x +=-100;
                items[i].y = 600;
               
                break;
                //items[i].x = 0;
            }
            
        }
        items[i].element.style.left = items[i].x + 'px';
            items[i].element.style.top = items[i].y + 'px';
    }
}
function pickUpItem(){ //made in pickUpStuff
    
    var closeEnoughItem;
    for(let i in items){
        var thisItem = items[i];
        var playerReferencePointX = playerX + playerHead.offsetWidth; //center of the head
        var playerReferencePointY = playerY + playerHead.offsetWidth/2;
        console.log(playerReferencePointX + "and" + playerReferencePointY + " vs " + playerX + "and" + playerY);
        var distance = [
            Math.sqrt((Math.pow(Math.abs(playerReferencePointX - thisItem.x), 2)) + (Math.pow(Math.abs(playerReferencePointY - thisItem.y), 2))),
            Math.sqrt((Math.pow(Math.abs(playerReferencePointX - (thisItem.x + thisItem.element.offsetWidth)), 2)) + (Math.pow(Math.abs(playerReferencePointY- thisItem.y), 2))),
            Math.sqrt((Math.pow(Math.abs(playerReferencePointX - (thisItem.x + thisItem.element.offsetWidth)), 2)) + (Math.pow(Math.abs(playerReferencePointY - (thisItem.y + thisItem.element.offsetHeight)), 2))),
            Math.sqrt((Math.pow(Math.abs(playerReferencePointX - thisItem.x), 2)) + (Math.pow(Math.abs(playerY - (thisItem.y + thisItem.element.offsetHeight)), 2))),
        ];
        for (let j of distance) {
            if( j <= 50 ){
                //pick up
                playerIsCarrying = j;
                ;
                //break;
            }
        }
    }
}

//need a function to tell me when the item has fallen off the belt/ no longer on frame, so change onBelt to false
//make the items move, not the belt
//make the belt move! animating across the screen and reappearing
var wrapper = document.getElementById('wrapper'); //moved these out of the paint function in pickUpStuff
var conveyorBelt = document.createElement('div');
var containersDiv = document.createElement('div');
var containers = [];
containers[0] = document.createElement('div');
containers[1] = document.createElement('div');
containers[2] = document.createElement('div');
containers[3] = document.createElement('div');
var playerHead = document.createElement('div');
var playerBody = document.createElement('div');
var spine = document.createElement('div');
var leftHand = document.createElement('div');
var rightHand = document.createElement('div');
var playerIsCarrying = null;

function paintScreen() {
    
    wrapper.innerHTML = `
        <div id='wrapper'>
        <div style='background-color: white; height: 60px;'></div>`
    var conveyorBelt = document.createElement('div');
    conveyorBelt.className = 'conveyorBelt';
    conveyorBelt.id = 'conveyorBelt';
    conveyorBelt.innerHTML = `
        <div class='beltRolls'></div>
        <div class='beltRolls'></div>
        <div class='beltRolls'></div>
        <div class='beltRolls'></div>
        <div class='beltRolls'></div>
        <div class='beltRolls'></div>
        <div class='beltRolls'></div>
        <div class='beltRolls'></div>
        <div class='beltRolls'></div>
        <div class='beltRolls'></div>
        <div class='beltRolls'></div>
        <div class='beltRolls'></div>
        <div class='beltRolls'></div>
        <div class='beltRolls'></div>`;
    wrapper.appendChild(conveyorBelt);

    // var items = [];
    // items[0] = document.createElement('div');
    // items[1] = document.createElement('div');
    // items[2] = document.createElement('div');
    // items[3] = document.createElement('div');
    // items[0].className = 'item1';
    // items[1].className = 'item2';
    // items[2].className = 'item3';
    // items[3].className = 'item4';
    // for(let i=0; i<items.length; i++){
    //     conveyorBelt.appendChild(items[i]);
    // }
    
    containersDiv.className = "containers";
    document.body.appendChild(containersDiv);

    containers[0].className = 'bin1';
    containers[1].className = 'bin2';
    containers[2].className = 'bin3';
    containers[3].className = 'bin4';
    for (let i = 0; i < containers.length; i++) {
        containersDiv.appendChild(containers[i]);
    }

    player = document.createElement('div');
    player.className = 'player';
    player.style.top = playerY + 'px';
    player.style.left = playerX + 'px';
    document.body.appendChild(player);

    
    playerHead.className = 'playerHead';
    player.appendChild(playerHead);
   
    playerBody.className = 'playerBody';
    player.appendChild(playerBody);
   
    spine.className = 'spine';
    playerBody.appendChild(spine);
   
    leftHand.className = 'leftHand';
    playerBody.appendChild(leftHand);
   
    rightHand.className = 'rightHand';
    playerBody.appendChild(rightHand);
}

var viewportWidth = window.innerWidth;
var viewportHeight = window.innerHeight;
var playKeys = {}; //eventually will store four key-true/false pairs 

function keyBeingPressed(event) {
    playKeys[event.code] = true;
}
function keyNotBeingPressed(event) {
    playKeys[event.code] = false;
}

document.addEventListener('keydown', keyBeingPressed);
document.addEventListener('keyup', keyNotBeingPressed);

function movePlayer() { //edited in pickUpStuff
    if (playKeys['KeyW'] && playerY - 5 > 0) {
        playerY -= 10;
        if(playerIsCarrying != null){
            playerIsCarrying
        }
    }

    if (playKeys['KeyS'] && playerY + player.offsetHeight + 5 < viewportHeight) {
        playerY += 10;
    }

    if (playKeys['KeyA'] && playerX - 5 > 0) {
        playerX -= 10;
    }
    if (playKeys['KeyD'] && playerX + player.offsetWidth + 5 < viewportWidth) {
        playerX += 10;
    }

    player.style.top = playerY + 'px';
    player.style.left = playerX + 'px';
}


function gameLoop() {
    var targetFPS = 50;
    movePlayer();
   // moveItemsOnBelt(items);
   pickUpItem();
    requestAnimationFrame(() => {
        setTimeout(gameLoop, targetFPS);
    });

}

paintScreen();
paintItemsOnBelt(items);
gameLoop();


