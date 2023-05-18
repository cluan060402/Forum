$(document).ready(function()
            {
                $("#loginButton").click(function()
                {       
                    var username = $("input#username").val();
                    var password = $("#password").val();   
                    console.log(username);   
                    console.log(password);            
                    $.post( "/login", { userName: username, pass: password })
                      .done(function( data ) {
                         $("#loginResult").text(data);
                      });
                });
            });
