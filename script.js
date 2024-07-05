var player;
var playerX = 400;
var playerY = 200;

//an object in js is a set of key-value pairs
var items = [
    { element: document.createElement('img'), x: 800, y: 70, onBelt: true, inPackage: false, type: 'type1' },
    { element: document.createElement('img'), x: 600, y: 70, onBelt: true, inPackage: false, type: 'type2' },
    { element: document.createElement('img'), x: 200, y: 90, onBelt: true, inPackage: false, type: 'type3' },
    { element: document.createElement('img'), x: 400, y: 70, onBelt: true, inPackage: false, type: 'type4' }
];  //name them with a type
// console.log(items);


items[0].element.className = 'item1';
items[0].element.id = '1';
items[1].element.className = 'item2';
items[1].element.id = '2';
items[2].element.className = 'item3';
items[2].element.id = '3';
items[3].element.className = 'item4';
items[3].element.id = '4';
items[0].element.src = "type1.svg";
items[0].element.alt = "item1";
items[1].element.src = "type2.svg";
items[1].element.alt = "item2";
items[2].element.src = "type3.svg";
items[2].element.alt = "item3";
items[3].element.src = "type4.svg";
items[3].element.alt = "item4";
items.push({element: document.createElement('img'), x: 1000, y: 80, onBelt:true, type: 'type5'});
items[4].element.src = "type5.svg";
items[4].element.alt = "item5";
items[4].element.className = 'item5';
items.push({element: document.createElement('img'), x: 1200, y: 75, onBelt:true, type: 'type6'});
items[5].element.src = "type6.svg";
items[5].element.alt = "item6";
items[5].element.className = 'item6';
function paintItemsOnBelt(items) { //just renders, doesnt change values

    for (let i in items) {
        // if (items[i].onBelt){
        items[i].element.style.left = items[i].x + 'px';
        items[i].element.style.top = items[i].y + 'px';
        document.getElementById('wrapper').appendChild(items[i].element);
        //}
    }
}
function moveItemsOnBelt(items) { //actually changes the item object
    for (let i in items) {
        if (items[i].onBelt) {
            items[i].x += 10;
            console.log("increasing x of " + i);
            if (items[i].x > viewportWidth) {
                console.log(`item ${i} is off the screen, x = ${items[i].x}`)
                console.log(items[i]);
                //generateNewItemOnBelt();
                items[i].onBelt = false;
                var itemDumpX = Math.random() * 50 + 100;
                var itemDumpY = Math.random() * 50 + 500;
                items[i].x += -itemDumpX;
                items[i].y = itemDumpY;
                // items[i].x = 0;
            }

        }

    }
}

var playerIsCarrying = null;

function pickUpItem(event) { //made in pickUpStuff
    loop1: 
    for (let i in items) {
        var thisItem = items[i];
        var playerReferencePointX = playerX + player.offsetWidth/2; //center of the head
        var playerReferencePointY = playerY + player.offsetWidth / 2;

        var distance = [
            Math.sqrt((Math.pow(Math.abs(playerReferencePointX - thisItem.x), 2)) + (Math.pow(Math.abs(playerReferencePointY - thisItem.y), 2))),
            Math.sqrt((Math.pow(Math.abs(playerReferencePointX - (thisItem.x + thisItem.element.offsetWidth)), 2)) + (Math.pow(Math.abs(playerReferencePointY - thisItem.y), 2))),
            Math.sqrt((Math.pow(Math.abs(playerReferencePointX - (thisItem.x + thisItem.element.offsetWidth)), 2)) + (Math.pow(Math.abs(playerReferencePointY - (thisItem.y + thisItem.element.offsetHeight)), 2))),
            Math.sqrt((Math.pow(Math.abs(playerReferencePointX - thisItem.x), 2)) + (Math.pow(Math.abs(playerY - (thisItem.y + thisItem.element.offsetHeight)), 2))),
        ];
        loop2:
        for (let j of distance) {
            if (j <= 50 && event.code == "Space") {
                playKeys["Space"] = !playKeys["Space"];
                
                
                console.log("space:" + playKeys["Space"]);
            




                if (playKeys["Space"] == true) {
                    console.log(`this item ${i} will be picked up!`);
                    playerIsCarrying = thisItem; //pick up
                    items[i].onBelt = false;
                    break loop1;
                }
                else {
                    console.log(`this item ${i} should be let go!`);
                    playerIsCarrying = null; //drop it
                    console.log(playerIsCarrying);
                    items[i].onBelt = false;
                    //how to distinguish if its on the belt
                    if (items[i].y <= 70 && items[i].y >= 0) {
                        items[i].onBelt = true;
                        break loop1;
                    }
                    else {
                        //make it drop
                        var posY = items[i].y;
                         var posX = items[i].x;


                        clearInterval(setIntervalCallIds[i]);
                        setIntervalCallIds[i] = setInterval(frame, 10);
                        function frame() {

                            var itemIsOnScreen = posY < 878;
                            for (bin in containers){
                            var curBin = containers[bin];
                            
                            var itemIsAboveBin = posY < curBin.y;
                            var itemIsInsideLeftWallOfBin = posX >= curBin.x;
                            //console.log(curBin);
                            var itemIsInsideRightWallOfBin = ((posX+ items[i].element.offsetWidth) <= (curBin.x + curBin.element.offsetWidth));
                           
                            
                            if (!itemIsOnScreen || (!itemIsAboveBin && itemIsInsideLeftWallOfBin && itemIsInsideRightWallOfBin) ) {
                               if (!itemIsOnScreen){console.log('item is not on the screen');}
                               else{
                                //snap in place
                                posY += curBin.element.offsetHeight-items[i].element.offsetHeight - 5;
                                console.log(posY);
                                items[i].element.style.top = posY + 'px';
                                console.log(items[i].element.style.top);
                                console.log(`${i} is inside ${bin}`);
              
                               }
                                clearInterval(id[i]);
                            } 
                            else {
                                posY++;
                                items[i].y = posY;
                                items[i].element.style.top  = posY + 'px';
                            }
                        }

                        }
                        break loop1;
                    }
                }
        }
           


        }
    }
}









var setIntervalCallIds = { item1: null, item2: null, item3: null, item4: null };
function isThereACollision() {

}

function inAPackage() { // design, i wanna see everything in the box, then on closing, fade the box opaque

}

//need a function to tell me when the item has fallen off the belt/ no longer on frame, so change onBelt to false
//make the items move, not the belt
//make the belt move! animating across the screen and reappearing
var wrapper = document.getElementById('wrapper'); //moved these out of the paint function in pickUpStuff
var conveyorBelt = document.createElement('div');


var containers = {
    bin1: { element: document.createElement('img'), x: 100, y: 600 },
    bin2: { element: document.createElement('img'), x: 300, y: 600 },
    bin3: { element: document.createElement('img'), x: 600, y: 600 },
    bin4: { element: document.createElement('img'), x: 1000, y:600 }
}

// var playerHead = document.createElement('div');
// var playerBody = document.createElement('div');
// var spine = document.createElement('div');
// var leftHand = document.createElement('div');
// var rightHand = document.createElement('div');

function paintBins() {

    for (var i in containers) {
        containers[i].element.style.left = containers[i].x;
        containers[i].element.style.top = containers[i].y;
        containers[i].element.className = `${i}`;
        containers[i].element.src = 'darkbrownbox.svg';
        containers[i].element.alt = 'orange box';
        wrapper.appendChild(containers[i].element);
        // var bincover = document.createElement('div');
        // bincover.className = 'bin1Cover';
        // bincover.style.top = 580 + 'px';
        // bincover.style.left = 240 + 'px';
        // wrapper.appendChild(bincover);
    }
}
function paintShippingArea(){
    var shippingTable = {element: document.createElement('img'), x: 910, y: 300};
    shippingTable.element.src = 'rect.jpg';
    shippingTable.element.alt = 'shipping area';
    shippingTable.element.style.left = shippingTable.x + 'px';
    shippingTable.element.style.top = shippingTable.y + 'px';
    shippingTable.element.style.position = 'absolute';
    shippingTable.element.style.transform = 'rotate(90deg)';
    wrapper.appendChild(shippingTable.element);
    
}

var receipts = [];

var itemSrcs = { 'type1': "type1.svg" , 'type2': "type2.svg" , 'type3': "type3.svg" , 'type4': "type4.svg", 'type5': "type5.svg", 'type6': "type6.svg" };

function paintReceipts(){
   var receiptsSection = document.getElementById('receipts'); 
    for (i in receipts){
        var receiptDiv = document.createElement('div');
        receiptDiv.style.backgroundImage = "url('tan_inlay.png')";
        // receiptDiv.src = "tan_inlay.png";
        // receiptDiv.alt = `receipt paper ${i}`;
        var receipt = receipts[i]; 
        receiptDiv.innerHTML += ` Order No. ${Math.floor(Math.random()*999999)} <br>`;
        for ( itemType in receipt){ //itemType is the key
            var amount = receipt[itemType]; //this is the value
            receiptDiv.innerHTML += `<img src = ${itemSrcs[itemType]}> x ${amount} </img>  <br>`;
        }
        console.log(receiptsSection);
        receiptsSection.appendChild(receiptDiv);
    }

   
    // var shift = 0;
    // for( i in receipts){
    // receipts[i].element.src = "tan_inlay.png";
    // receipts[i].element.alt = `receipt paper ${i}`;
    // receipts[i].element.style.top = (150 + (110*shift)) +  'px';
    // receipts[i].element.style.left = 0 + 'px';
    // receipts[i].element.style.width = 100 + 'px';
    // receipts[i].element.style.height = 100 + 'px';
    // receipts[i].element.style.backgroundColor = 'transparent';
    // receipts[i].element.style.position = 'absolute';
    // wrapper.appendChild(receipts[i].element);
    // shift ++;
    }

function paintScreen() {

    wrapper.innerHTML = `
        
        <div style='height: 60px;'></div>`
    var conveyorBelt = document.createElement('div');
    conveyorBelt.className = 'conveyorBelt';
    conveyorBelt.id = 'conveyorBelt';
    conveyorBelt.innerHTML = `
         <img  src = 'conveyorbelt-tile.svg' alt = 'conveyorTop' style='width: 60px; height: 60px; transform: rotate(90deg)'></img>
        <img  src = 'conveyorbelt-tile.svg' alt = 'conveyorTop' style='width: 60px; height: 60px; transform: rotate(90deg)'></img>
        <img  src = 'conveyorbelt-tile.svg' alt = 'conveyorTop' style='width: 60px; height: 60px; transform: rotate(90deg)'></img>
        <img  src = 'conveyorbelt-tile.svg' alt = 'conveyorTop' style='width: 60px; height: 60px; transform: rotate(90deg)'></img>
        <img  src = 'conveyorbelt-tile.svg' alt = 'conveyorTop' style='width: 60px; height: 60px; transform: rotate(90deg)'></img>
        <img  src = 'conveyorbelt-tile.svg' alt = 'conveyorTop' style='width: 60px; height: 60px; transform: rotate(90deg)'></img>
        <img  src = 'conveyorbelt-tile.svg' alt = 'conveyorTop' style='width: 60px; height: 60px; transform: rotate(90deg)'></img>
        <img  src = 'conveyorbelt-tile.svg' alt = 'conveyorTop' style='width: 60px; height: 60px; transform: rotate(90deg)'></img>
        <img  src = 'conveyorbelt-tile.svg' alt = 'conveyorTop' style='width: 60px; height: 60px; transform: rotate(90deg)'></img>
        <img  src = 'conveyorbelt-tile.svg' alt = 'conveyorTop' style='width: 60px; height: 60px; transform: rotate(90deg)'></img>
        <img  src = 'conveyorbelt-tile.svg' alt = 'conveyorTop' style='width: 60px; height: 60px; transform: rotate(90deg)'></img>
        <img  src = 'conveyorbelt-tile.svg' alt = 'conveyorTop' style='width: 60px; height: 60px; transform: rotate(90deg)'></img>
        <img  src = 'conveyorbelt-tile.svg' alt = 'conveyorTop' style='width: 60px; height: 60px; transform: rotate(90deg)'></img>
        <img  src = 'conveyorbelt-tile.svg' alt = 'conveyorTop' style='width: 60px; height: 60px; transform: rotate(90deg)'></img>
        <img  src = 'conveyorbelt-tile.svg' alt = 'conveyorTop' style='width: 60px; height: 60px; transform: rotate(90deg)'></img>
        <img  src = 'conveyorbelt-tile.svg' alt = 'conveyorTop' style='width: 60px; height: 60px; transform: rotate(90deg)'></img>
        <img  src = 'conveyorbelt-tile.svg' alt = 'conveyorTop' style='width: 60px; height: 60px; transform: rotate(90deg)'></img>
        <img  src = 'conveyorbelt-tile.svg' alt = 'conveyorTop' style='width: 60px; height: 60px; transform: rotate(90deg)'></img>
        <img  src = 'conveyorbelt-tile.svg' alt = 'conveyorTop' style='width: 60px; height: 60px; transform: rotate(90deg)'></img>
        <img  src = 'conveyorbelt-tile.svg' alt = 'conveyorTop' style='width: 60px; height: 60px; transform: rotate(90deg)'></img>
        <img  src = 'conveyorbelt-tile.svg' alt = 'conveyorTop' style='width: 60px; height: 60px; transform: rotate(90deg)'></img>
        <img  src = 'conveyorbelt-tile.svg' alt = 'conveyorTop' style='width: 60px; height: 60px; transform: rotate(90deg)'></img>
        <img  src = 'conveyorbelt-tile.svg' alt = 'conveyorTop' style='width: 60px; height: 60px; transform: rotate(90deg)'></img>
        <img  src = 'conveyorbelt-tile.svg' alt = 'conveyorTop' style='width: 60px; height: 60px; transform: rotate(90deg)'></img>`

    wrapper.appendChild(conveyorBelt);



    player = document.createElement('img');
    player.src = "character.svg";
    player.alt = "my character";
    player.className = 'player';
    player.style.top = playerY + 'px';
    player.style.left = playerX + 'px';
    wrapper.appendChild(player);

  

    // playerHead.className = 'playerHead';
    // player.appendChild(playerHead);

    // playerBody.className = 'playerBody';
    // player.appendChild(playerBody);

    // spine.className = 'spine';
    // playerBody.appendChild(spine);

    // leftHand.className = 'leftHand';
    // playerBody.appendChild(leftHand);

    // rightHand.className = 'rightHand';
    // playerBody.appendChild(rightHand);
}

var typesOfItems = ["type1", "type2", "type3", "type4", "type5", "type6"];


function generateOrder() {

    //start with a box of max 5 items
    var maxItemsInBox = 5;

    //randomly pick an item
    var chosenItems = {};
    for (var i = 0; i < maxItemsInBox; i++) {
        var randomItem = Math.floor(Math.random() * typesOfItems.length);
        if (typesOfItems[randomItem] in chosenItems) {
            chosenItems[typesOfItems[randomItem]]++;
        }
        else {
            chosenItems[typesOfItems[randomItem]] = 1;
        }
    }
    console.log(chosenItems); //now display them
    receipts.push(chosenItems);


}

function generateNewItemOnBelt() {

    var randomItem = Math.floor(Math.random() * typesOfItems.length);
    var itemType = typesOfItems[randomItem];

    console.log(items.length);
    var newItemElement = document.createElement('img');
    newItemElement.src = itemSrcs[itemType];
    newItemElement.alt = `item${items.length}`;
    newItemElement.style.position = "absolute";
    newItemElement.style.width = 40 + 'px';
    newItemElement.style.height = 40 + 'px';
    items.push({ element: newItemElement, x: 0, y: 70, onBelt: true, inPackage: false, type: itemType });


}
// function pickUpBins(){ //keyP

// }
//document.addEventListener('keypress');

var viewportWidth = window.innerWidth;
var viewportHeight = window.innerHeight;
var playKeys = {}; // will store  key-true/false pairs 
playKeys["Space"] = false;

function keyBeingPressed(event) {
    if (event.code != "Space") {
        playKeys[event.code] = true;
        
    }
}


function keyNotBeingPressed(event) {
    if (event.code != "Space") {
        playKeys[event.code] = false;
    }
}

// function keyWasPressed(event){
//     playKeys[event.code] = !playKeys[event.code];
//     console.log(playKeys[event.code]);
// }

document.addEventListener('keydown', keyBeingPressed);
document.addEventListener('keyup', keyNotBeingPressed);

function movePlayer() { //edited in pickUpStuff
    if (playKeys['KeyW'] && playerY - 5 > 0) {
        playerY -= 10;
        if (playerIsCarrying != null) {
            playerIsCarrying.y -= 10;
        }
    }
    if (playKeys['KeyS'] && playerY + player.offsetHeight + 5 < viewportHeight) {
        playerY += 10;
        if (playerIsCarrying != null) {
            playerIsCarrying.y += 10;
        }
    }

    if (playKeys['KeyA'] && playerX - 5 > 0) {
        playerX -= 10;
        if (playerIsCarrying != null) {
            playerIsCarrying.x -= 10;
        }
    }
    if (playKeys['KeyD'] && playerX + player.offsetWidth + 5 < viewportWidth) {
        playerX += 10;
        if (playerIsCarrying != null) {
            playerIsCarrying.x += 10;
        }
    }
    for (let i in items) {
        if (items[i] == playerIsCarrying) {
            items[i].x = playerIsCarrying.x;
            items[i].y = playerIsCarrying.y;
            items[i].element.style.left = items[i].x + 'px';
            items[i].element.style.top = items[i].y; + 'px';
        }
    }
    player.style.top = playerY + 'px';
    player.style.left = playerX + 'px';
}
document.addEventListener('keypress', pickUpItem);


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
var start = true;
function gameLoop() {

    var targetFPS = 60;
    paintItemsOnBelt(items);
    movePlayer();
    moveItemsOnBelt(items);
    requestAnimationFrame(() => {
        setTimeout(gameLoop, targetFPS);
       
    });
    

}

paintScreen();
paintItemsOnBelt(items);
generateOrder();
generateOrder();
paintReceipts();
//paintShippingArea();
paintBins();
// while (start == true){
//     sleep(300).then(() => {
///setTimeout(generateNewItemOnBelt(), 300);
    
// }
gameLoop();
