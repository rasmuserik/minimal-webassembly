(module
  (type $0 (func (result i32)))
  (type $1 (func (param i32) (result i32)))
  (import "env" "_js_func" (func $import$0 (result i32)))
  (import "env" "memory" (memory $0 256 256))
  (import "env" "table" (table 0 0 anyfunc))
  (import "env" "memoryBase" (global $import$3 i32))
  (import "env" "tableBase" (global $import$4 i32))
  (export "_hello" (func $_hello))
  (func $_hello (type $1) (param $var$0 i32) (result i32)
    (i32.add
      (call $import$0)
      (get_local $var$0)
    )
  )
)

