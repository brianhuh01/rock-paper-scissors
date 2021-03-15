
    const body = document.querySelector('body')

    const div = document.createElement('div')
    
    
    
    body.appendChild(div)

    let player = 0;
    let comp = 0;
    let i = 0;


    function game() {

                
            function playRound(playerSelection, computerSelection) {
                    if (computerSelection == "rock" && playerSelection =="scissors") {
                            comp++;
                            i++;
                            div.textContent += `\r\nyou lose this round`
                    } else if (computerSelection == "rock" && playerSelection == "paper") {
                            player++;
                            i++;
                            div.textContent += `\r\nyou win this round`
                    } else if (computerSelection == "paper" && playerSelection == "scissors") {
                            player++;
                            i++;
                            div.textContent += `\r\nyou win this round`
                    } else if (computerSelection == "paper" && playerSelection == "rock") {
                            comp++;
                            i++;
                            div.textContent += `\r\nyou lose this round`
                    } else if (computerSelection == "scissors" && playerSelection == "rock") {
                            player++;
                            i++;
                            div.textContent += `\r\nyou win this round`
                    } else if (computerSelection == "scissors" && playerSelection == "paper") {
                            comp++;
                            i++;
                            div.textContent += `\r\nyou lose this round`
                    } else if (computerSelection == playerSelection) {
                            i++;
                            div.textContent += `\r\ndraw this round`
                    } else
                    div.textContent += `\r\nchoose among rock, paper, scissors`
                    }


            function finish() {
        
                    if (player>comp) {
                            return "you won the game"
                    } else if (player<comp) {
                            return "you lost the game"
                    } else {
                            return "draw"
                    }
                }
        
    

            
            const buttons = document.querySelectorAll('button');
            div.textContent = "press a button to play"
            buttons.forEach((button) => {
                    button.addEventListener('click', function () {
                            chosen = this.id 
                            function computerPlay() {
                                    let choices = ["rock", "scissors", "paper"];
                                    return choices[Math.floor(Math.random() * 3)]
                                }

                            div.setAttribute('style', 'white-space: pre;');

                            const computerSelection = computerPlay();
                            div.textContent = "the game number is " + (parseInt(i)+1)
                            playRound(chosen, computerSelection)
                            div.textContent += `\r\nyou = ${chosen} and computer = ${computerSelection}`
                            div.textContent += `\r\nyou = ${player} and computer = ${comp}`

                            
                            if (player>=5 || comp >= 5) {
                                div.textContent = finish() + `\r\nyou = ${player} and computer = ${comp}`
                                buttons.forEach((button) => {
                                        button.style.display = 'none'})
                                        
                                
                            }

                            
                            
                        })
                            
                })
                
                


        
    

                    

   


    
    } 
    game()

    
