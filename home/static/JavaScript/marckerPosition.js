var positions = new Object();
var finalizar = {'U':false, 'R':false, 'S':false, 'O':false}




// Encontrar que esta a direita a partir da menor distancia para Mais
function checkRight(markerFound){
    var right = false;
    for(x in positions){
        if(positions[x] > positions[markerFound]) right = x;
    }

    if(right == false) return right;

    for(x in positions){
        if((positions[x] > positions[markerFound]) && (positions[x] < positions[right])) right = x;
    }

    return right
}

// Encontrar que esta a esquerda a partir da menor distancia para Menos
function checkLeft(markerFound){
    var left = false;
    for(x in positions){
        if(positions[x] < positions[markerFound]) left = x;
    }

    if(left == false) return left;

    for(x in positions){
        if((positions[x] < positions[markerFound]) && (positions[x] > positions[left])) left = x;
    }

    return left
}

// Checa se esta na posição correta
function check(markerFound){
    if((markerFound == word[0]) && (checkLeft(markerFound) == false)) return true;
    else if((markerFound == word[0]) && (checkLeft(markerFound) != false)) {
        document.querySelector("#qdr_plv").removeChild(document.getElementById(checkLeft(markerFound)));
        document.getElementById(markerFound).insertAdjacentHTML('beforebegin', error);
        return true;
    }
    for(x in word){
        if(word[x] == markerFound) var rightWord = word[x-1];
    }

    if(checkLeft(markerFound)== false) return false;
    else if (checkLeft(markerFound) == rightWord ) return true;
}

// Check se todas letras estao corretas com o dicionario 'finalizar'
function finish(){
    for(x in finalizar){
        if(finalizar[x] == false) return false;
    }
    return true;
}

function postForm() {
    var form = new FormData()
    form.append('nome', word)
    form.append('username', username)
    fetch("/ARjs/"+word, {
        method: "POST",
        headers: {
            'X-CSRFToken': csrftoken,
        },
        body: form
    });
}

function add(markerFound, div){
    var error = '<div id="'+ markerFound +'" class="erro">X</div>'
    if(document.querySelector("#qdr_plv").childElementCount == 0) {
        document.querySelector("#qdr_plv").insertAdjacentHTML('afterbegin', div);
        finalizar[markerFound] = true;
    }
    else if(checkLeft(markerFound) != false){

        if(check(markerFound)){
            document.getElementById(checkLeft(markerFound)).insertAdjacentHTML("afterend", div);
            finalizar[markerFound] = true;
        }
        else document.getElementById(checkLeft(markerFound)).insertAdjacentHTML("afterend", error);
        if((check(markerFound)) && (markerFound == "O") && (finish())){
            document.getElementById("generico").style.display = "flex";
            postForm();
        }
    }
    else {
        if(check(markerFound)) document.getElementById(checkRight(markerFound)).insertAdjacentHTML('beforebegin', div);
        else document.getElementById(checkRight(markerFound)).insertAdjacentHTML('beforebegin', error);
    }

}
