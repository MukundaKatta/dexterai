import { describe, it, expect } from "vitest";
import { Dexterai } from "../src/core.js";
describe("Dexterai", () => {
  it("init", () => { expect(new Dexterai().getStats().ops).toBe(0); });
  it("op", async () => { const c = new Dexterai(); await c.process(); expect(c.getStats().ops).toBe(1); });
  it("reset", async () => { const c = new Dexterai(); await c.process(); c.reset(); expect(c.getStats().ops).toBe(0); });
});
