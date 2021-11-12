
function inner(){
  return 3
}

function closure(){
  var a = 0
  return {
    a: function(){
      var inn = 3
      a +=1
      return a + inn
    },
    v: function(){
      a -=1
      return a
    }
  }
}
function closure2(){
  var a = 0
  return function(){
    a +=1
    return a
  }
}
var fn1 = closure()
var fn2 = closure()
fn1()
var fn = function(param1, param2){
  var fn1Var = 2
  inner(param1)
  console.log(param1, param2, fn1Var)
  return 3
}
function ABC(){

}
ABC.prototype.fn = function(){
  this.key = 2
}
document.addEventListener('abort', fn2)
document.addEventListener('abort', fn1)