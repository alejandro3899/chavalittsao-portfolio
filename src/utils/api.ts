import type { PayloadApiArgs, PayloadCollection } from "@/types/payload";
import qs from "qs";

function apiFetch(url: string, options: RequestInit = {}) {
  const defaultOptions: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const mergedOptions = {
    ...defaultOptions,
    ...options,
    next: {
      revalidate: 30,
      ...options.next,
    },
  };

  return fetch(url, mergedOptions).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(
      `Error fetching from Payload API: ${res.statusText} (${res.status})`
    );
  });
}

export async function getColl<T>(
  endpoint: string,
  query?: PayloadApiArgs,
  fetchOptions?: RequestInit
): Promise<PayloadCollection<T>> {
  const stringifiedQuery = qs.stringify(
    { limit: 1000, ...query },
    { addQueryPrefix: true }
  );
  const url = `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api${endpoint}${stringifiedQuery}`;
  const data = await apiFetch(url, fetchOptions ?? {});
  return data;
}

export async function getGlob<T>(
  endpoint: string,
  query?: PayloadApiArgs,
  fetchOptions?: RequestInit
): Promise<T> {
  const stringifiedQuery = qs.stringify(
    { limit: 1000, ...query },
    { addQueryPrefix: true }
  );
  const url = `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/globals${endpoint}${stringifiedQuery}`;
  const data = await apiFetch(url, fetchOptions ?? {});
  return data;
}
