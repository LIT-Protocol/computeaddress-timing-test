import { ethers } from "npm:ethers@5";
export function go(): number {
  const before = Date.now();
  const address = ethers.utils.computeAddress(
    "0xb7fe35f9fa2bd5c77805f98daba3ace681c05653f72e7f1e37fd8914cc40f577" // empty address - don't put funds in here
  );
  const after = Date.now();
  let elapsed = after - before;
  console.log(address);
  console.log("elapsed", elapsed);
  return elapsed;
  // Lit.Actions.setResponse({ response: elapsed.toString() });
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("go: ", go());
}
