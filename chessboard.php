<?php
    $chessboard = [
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1]

    ];

    
     
        foreach($chessboard as $row){
            if ($row[0] == 1){
                echo 
                "<html>
            <head>
            <title> Chessboard</title>
            <style>
            .row {
                display: flex;
                
            }
        
            
            .a{
                width: 100px;
                height: 100px;
                background-color: black;  
            }

            .b{
                width: 100px;
                height: 100px;
                background-color: red;
            }
            </style>
            </head>

            <body>
            <div class = 'row'>
            <div class = 'a'></div>
            <div class = 'b'></div>
            <div class = 'a'></div>
            <div class = 'b'></div>
            <div class = 'a'></div>
            <div class = 'b'></div>
            <div class = 'a'></div>
            <div class = 'b'></div>
            </div> 
            </body>
            
          </html>";
            }
            else{
                echo 
                "<html>
            <head>
            <title> Chessboard</title>
            <style>
            .row {
                display: flex;
                position: center;
                
            }
            
            .a{
                width: 100px;
                height: 100px;
                background-color: black;  
                border: 1px solid black;
            }

            .b{
                width: 100px;
                height: 100px;
                background-color: white;
            }
            </style>
            </head>

            <body>
            <div class = 'row'>
            <div class = 'b'></div>
            <div class = 'a'></div>
            <div class = 'b'></div>
            <div class = 'a'></div>
            <div class = 'b'></div>
            <div class = 'a'></div>
            <div class = 'b'></div>
            <div class = 'a'></div>


            </div> 
            </body>
            
          </html>";  
            }
        }
        
    
    