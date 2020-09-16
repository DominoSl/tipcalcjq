$(function(){
// calculation:
function result() {
    let bill = parseInt($('#bill').val(), 10);
    let tip = parseInt($('#tip').val(), 10)* bill /100;
    let number = $('#number').val();
    let tipPer = tip / number;
    let total= bill -(-tip);
    let totalPer = total / number;
    $('#tipf').html('$' + tipPer);
    $('#total').html('$' + totalPer);
} 

//buttons

$('#tm').click( ()=> {
   $('#tip').val(parseInt($('#tip').val(), 10) - 1 + '%');
   result();
})

$('#tp').click(() => {
    $('#tip').val(parseInt($('#tip').val(), 10) + 1 + '%');
    result();
})

$('#nm').click(() => {
    $('#number').val(parseInt($('#number').val(), 10) - 1);
    result();
})

$('#np').click(() => {
    $('#number').val(parseInt($('#number').val(), 10) + 1);
    result();
})

//forms

$('#bill').change( ()=>{
    result();       
})


$('#tip').change( ()=>{
    result();       
})

$('#number').change( ()=>{
    result();       
})

})
