
function reSum()
{
    let num1 = parseInt(document.getElementById("goomba").value);
    let num2 = parseInt(document.getElementById("bomb").value);
    let num3 = parseInt(document.getElementById("cheep").value);
    
    document.getElementById("total").value = (num1 * 5) + (num2 * 7) + (num3 * 11);

}
