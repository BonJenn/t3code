import { scopeThreadRef } from "@t3tools/client-runtime/environment";
import { EnvironmentId, ThreadId } from "@t3tools/contracts";
import { describe, expect, it } from "vite-plus/test";

import { threadWindowPath } from "./threadWindow";

describe("threadWindowPath", () => {
  it("builds the thread route and escapes unsafe characters", () => {
    const ref = scopeThreadRef(EnvironmentId.make("env 1"), ThreadId.make("t/1"));
    expect(threadWindowPath(ref)).toBe("/env%201/t%2F1");
  });
});
