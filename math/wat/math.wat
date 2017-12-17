(module
  (func $add (param $num1 i32) (param $num2 i32) (result i32)
    get_local $num1
    get_local $num2
    i32.add
  )
  (func $sub (param $num1 i32) (param $num2 i32) (result i32)
    get_local $num1
    get_local $num2
    i32.sub
  )
  (func $mul (param $num1 i32) (param $num2 i32) (result i32)
    get_local $num1
    get_local $num2
    i32.mul
  )
  (func $div (param $num1 f64) (param $num2 f64) (result f64)
    get_local $num1
    get_local $num2
    f64.div
  )
  (export "add" (func $add))
  (export "sub" (func $sub))
  (export "mul" (func $mul))
  (export "div" (func $div))
)
