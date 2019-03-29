var alldata = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
var alldataarr = alldata.split(",");
var num = alldataarr.length - 1;
var timer;     
function start() {
  clearInterval(timer);
  timer = setInterval('change()', 10);
}
function change() {
  document.getElementById("oknum").innerHTML = alldataarr[GetRnd(0, num)];
}
function GetRnd(min, max) {
  return parseInt(Math.random() * (max - min + 1));
}     
function ok() {
  clearInterval(timer);
  document.getElementById("showresult").value = document.getElementById("oknum").innerText;
}      

 