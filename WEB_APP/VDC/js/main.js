function cal(){
    var Watt =parseInt($('#watt').val());
    var KWatt= Watt*1000;
    var Volt = parseInt($('#volt').val());
    var Cable = parseFloat($('cable').val());
    var PF = parseFloat($('#fp').val());
    var Ru = parseFloat($('#Ru').val());
    var Xu = parseFloat($('#Xu').val());
    var Ib =  KWatt/1.73*Volt*PF;
    var Acos = Math.acos(PF);
    var Sin = Math.sin(Acos);
    var DV = 1.73*Cable*Ib*(Ru*PF+Xu*Sin);
    var txt = "voltage drop is:";
    var txt0 = DV.toString();
    $('#txt_res').html(txt);
    $('#res').html(txt0);


    

}
function dell (){
    $('#txt_res').html("");
    $('#res').html("") ;
}