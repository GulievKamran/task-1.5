const comp_numb=Math.round(Math.random()*9)+1;
let my_number;
let addim;
let message="";
let found=false;

for(addim=1;addim<=11;addim++){
    my_number=+prompt("edeed yaz");


if(comp_numb===my_number){
    message+="Congart you found it \n\n";
    found=true;
    break;
} else if(my_number>comp_numb){
    alert("decrease the number")
}else if(my_number<comp_numb){
    alert("increase the num")
}}


if(!found){
    message+="tapmadin ncncnc \n\n";
}

message+="Senin son texminin:"+my_number+"\n\n";
message+="Duzgun eded:"+comp_numb+"\n\n";
message+="addimda tapdin:"+addim+"\n";


document.getElementById("bey").innerText=message;


    



