const code = [0,1,1,'a',0,2,1,'b',2,0,2,1,3,,1,'c',0,2,2,2,0,'abc',0,console,0,'log',4,,5, [console, 2], 6, 2];

function vm(op, scope) {
  var stack = [];
  /**
   * first: {
   *  name: '',
   *  value: any,
   *  next: first
   * }
   */
  var scopeIds = [];
  var scopeValues = []
  var ops = [
    //0: push值
    function pushToStack(param) {
        stack.push(param)
    },
    //1: 变量赋值
    function (param){
        const idx = scopeIds.length
        scopeIds[idx] = param
        scopeValues[idx] = stack.pop()
    },
    //2: push 变量的值到stack todo: parent scope?
    function (param){
        if (typeof param !== 'number') {
            stack.push(param)
            return
        } 
        stack.push(scopeValues[param])
    },
    // 3: 相加
    function(){
        const a = stack.pop()
        const b = stack.pop()
        stack.push(a+b)
    },
    // 4: 属性 a.b
    function property(){
        const b = stack.pop()
        const a = stack.pop()
        stack.push(a[b])
    },
    function call(option){
        const [ctx, argNum] = option
        const fn = stack.pop()
        const args = []
        for (let i=0;i<argNum;i++){
            args.unshift(stack.pop())
        }
        const ret =fn.apply(ctx, args)
        stack.push(ret)
    },
    // 6: 变量改值
    function (){
        const value = stack.pop()
        const scopeIdx = stack.pop()
        scopeValues[scopeIdx] = value
    }
  ];
  for (let i = 0; i < op.length; i += 2) {
    const opO = ops[op[i]](op[i + 1]);
  }
  console.log(scopeIds, scopeValues)
}
vm(code, global);
