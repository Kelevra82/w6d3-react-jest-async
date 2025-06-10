/* eslint-disable no-undef */
import "@testing-library/jest-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { fetchData } from "./apiService";

describe("fetchData()", () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  it("resolves with JSON when response is 200", async () => {
    const fakeData = {
      message: "hello",
    };

    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => fakeData,
    });

    await expect(fetchData("https://banana.example.com/data")).resolves.toEqual(
      fakeData
    );
  });
});
