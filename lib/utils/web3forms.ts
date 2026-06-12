export const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export function getWeb3FormsAccessKey(): string | undefined {
  const key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  return typeof key === "string" ? key.trim() : undefined;
}

export type Web3FormsPayload = Record<string, string>;

export async function submitToWeb3Forms(payload: Web3FormsPayload): Promise<void> {
  const response = await fetch(WEB3FORMS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });

  let result: { success?: boolean; message?: string };
  try {
    result = await response.json();
  } catch {
    throw new Error("Unexpected response from the server. Please try again.");
  }

  if (!response.ok || !result.success) {
    throw new Error(result.message ?? "Submission failed. Please try again.");
  }
}
