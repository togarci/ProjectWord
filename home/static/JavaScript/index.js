


window.onload = function(){
    if(window.innerWidth < window.innerHeight) this.alert("Vire a tela");
    // Pegando marcador
    var markerLetraU = document.getElementById('letraU');
    var markerLetraR = document.getElementById('letraR');
    var markerLetraS = document.getElementById('letraS');
    var markerLetraO = document.getElementById('letraO');

    var u = '<div id="U" class="padrao">U</div>';
    var r = '<div id="R" class="padrao">R</div>';
    var s = '<div id="S" class="padrao">S</div>';
    var o = '<div id="O" class="padrao">O</div>';

    // funcao executado quando o marcador é encontrado
    markerLetraU.addEventListener('markerFound', function() {
        positions.U = markerLetraU.object3D.position.x;
        // condicao se o marcador encontrado estiver na letra Correta;
        add('U', u);
    });
    // funcao caso o marcador seja perdido
    markerLetraU.addEventListener("markerLost", function() {
        delete positions.U
        finalizar.U = false;
        document.querySelector("#qdr_plv").removeChild(document.querySelector("#U"));
    });

    // repeticao

    markerLetraR.addEventListener('markerFound', function() {
        positions.R = markerLetraR.object3D.position.x;
        add('R', r);
    });
    markerLetraR.addEventListener("markerLost", function() {
        delete positions.R
        finalizar.R = false;
        document.querySelector("#qdr_plv").removeChild(document.querySelector("#R"));
    });

    // repeticao
    markerLetraS.addEventListener('markerFound', function() {
        positions.S = markerLetraS.object3D.position.x;
        add('S', s);
    });
    markerLetraS.addEventListener("markerLost", function() {
        delete positions.S
        finalizar.S = false;
        document.querySelector("#qdr_plv").removeChild(document.querySelector("#S"));
    });

    // repeticao
    markerLetraO.addEventListener('markerFound', function() {
        positions.O = markerLetraO.object3D.position.x;
        add('O', o);
    });
    markerLetraO.addEventListener("markerLost", function() {
        delete positions.O
        finalizar.O = false;
        document.querySelector("#qdr_plv").removeChild(document.querySelector("#O"));
    });


    // botões da modal
    document.getElementsByClassName("fa-redo")[0].onclick = function(){window.location.reload()};
    document.getElementsByClassName("fa-times-circle")[0].onclick = function(){
        document.getElementById("generico").style.display = "none";
    }

}
