let user_score = 0;
let com_score = 0;
let msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");

const user_score_para = document.querySelector("#user-score");
const com_score_para = document.querySelector("#com-score");

const gen_com_choice = () =>{
    const options = ["rock" , "paper" , "scissor"];
    const random_index =  Math.floor(Math.random()*3);
    return options[random_index];
}

const draw_game = () => {
    msg.innerText = "Draw Game";
    msg.style.backgroundColor = "Black";
}

const show_winner = (user_win, user_choice , com_choice) =>{
    if(user_win){
        user_score ++;
        user_score_para.innerText = user_score;
        msg.innerText = `You win! Your ${user_choice} beats ${com_choice}`;
        msg.style.backgroundColor = "Green";
    }
    else{
        com_score ++;
        com_score_para.innerText = com_score;
        msg.innerText = `You lost! ${com_choice} beats your ${user_choice}`;
        msg.style.backgroundColor = "Red";
    }
}

const playGame = (user_choice) =>{
    const com_choice = gen_com_choice();

    if(user_choice === com_choice){
        draw_game();
    }

    else{
        let user_win = true;
        if(user_choice === "rock"){
            // paper, scissor
            user_win = com_choice === "paper" ? false : true;
        }
        else if(user_choice === "paper"){
            // rock , scissor
            user_win = com_choice === "scissor" ? false : true;
        }
        else{
            //rock , paper
            user_win = com_choice === "rock" ? false : true;
        }
        show_winner(user_win , user_choice , com_choice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const user_choice = choice.getAttribute("Id");
        playGame(user_choice);
    })
})