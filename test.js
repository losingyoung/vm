const a = {key:2}
function trans(obj){
  obj.key = 3
}
function trans2(obj){
  console.log(obj.key)
  obj.key = 4
}
trans(a)
console.log(a.key)
trans2(a)
console.log(a.key)