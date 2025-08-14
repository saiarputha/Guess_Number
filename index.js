var a= document.getElementById("g")
             var c= document.getElementById("f")
            
             var b= document.getElementById("r")
             var e=Math.floor(Math.random()*10)+1
            
             var sc=10
            function gt(){
                 var y=a.value
            
             if(e==y){
                r.textContent="right"
                alert("you won")
                if(sc==10){
                    f.textContent="score"+sc
                }
                
             }
             else{
                r.textContent="wrong"
                 sc=sc-1
                f.textContent="score:"+sc
               
             }
             if(sc==0){
                    alert("you lost the game try again")
                }

            
            }