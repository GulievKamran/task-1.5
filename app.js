const comp_num = Math.round(Math.random()*10)+1;
let my_number=+prompt("eded yaz");
addim=1;

while(comp_num!==my_number){
    if(my_number>comp_num) {
        my_number=+prompt("decrease")
    }
    else{
        my_number=+prompt("increase")
    }

    addim++
}
 
message="";

if(addim>1 && addim<=5){
    message+="mukemmelsen sen \n\n"
} else{
    message+="yaxsi deyil amma tapdin nehayet \n\n"
}

message+="sson texminim-"+my_number+"\n\n"
message+="duzgun olan-"+comp_num+"\n\n"
message+="addimda tapdigim--"+addim+"\n\n"

document.getElementById("bey").innerText=message;