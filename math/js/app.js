wasmMath = {
  add:function(){
    console.log('Sorry! Addition function not yet available.')
  },
  sub:function(){
    console.log('Sorry! Subtraction function not yet available.')
  },
  mul:function(){
    console.log('Sorry! Multiply function not yet available.')
  },
  div:function(){
    console.log('Sorry! Division function not yet available.')
  }
}

document.getElementById('add').onclick = function(){
  setAnswer(wasmMath.add(getFirstNum(),getSecondNum()))
}

document.getElementById('sub').onclick = function(){
  setAnswer(wasmMath.sub(getFirstNum(),getSecondNum()))
}

document.getElementById('mul').onclick = function(){
  setAnswer(wasmMath.mul(getFirstNum(),getSecondNum()))
}

document.getElementById('div').onclick = function(){
  setAnswer(wasmMath.div(getFirstNum(),getSecondNum()))
}

function setAnswer(answer){
  document.getElementById('answer').innerText = answer  
}

function getFirstNum(){
  return parseInt(document.getElementById('firstNum').value)
}

function getSecondNum(){
  return parseInt(document.getElementById('secondNum').value)
}

fetch('http://localhost:3000/wasm/math.wasm')
  .then((response)=>{
    if(response.ok){
      return response.arrayBuffer()
    }
    return Promise.reject(response)
  })
  .then((bytes)=>{
    return WebAssembly.instantiate(bytes)
  })
  .then((result)=>{
    wasmMath = result.instance.exports
  })
  .catch((err)=>{
    console.log(err)
  })
