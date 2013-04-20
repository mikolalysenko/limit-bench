var bench = require("../bench.js")

require("tap").test("limit-bench", function(t) {

  var counter = 0
  bench(
    0,
    100,
    function() {
      ++counter
    }
  )
  t.assert(counter >= 100)

  var start = Date.now()
  counter = 0
  var ms = bench(
    1000,
    0,
    function() {
      var t = Date.now() + 10
      while(Date.now() < t) {
      }
      ++counter
    }
  )
  var end = Date.now()
  
  t.assert(Math.abs(end - start - 1000) < 30)
  t.assert(Math.abs(ms - 10) < 1)
  t.assert(Math.abs(counter - 100) < 5)
  t.end()
})