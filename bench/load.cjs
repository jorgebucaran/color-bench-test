#!/usr/bin/env node

let before
const show = (name) =>
  console.log(name.padEnd(14), (performance.now() - before).toFixed(2) + "ms")

before = performance.now()
const nanocolors = require("nanocolors")
show("nanocolors")

before = performance.now()
const picocolors = require("picocolors")
show("picocolors")

before = performance.now()
const colorette = require("colorette")
show("colorette")
