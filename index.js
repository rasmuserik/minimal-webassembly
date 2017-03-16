(async()=>{

  let env = {
    memory: new WebAssembly.Memory({initial: 256, maximum: 256}),
    table: new WebAssembly.Table({element: 'anyfunc', initial: 0, maximum: 0}),
    memoryBase: 0,
    tableBase: 0,
    _js_func: () => 40,
  }

  let code = await fetch('hello.wasm');
  code = await code.arrayBuffer();
  code = await WebAssembly.instantiate(code, {env});

  document.body.innerHTML += code.instance.exports._hello(2)

})();
