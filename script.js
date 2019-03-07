$("button").click(function(){
var money= parseInt($(".Money").val());
var Math=1990+money;
var name= $(".Name").val();
var Work= $(".Job").val();
console.log(Math);
$("span").text(name+", You Will Own A House In The Year "+Math+" because you have "+Work+" Job ");




});