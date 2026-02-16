var random_1 = Math.floor(Math.random() * 6) + 1;
var random_2 = Math.floor(Math.random() * 6) + 1;

var change_dice_1 = document.getElementsByTagName("img")[0].getAttribute("src");
var change_dice_2 = document.getElementsByTagName("img")[1].getAttribute("src");

var final_dice_1 = change_dice_1.slice(0, 11) + random_1 + change_dice_1.slice(12);
var final_dice_2 = change_dice_2.slice(0, 11) + random_2 + change_dice_2.slice(12);

document.getElementsByTagName("img")[0].setAttribute("src", final_dice_1);
document.getElementsByTagName("img")[1].setAttribute("src", final_dice_2);

if(random_1 > random_2){
    document.querySelector("h1").innerHTML = "<img style='width: 150px; height: 150px; position: relative; bottom: 20px;' src='images/winner_flag.png'> Player 1 Wins!";

} else if(random_1 < random_2){
    document.querySelector("h1").innerHTML = "Player 2 Wins! <img style='width: 150px; height: 150px; position: relative; bottom: 20px' src='images/winner_flag.png'>";

} else {
    document.querySelector("h1").textContent = "Draw";
}