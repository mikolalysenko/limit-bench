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
  bench(
    1000,
    0,
    function() {
      ++counter
    }
  )
  t.assert(counter > 100)
  var end = Date.now()
  
  t.assert(Math.abs(end - start - 1000) < 30)
  t.end()
})