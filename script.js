var player;
var playerX = 400;
var playerY = 200;


var items = [
    { element: document.createElement('img'), x: 800, y: 70, onBelt: true, inPackageId: null, type: 'type1' },
    { element: document.createElement('img'), x: 600, y: 70, onBelt: true, inPackageId: null, type: 'type2' },
    { element: document.createElement('img'), x: 200, y: 90, onBelt: true, inPackageId: null, type: 'type3' },
    { element: document.createElement('img'), x: 400, y: 70, onBelt: true, inPackageId: null, type: 'type4' }
]; 


items[0].element.className = 'item1';
items[0].element.id = '0';
items[1].element.className = 'item2';
items[1].element.id = '1';
items[2].element.className = 'item3';
items[2].element.id = '2';
items[3].element.className = 'item4';
items[3].element.id = '3';
items[0].element.src = "type1.svg";
items[0].element.alt = "item1";
items[1].element.src = "type2.svg";
items[1].element.alt = "item2";
items[2].element.src = "type3.svg";
items[2].element.alt = "item3";
items[3].element.src = "type4.svg";
items[3].element.alt = "item4";
items.push({element: document.createElement('img'), x: 1000, y: 80, onBelt:true, type: 'type5'});
items[4].element.id = '4';
items[4].element.src = "type5.svg";
items[4].element.alt = "item5";
items[4].element.className = 'item5';
items.push({element: document.createElement('img'), x: 1200, y: 75, onBelt:true, type: 'type6'});
items[5].element.src = "type6.svg";
items[5].element.id = '5';
items[5].element.alt = "item6";
items[5].element.className = 'item6';
function paintAllItems(items) {

    for (let i in items) {
        items[i].element.style.left = items[i].x + 'px';
        items[i].element.style.top = items[i].y + 'px';
        document.getElementById('wrapper').appendChild(items[i].element);
        
    }
}
function moveAllItems(items) { 
    for (let i in items) {
        if (items[i].onBelt) {
            items[i].x += 10;
            if (items[i].x > viewportWidth) {
                generateNewItemOnBelt();
                items[i].onBelt = false;
                var itemDumpX = Math.random() * 50 + 100;
                var itemDumpY = Math.random() * 50 + 500;
                items[i].x += -itemDumpX;
                items[i].y = itemDumpY;
            }

        }

    }
}

var playerIsCarrying = null;

function pickUpItem(event) { 
    
    for (let i in items) {
        var thisItem = items[i];
        var playerReferencePointX = playerX + player.offsetWidth/2; 
        var playerReferencePointY = playerY + player.offsetWidth / 2;

        var distance = [
            Math.sqrt((Math.pow(Math.abs(playerReferencePointX - thisItem.x), 2)) + (Math.pow(Math.abs(playerReferencePointY - thisItem.y), 2))),
            Math.sqrt((Math.pow(Math.abs(playerReferencePointX - (thisItem.x + thisItem.element.offsetWidth)), 2)) + (Math.pow(Math.abs(playerReferencePointY - thisItem.y), 2))),
            Math.sqrt((Math.pow(Math.abs(playerReferencePointX - (thisItem.x + thisItem.element.offsetWidth)), 2)) + (Math.pow(Math.abs(playerReferencePointY - (thisItem.y + thisItem.element.offsetHeight)), 2))),
            Math.sqrt((Math.pow(Math.abs(playerReferencePointX - thisItem.x), 2)) + (Math.pow(Math.abs(playerY - (thisItem.y + thisItem.element.offsetHeight)), 2))),
        ];
        
        for (let j of distance) {
            if (j <= 50 && event.code == "Space") {
                playKeys["Space"] = !playKeys["Space"];        

                if (playKeys["Space"] == true) {
                    playerIsCarrying = thisItem; //pick up
                    items[i].onBelt = false;
                    if (items[i].inPackageId != null){
                        containers[items[i].inPackageId].itemIdsInBin.splice(items.indexOf(i), 1); //remove item from bin it was just in
                    }
                    return;
                }
                else {
                    playerIsCarrying = null; //drop it
                    items[i].onBelt = false;
                    if (items[i].y <= 70 && items[i].y >= 0) {
                        items[i].onBelt = true;
                        return;
                    }
                    else {                        
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
                            var itemIsInsideRightWallOfBin = ((posX+ items[i].element.offsetWidth) <= (curBin.x + curBin.element.offsetWidth));
                           
                            
                            if (!itemIsOnScreen || (!itemIsAboveBin && itemIsInsideLeftWallOfBin && itemIsInsideRightWallOfBin) ) {
                               if (itemIsOnScreen){
                                posY += curBin.element.offsetHeight-items[i].element.offsetHeight - curBin.element.offsetHeight/2;
                                items[i].element.style.top = posY + 'px';
                                items[i].inPackageId = `${bin}`;
                                containers[bin].itemIdsInBin.push(i);
              
                               }
                                clearInterval(setIntervalCallIds[i]);
                            } 
                            else {
                                posY++;
                                items[i].y = posY;
                                items[i].element.style.top  = posY + 'px';
                            }
                        }

                        }
                       return;
                    }
                }
        }
           


        }
    }
}









var setIntervalCallIds = { item1: null, item2: null, item3: null, item4: null };

function isThereACollision() {

}



var wrapper = document.getElementById('wrapper');
var conveyorBelt = document.createElement('div');


var containers = {
    bin1: { element: document.createElement('img'), x: 100, y: 600, itemIdsInBin: [] },
    bin2: { element: document.createElement('img'), x: 300, y: 600, itemIdsInBin: [] },
    bin3: { element: document.createElement('img'), x: 600, y: 600, itemIdsInBin: [] },
    bin4: { element: document.createElement('img'), x: 1000, y:600, itemIdsInBin: [] }
};


function paintBins() {

    for (var i in containers) {
        containers[i].element.style.left = containers[i].x;
        containers[i].element.style.top = containers[i].y;
        containers[i].element.className = `${i}`;
        containers[i].element.id = `${i}`;
        containers[i].element.src = 'darkbrownbox.svg';
        containers[i].element.alt = 'orange box';
        wrapper.appendChild(containers[i].element);
        
       
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
        receiptDiv.style.backgroundImage = "url('receipt paper.png')";
        var receipt = receipts[i]; 
        receiptDiv.innerHTML += ` Order No. ${Math.floor(Math.random()*999999)} <br>`;
        for ( itemType in receipt){ //itemType is the key
            var amount = receipt[itemType]; //this is the value
            receiptDiv.innerHTML += `<img src = ${itemSrcs[itemType]}> x ${amount} </img>  <br>`;
        }
       
        receiptsSection.appendChild(receiptDiv);
    }

   
 
    }

function paintScreen() {

    wrapper.innerHTML = `
        
        <div style='height: 60px;'></div>`
    var conveyorBelt = document.createElement('div');
    conveyorBelt.className = 'conveyorBelt';
    conveyorBelt.id = 'conveyorBelt';
    for (var i = 0; i < 2; i++){
    conveyorBelt.innerHTML += `
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
        <img  src = 'conveyorbelt-tile.svg' alt = 'conveyorTop' style='width: 60px; height: 60px; transform: rotate(90deg)'></img> <br>`;
    }

    wrapper.appendChild(conveyorBelt);



    player = document.createElement('img');
    player.src = "character.svg";
    player.alt = "my character";
    player.className = 'player';
    player.style.top = playerY + 'px';
    player.style.left = playerX + 'px';
    wrapper.appendChild(player);

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
   
    receipts.push(chosenItems);


}

function generateNewItemOnBelt() {

    var randomItem = Math.floor(Math.random() * typesOfItems.length);
    var itemType = typesOfItems[randomItem];
    var newItemElement = document.createElement('img');
    newItemElement.id = items.length;
    newItemElement.src = itemSrcs[itemType];
    newItemElement.alt = `item${items.length}`;
    newItemElement.style.position = "absolute";
    newItemElement.style.width = 40 + 'px';
    newItemElement.style.height = 40 + 'px';
    items.push({ element: newItemElement, x: 0, y: 70, onBelt: true, inPackageId: null, type: itemType });


}



var viewportWidth = window.innerWidth;
var viewportHeight = window.innerHeight;
var playKeys = {}; 
playKeys["Space"] = false;
playKeys["KeyP"] = false;

function keyBeingPressed(event) {
    if (event.code != "Space" && event.code != "KeyP") {
        playKeys[event.code] = true;
        
    }
}


function keyNotBeingPressed(event) {
    if (event.code != "Space" && event.code != "KeyP") {
        playKeys[event.code] = false;
    }
}



document.addEventListener('keydown', keyBeingPressed);
document.addEventListener('keyup', keyNotBeingPressed);

function movePlayer() {
    var changeInX = 0;
    var changeInY = 0;
    if (playKeys['KeyW'] && playerY - 5 > 0) {
        changeInY -=10;
    }
    if (playKeys['KeyS'] && playerY + player.offsetHeight + 5 < viewportHeight) {
        changeInY +=10;
    }

    if (playKeys['KeyA'] && playerX - 5 > 0) {
        changeInX -=10;
    }
    if (playKeys['KeyD'] && playerX + player.offsetWidth + 5 < viewportWidth) {
        changeInX +=10;
    }
    playerY += changeInY;
    playerX += changeInX;
    for (let i in items) {
        if (items[i] == playerIsCarrying && playerIsCarrying != null) {
            playerIsCarrying.x += changeInX;
            playerIsCarrying.y += changeInY;
            items[i].x = playerIsCarrying.x;
            items[i].y = playerIsCarrying.y;
            items[i].element.style.left = items[i].x + 'px';
            items[i].element.style.top = items[i].y + 'px';
        }
    }
    for (let c in containers){
        if (containers[c] == playerIsCarrying && playerIsCarrying != null) {
            playerIsCarrying.x += changeInX;
            playerIsCarrying.y += changeInY;
            containers[c].x = playerIsCarrying.x;
            containers[c].y = playerIsCarrying.y;
            containers[c].element.style.left = containers[c].x + 'px';
            containers[c].element.style.top = containers[c].y + 'px';
            for (let i of containers[c].itemIdsInBin){
                var itemInThisBin = items[i];
                itemInThisBin.x += changeInX;
                itemInThisBin.y += changeInY;
                itemInThisBin.element.style.left = itemInThisBin.x + 'px';
                itemInThisBin.element.style.top = itemInThisBin.y + 'px';

            }
            
        }  
    }
    player.style.top = playerY + 'px';
    player.style.left = playerX + 'px';
    
}
document.addEventListener('keypress', pickUpItem);
document.addEventListener('keypress', (event) => {
    if (event.code == "KeyP") { 
        pickUpBin(event);
    }
});
function pickUpBin(event){ 
    
    for (let i in containers) {
        var thisBin = containers[i];
        var playerReferencePointX = playerX + player.offsetWidth/2; 
        var playerReferencePointY = playerY + player.offsetWidth / 2;

        var distance = [
            Math.sqrt((Math.pow(Math.abs(playerReferencePointX - thisBin.x), 2)) + (Math.pow(Math.abs(playerReferencePointY - thisBin.y), 2))),
            Math.sqrt((Math.pow(Math.abs(playerReferencePointX - (thisBin.x + thisBin.element.offsetWidth)), 2)) + (Math.pow(Math.abs(playerReferencePointY - thisBin.y), 2))),
            Math.sqrt((Math.pow(Math.abs(playerReferencePointX - (thisBin.x + thisBin.element.offsetWidth)), 2)) + (Math.pow(Math.abs(playerReferencePointY - (thisBin.y + thisBin.element.offsetHeight)), 2))),
            Math.sqrt((Math.pow(Math.abs(playerReferencePointX - thisBin.x), 2)) + (Math.pow(Math.abs(playerY - (thisBin.y + thisBin.element.offsetHeight)), 2))),
        ];
        
        for ( let dist of distance){
            if (dist <= 50 && event.code == 'KeyP'){
                playKeys["KeyP"]= !playKeys["KeyP"];
            if (playKeys["KeyP"] == true) {
                playerIsCarrying = thisBin; //pick up //still need to fix the bounds of the box so pickup is easier...
                return;
        }
            else{
                playerIsCarrying = null;
                return;
            }
    }
    }
}

}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
var start = true;
function gameLoop() {

    var targetFPS = 60;
    paintAllItems(items);
    paintBins();
    movePlayer();
    moveAllItems(items);
    requestAnimationFrame(() => {
        setTimeout(gameLoop, targetFPS);
       
    });
    

}

paintScreen();
paintAllItems(items);
generateOrder();
generateOrder();
paintReceipts();
//paintShippingArea();
paintBins();

gameLoop();
