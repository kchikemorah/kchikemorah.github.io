<html>
    <head>
    <title> Play </title>
    <link rel='stylesheet' href='gamestyle.css'/>      
    </head>
    <body style='margin:0; overflow: hidden'>
    <div id='wrapper' class = 'wrapper'></div>
    <script>
        var player;
        var playerX = 400;
        var playerY = 200;
    
        function paintScreen(){
        var wrapper = document.getElementById('wrapper');
        wrapper.innerHTML = `
        <div id='wrapper'>
        <div style='background-color: white; height: 60px;'></div>`
        var conveyorBelt = document.createElement('div');
        conveyorBelt.className = 'conveyorBelt';
        conveyorBelt.innerHTML =`
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
        var items = [];
        items[0] = document.createElement('div');
        items[1] = document.createElement('div');
        items[2] = document.createElement('div');
        items[3] = document.createElement('div');
        items[0].className = 'item1';
        items[1].className = 'item2';
        items[2].className = 'item3';
        items[3].className = 'item4';
        for(let i=0; i<items.length; i++){
            conveyorBelt.appendChild(items[i]);
        }
        var containersDiv = document.createElement('div');
        containersDiv.className = "containers";
        document.body.appendChild(containersDiv);
        var containers = [];
        containers[0] = document.createElement('div');
        containers[1] = document.createElement('div');
        containers[2] = document.createElement('div');
        containers[3] = document.createElement('div');
        containers[0].className = 'bin1';
        containers[1].className = 'bin2';
        containers[2].className = 'bin3';
        containers[3].className = 'bin4';
        for(let i=0; i<containers.length; i++){
            containersDiv.appendChild(containers[i]);
        }

        

        player = document.createElement('div');
        player.className = 'player';
        player.style.top = playerY + 'px';
        player.style.left = playerX + 'px';
        document.body.appendChild(player);

        var playerHead = document.createElement('div');
        playerHead.className = 'playerHead';
        player.appendChild(playerHead);

        var playerBody = document.createElement('div');
        playerBody.className = 'playerBody';
        player.appendChild(playerBody);

        var spine = document.createElement('div');
        spine.className = 'spine';
        playerBody.appendChild(spine);

        var leftHand = document.createElement('div');
        leftHand.className = 'leftHand';
        playerBody.appendChild(leftHand);

        var rightHand = document.createElement('div');
        rightHand.className = 'rightHand';
        playerBody.appendChild(rightHand);
    }
    var viewportWidth = window.innerWidth;
    var viewportHeight = window.innerHeight;
    var playKeys = {};
    function keyBeingPressed(event){
        playKeys[event.code]= true;
    }
    function keyNotBeingPressed(event){
        playKeys[event.code] = false;
    }
document.addEventListener('keydown', keyBeingPressed);
document.addEventListener('keyup', keyNotBeingPressed);
    function movePlayer(){
        if(playKeys['KeyW'] && playerY - 5 > 0){
            playerY -= 10;
        }
    
        if(playKeys['KeyS'] && playerY + player.offsetHeight + 5  < viewportHeight ){
        playerY += 10;
        }
    
        if(playKeys['KeyA'] && playerX - 5 > 0){
            playerX -= 10;
        }
        if(playKeys['KeyD'] && playerX + player.offsetWidth + 5 < viewportWidth){
        playerX += 10;
        }
    
        
        player.style.top = playerY + 'px';
        player.style.left = playerX + 'px';
        }
        
        
         
         function gameLoop(){
            movePlayer();
            requestAnimationFrame(gameLoop);
         }

         paintScreen();
         gameLoop();
         
        
        
        </script>
         
        
    </body>
</html> 
