<html>
    <head>
    <title> Play </title>
    <link rel='stylesheet' href='gamestyle.css'>
        <script>
        </script>
        
    </head>
    <body style='margin:0; background-color: lightbrown'>
        <div style='background-color: white; height: 60px;'></div>

        <div class='conveyorBelt'>
            <?php
            
             for($i=1; $i<15; $i++){
                echo" <div class='beltRolls'></div>";
            }
            ?>
            <div class='item1'></div>
            <div class='item2'></div>
            <div class='item3'></div>
            <div class='item4'></div>
        </div>

        <div class = 'containers'>
            <div class='bin1'> bin 1</div>
            <div class='bin2'> bin 2</div>
            <div class='bin3'> bin 3</div>
            <div class='bin4'> bin 4</div>
        </div>

        <div class='player'>
            <div class='playerHead'></div>
            <div class='playerBody'>
                <div class='spine'></div>
                <div class='leftHand'></div>
                <div class='rightHand'></div>
        </div>
    </body>
</html>
