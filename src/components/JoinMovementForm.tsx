import { Footer, Form } from "@/types/cms";
import slateToHtml, { richTextConfig } from "@/utils/slateToHtml";
import Button from "./Button";
import { Loader2 } from "lucide-react";
import { useState } from "react";

export default function JoinMovementForm({
  formBlocks,
}: {
  formBlocks: NonNullable<Footer["joinTheMovement"]["form"]>;
}) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");

  const { form } = formBlocks?.[0];
  const {
    id: formId,
    confirmationMessage,
    submitButtonLabel,
    fields,
  } = form as Form;
  const mailField = fields?.[0] as any;
  const mailFieldPlaceholder = mailField?.label ?? "EMAIL";

  async function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setError(null);
      setLoading(true);

      const formData = [
        {
          field: "email",
          value: email,
        },
      ];

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/form-submissions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            form: formId,
            submissionData: formData,
          }),
        }
      );
      const result = await res.json();

      if (res.ok) {
        setEmail("");
        setSuccess(true);
        setTimeout(() => setSuccess(false), 4000);
      } else {
        setError(result?.message ?? "Something went wrong");
      }
    } catch (err: any) {
      console.log("error: ", err.message);
      setError(err?.message ?? "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <form className="flex flex-col gap-2" onSubmit={handleFormSubmit}>
        <div className="h-[42px] flex items-stretch gap-1.5">
          <input
            type="email"
            value={email}
            placeholder={mailFieldPlaceholder}
            className="w-full flex items-center justify-center bg-transparent text-xs border border-black/50 py-3 px-3 rounded focus:outline-none focus:border-black"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            type="submit"
            className="min-w-[106px] font-medium text-[10px] leading-none rounded"
            disabled={loading}
          >
            {loading ? (
              <Loader2 size={14} className="animate-spin" />
            ) : (
              submitButtonLabel
            )}
          </Button>
        </div>
        {error && <p className="text-sm">{error}</p>}
        {success && (
          <div
            className="[&>*]:text-[.75rem] sm:[&>*]:text-sm"
            dangerouslySetInnerHTML={slateToHtml(
              confirmationMessage,
              richTextConfig
            )}
          />
        )}
      </form>
    </>
  );
}
