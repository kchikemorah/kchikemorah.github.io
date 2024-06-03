<html>
    <head>
        <script>
        
            function getCurrentTime(){
               // console.log("The current time is...");
               fetch('ajax_endpoint.php').then( //fetch is an ajax request!
                response => response.text()
            ).then(
                data=> (
                    // console.log(data)
                    document.getElementById('dateTimeSection').innerHTML = data
                )
               );
                        }

                    
            
        </script>
    </head>
    <body>
        <input type='button' value='what time is it?' onclick='getCurrentTime()'/>
        <p id='dateTimeSection' style='color:purple'>innerhtml</p>
    </body>

</html>
