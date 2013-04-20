limit-bench
===========
Runs a benchmark with a time limit.

## Example

```javascript
var counter = 0
console.log(require("limit-bench")(
  1000,     //Run for 1000 ms
  100,      //Do 100 warm up iterations
  function() {
    ++counter   //Just increment a counter
  }
))
```

## Install

    npm install limit-bench

### `require("limit-bench")(time_limit, warmup, task)`
Benchmarks task by running it for about `time_limit` milliseconds.

* `time_limit`: The number of milliseconds to run task for (rounds up to nearest task count)
* `warmup`: The number of warm up iterations to run the task
* `task`: A function to benchmark

**Returns** The average time per task in milliseconds

# Credits
(c) 2013 Mikola Lysenko. MIT License