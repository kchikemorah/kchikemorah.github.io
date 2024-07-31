<html>
    <head>
    <title> Enchanter's Inventory </title>
    <link rel='stylesheet' href='gamestyle.css'/>      
    </head>
     <body  style="margin:0; overflow: hidden; background-image: url('backgroundtile.svg')">
        <div class="startScreen" id="startScreen">
            <h1 style="font-family:'Rowdies'"><center> Enchanter's Inventory </center> </h1>
            <p> Ship as many custom-made packages as you can! </p>
            <h2 style="font-family:'Rowdies'"> <center> instructions: </center></h2>
            <p> 1. use the keys <span class ='keyButton'>W</span> , 
            <span class ='keyButton'>A</span>,
            <span class ='keyButton'>S</span>, and 
            <span class ='keyButton'>D</span> to move around the screen.
            <p> 2. use   <span class ='keyButton'>Space</span>   
            to pick up or drop items from the belt. Use the same key to pick up or drop receipts. </p>
            <p> When you are ready to close a package, pick up the corresponding receipt using  <span class ='keyButton'>Space</span>. 
            Then, hover over the package and press <span class ='keyButton'>Enter</span> 
            to place it in the package and close it.</p>
            <p style="margin-left: 20px"> <span style="background-color:yellow;">NOTE:</span> you cannot reopen a package once it has been shut! Make sure the order is complete! </p>
            <p> 3. press <span class ='keyButton'>P</span> to pick up and drop
             off a package at the shipping area. Once you have done this, you have completed a package! </p> 
             <p> 4. every order has a timer. Once the timer runs out, the receipt will disappear and you will lose points! </p>
             <br>
            <br>
             <div style='display:flex;justify-content:center;'>
            <input type='button' id='startButton' value='Start!' class='startButton'> </input>
</div>
           
        </div>
    <div id='wrapper' class = 'wrapperHidden'>        
        <div style='height: 60px; text-align: center; background-color: #AA7D47' id = 'gameTimer'></div>



    </div>
    
    <script src ='script.js'> </script>
    </body>
</html> 
