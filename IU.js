const barreAccèsRapide = document.createElement("div");
const game = document.querySelector("body")
let width = 450;
let height = 75;
barreAccèsRapide.setAttribute("style", "position: absolute; bottom: 20px; height:"+height+"px; background-color: rgba(200,200,200,0.75); display: flex; border: 1px solid rgb(100,100,100)")
game.append(barreAccèsRapide)

for (i=0;i<9;i++){
    const cases = document.createElement("div");
    cases.setAttribute("style", "border-right: 1px solid white; border-left: 1px solid rgb(100,100,100); height: 75px; width: 73px; display: grid; grid-template-rows: repeat(1,100%);grid-template-columns: repeat(1,70% 30%);");
    cases.setAttribute("id","case"+i);
    barreAccèsRapide.append(cases)
}
document.getElementById("case0").setAttribute("class","bActive");
function selectCase(){
    window.addEventListener("wheel", (e) =>{
        let bActive = document.getElementsByClassName("bActive")[0].id;
        let bActiveId = bActive.substring(4,5)
        if (e.deltaY < 0) {
            if(+bActiveId+1 >= 0 && +bActiveId+1 <= 8){
                for(i=0;i<9;i++){
                    document.getElementById("case"+i).setAttribute("class","");
                }
                document.getElementById("case"+(+bActiveId+1)).setAttribute("class","bActive");
            } 
            else{
                for(i=0;i<9;i++){
                    document.getElementById("case"+i).setAttribute("class","");
                }
                document.getElementById("case0").setAttribute("class","bActive");
            }
        }
        else if (e.deltaY > 0) {
            if(+bActiveId-1 >= 0 && +bActiveId-1 <= 8){
                for(i=0;i<9;i++){
                    document.getElementById("case"+i).setAttribute("class","");
                }
                document.getElementById("case"+(+bActiveId-1)).setAttribute("class","bActive");
            }
            else{
                for(i=0;i<9;i++){
                    document.getElementById("case"+i).setAttribute("class","");
                }
                document.getElementById("case8").setAttribute("class","bActive");
            }
        }
    }),
    window.addEventListener("keyup", (e) =>{
        switch(e.key){
            case "0": case "1": case "2": case "3": case "4": case "5": case "6": case "7": case "8": case "9":
                
                for(i=0;i<9;i++){
                    document.getElementById("case"+i).setAttribute("class","");
                }
                document.getElementById("case"+e.key).setAttribute("class","bActive");
            break
        }
    })
}
selectCase()