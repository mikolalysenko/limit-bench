"use strict"

function runBenchmark(time_limit, warmup, task) {
  //Do warm up
  for(var i=0; i<warmup; ++i) {
    task()
  }
  //Run task
  var score = 0
  var prev = Date.now()
  var start = prev
  while(true) {
    task()
    var cur = Date.now()
    var d = (cur - start)|0
    if(d > time_limit) {
      score += (time_limit-((prev-start)|0)) / (cur - prev)
      break
    } else {
      ++score
      prev = cur
    }
  }
  //Return average time per iteration
  return time_limit / score
}

module.exports = runBenchmark