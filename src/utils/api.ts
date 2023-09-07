import qs from "qs";
import type { PayloadApiArgs, PayloadCollection } from "../types/payload";

function apiFetch(url: string, options: RequestInit = {}) {
  const defaultOptions: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 30,
    },
  };

  const next = {
    revalidate: 30,
    ...options.next,
  };
  const mergedOptions = {
    ...defaultOptions,
    ...options,
    next,
  };

  return fetch(url, mergedOptions).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(
      `Error fetching from Payload API: ${res.statusText} (${res.status})}`
    );
  });
}

export async function getColl<T>(
  endpoint: string,
  query?: PayloadApiArgs,
  fetechOptions?: RequestInit
): Promise<PayloadCollection<T>> {
  const stringifiedQuery = qs.stringify(
    { limit: 1000, ...query },
    { addQueryPrefix: true }
  );
  const url = `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api${endpoint}${stringifiedQuery}`;
  const data = await apiFetch(url, fetechOptions ?? {});
  return data;
}

export async function getGlob<T>(
  endpoint: string,
  query?: PayloadApiArgs,
  fetechOptions?: RequestInit
): Promise<T> {
  const stringifiedQuery = qs.stringify(
    { limit: 1000, ...query },
    { addQueryPrefix: true }
  );
  const url = `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/globals${endpoint}${stringifiedQuery}`;
  const data = await apiFetch(url, fetechOptions ?? {});
  return data;
}
