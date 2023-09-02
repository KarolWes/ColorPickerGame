let ROWS = 4;
let COLS = ROWS;
var colorArray = [];

function randomColor(){
    return '#'+((1<<24)*Math.random() | 0).toString(16);
}
function makeBoard() {
    var html = '';
    for(var row = 0; row < ROWS; row++){
        html += '<div class="row">';
        for (var col = 0; col < COLS; col++){
            var trackColor = randomColor();
            colorArray.push(trackColor);
            html += '<div class="cell" style="background-color:'+trackColor+'">0</div>';
        }
        html += '</div>';
    }
    $('#output').html(html);
    $('.cell').css({
        border: '2px solid black',
        textAlign: 'center',
        padding: '0',
        margin: '0',
        width:'100px',
        height: '100px',
        fontSize: '2em',
        color: 'white',
        display: 'inline-block'
    })
}
function checkCell(){
    console.log($(this).css('backgroundColor'));
}

function pickMyColor() {
    let newColor = colorArray.splice(Math.floor(Math.random() * colorArray.length),1);
    $('#findme').css({
        backgroundColor: newColor
    });
}

function startGame(){
    makeBoard();
    pickMyColor();
    $('#start').hide();
    $('#gameArea').show();
    console.log('game started');
}


$(document).ready(function (){
    $('body').css({backgroundColor: 'darkgreen'})
   $('#gameArea').hide();
   $('#start').css({
        border: '1px solid black',
        textAlign: 'center',
        padding: '10px',
        width:'150px',
        backgroundColor: 'red',
        fontSize: '2em',
        marginBottom: '10px',
        color: 'white'
   }).click(startGame);
   $('#findme').css({
       border: '1px solid black',
       textAlign: 'center',
       padding: '0',
       width:'400px',
       height: '100px',
       fontSize: '2em',
       marginBottom: '10px',
       display: 'inline-block'
   });
   $('#output').on('click', '.cell', checkCell);
});