var contJogador1 = 0;
var contJogador2 = 0; 
var turno; 
var fim = false;


//função para esconder a div de Login e mostrar a div Tabuleiro e iniciar partida
function hideShow(){

    document.getElementById("login").style.display = 'none';

    iniciarPartida();

}

//função para sortear qual jogador irá iniciar a partida
function iniciarPartida(){ 

    const jogador1 = document.getElementById("jogador1").value; 
    const jogador2 = document.getElementById("jogador2").value;

    var inicio = Math.floor(Math.random() * 2);

    if(inicio == 0){
        
        turno = jogador1;
        document.getElementById("jogador").innerHTML = jogador1;
        document.getElementById("placar").style.backgroundColor="#ff00ff";

    }
    else{
       turno = jogador2;
       document.getElementById("jogador").innerHTML = jogador2;
       document.getElementById("placar").style.backgroundColor="#00ff00";
    }

    inicializarTabuleiro(jogador1, jogador2, turno);

}

function verificaTurno(jogador1, jogador2, turno, ){

    if(turno == jogador1){ 
        document.getElementById("jogador").innerHTML = jogador1;
        document.getElementById("placar").style.backgroundColor="#ff00ff";
        contJogador1++;
        turno = jogador2
        
    }
    else{

        document.getElementById("jogador").innerHTML = jogador2;
        document.getElementById("placar").style.backgroundColor="#00ff00";
        contJogador2++;
        turno = jogador1;
    }

}

function inicializarTabuleiro(jogador1, jogador2, turno){

    const tabuleiro = document.getElementsByClassName("item");

    console.log('o turno é ' + turno);
    console.log(jogador1);
    console.log(jogador2);

    

    for(var i = 0; i < tabuleiro.length; i++){

        tabuleiro[i].addEventListener("click", function(){
            if(fim){
                return;
            }
            if(this.getElementsByTagName("img").length == 0){
                if(turno == jogador1){
                    this.innerHTML = "<img src='xizinho.png'>";
                    this.setAttribute("jogada", jogador1);
                    turno = jogador2;
                }
                
                else{
                this.innerHTML = "<img src='bolinha.png'>";
                this.setAttribute("jogada", jogador2);
                turno = jogador1;
                }

                verificaTurno(jogador1, jogador2, turno);
            }
            else{ 
                alert('Jogada não permitida');
            }

        })
        
    }
};
