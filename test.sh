#!/bin/bash

# these are the same V8 flags we use in the Lit node
deno run -A --v8-flags=--jitless,--no-expose-wasm,--no-use-ic,--disallow-code-generation-from-strings,--clear-free-memory,--max-heap-size=256,--max-old-space-size=256 --no-code-cache main.ts