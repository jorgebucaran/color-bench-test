#!/usr/bin/env node

import benchmark from "benchmark"

import * as nanocolors from "nanocolors"
import * as picocolors from "picocolors"
import * as colorette from "colorette"

new benchmark.Suite()
  .add("nanocolors", () => {
    nanocolors.red(nanocolors.bold("bold") + " red")
  })
  .add("picocolors", () => {
    picocolors.red(picocolors.bold("bold") + " red")
  })
  .add("colorette", () => {
    colorette.red(colorette.bold("bold") + " red")
  })
  .on("cycle", ({ target: { name, hz } }) => {
    console.log(name.padEnd(14), Math.round(hz).toLocaleString(), "ops/sec")
  })
  .run()
