#!/usr/bin/env node

import bench from "benchmark"

import * as nanocolors from "nanocolors"
import * as colorette_2_0_10 from "colorette_2_0_10"

const test = (c) => c.red(c.bold("bold") + " red")

new bench.Suite()
  .add("noop", () => test(colorette_2_0_10))
  .add("colorette_2_0_10", () => test(colorette_2_0_10))
  .add("nanocolors", () => test(nanocolors))
  .on("cycle", ({ target: { name, hz } }) => {
    if (name !== "noop")
      console.log(
        name.padEnd(14).padEnd(20),
        Math.round(hz).toLocaleString(),
        "ops/sec"
      )
  })
  .run()
