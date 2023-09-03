let ROWS = 4;
let COLS = ROWS;
var colorArray = [];

function randomColor(){
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    // return '#'+((1<<24)*Math.random() | 0).toString(16);
    return 'rgb('+r+','+g+','+b+')';
}

function addNewColor(){
    var trackColor = randomColor();
    colorArray.push(trackColor);
    return trackColor;
}

function makeBoard() {
    var html = '';
    for(var row = 0; row < ROWS; row++){
        html += '<div class="row">';
        for (var col = 0; col < COLS; col++){
            html += '<div class="cell" style="background-color:'+ addNewColor() +'">0</div>';
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
function pickMyColor() {
    let newColor = colorArray.splice(Math.floor(Math.random() * colorArray.length),1);
    $('#findme').css({
        backgroundColor: newColor
    });
}



function checkCell(){
    let currentColor = $(this).css('backgroundColor');
    if (currentColor === $('#findme').css('backgroundColor')){
        var countValue = Number($(this).text());
        countValue ++;
        $(this).text(countValue);
        $(this).css('backgroundColor', addNewColor());
        pickMyColor();
        $('#message').html('Correct, great');
    }else{
        $('#message').html('Wrong, unfortunately');
    }
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