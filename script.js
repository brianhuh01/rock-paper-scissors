
    const body = document.querySelector('body')

    const play = document.createElement('div')
    play.className = "play"
    const result = document.createElement('div')
    result.className = "result"
    const stat = document.createElement('div')
    stat.className = "status"

    const compare = document.createElement('div')
    compare.className = "compare"
    const compareuser = document.createElement('div')
    compareuser.className = "compareuser"
    const comparecomp = document.createElement('div')
    comparecomp.className = "comparecomp"
    const gamenumber = document.createElement('div')
    gamenumber.className = "gamenumber"
    const final = document.createElement('div')
    final.className = "final"


    
    
    
    body.prepend(play)
    body.appendChild(gamenumber)
    body.appendChild(compare)
    compare.appendChild(compareuser)
    compare.appendChild(comparecomp)

    body.appendChild(result)
    body.appendChild(stat)
    body.appendChild(final)

    let player = 0;
    let comp = 0;
    let i = 0;


    function game() {

                
            function playRound(playerSelection, computerSelection) {
                    if (computerSelection == "rock" && playerSelection =="scissors") {
                            comp++;
                            i++;
                            result.textContent = `\r\nyou lose this round`
                    } else if (computerSelection == "rock" && playerSelection == "paper") {
                            player++;
                            i++;
                            result.textContent = `\r\nyou win this round`
                    } else if (computerSelection == "paper" && playerSelection == "scissors") {
                            player++;
                            i++;
                            result.textContent = `\r\nYou win this round`
                    } else if (computerSelection == "paper" && playerSelection == "rock") {
                            comp++;
                            i++;
                            result.textContent = `\r\nYou lose this round`
                    } else if (computerSelection == "scissors" && playerSelection == "rock") {
                            player++;
                            i++;
                            result.textContent = `\r\nYou win this round`
                    } else if (computerSelection == "scissors" && playerSelection == "paper") {
                            comp++;
                            i++;
                            result.textContent = `\r\nYou lose this round`
                    } else if (computerSelection == playerSelection) {
                            i++;
                            result.textContent = `\r\nDraw this round`
                    } else
                    result.textContent = `\r\nchoose among rock, paper, scissors`
                    }


            function finish() {
        
                    if (player>comp) {
                            return "You won the game"
                    } else if (player<comp) {
                            return "You lost the game"
                    } else {
                            return "Draw"
                    }
                }
        
    

            
            const buttons = document.querySelectorAll('button');
            play.textContent = "Press a Button to Play"
            buttons.forEach((button) => {
                    button.addEventListener('click', function () {
                            chosen = this.id 
                            function computerPlay() {
                                    let choices = ["rock", "scissors", "paper"];
                                    return choices[Math.floor(Math.random() * 3)]
                                }

                            play.setAttribute('style', 'white-space: pre;');

                            const computerSelection = computerPlay();
                            gamenumber.textContent = "Game #" + (parseInt(i)+1)
                            playRound(chosen, computerSelection)
                            compareuser.textContent = `You ${chosen}`
                            comparecomp.textContent = `Computer ${computerSelection}`
                            stat.textContent = `\r\nyou = ${player} and computer = ${comp}`

                            
                            if (player>=5 || comp >= 5) {
                                final.textContent = finish() + `\r\nyou = ${player} and computer = ${comp}`
                                buttons.forEach((button) => {
                                        button.style.display = 'none'})
                                        
                                
                            }

                            
                            
                        })
                            
                })
                
                


        
    

                    

   


    
    } 
    game()

    
