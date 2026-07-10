"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "A little more detail, please"),
  // honeypot (bots fill this; humans don't see it)
  botcheck: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  async function onSubmit(values: FormValues) {
    if (values.botcheck) return; // honeypot tripped
    setStatus("idle");

    // No key yet → fall back to opening the user's mail client.
    if (!WEB3FORMS_KEY) {
      const mailto = `mailto:ar3991492@gmail.com?subject=${encodeURIComponent(
        `Portfolio message from ${values.name}`
      )}&body=${encodeURIComponent(values.message + "\n\n— " + values.email)}`;
      window.location.assign(mailto);
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio message from ${values.name}`,
          from_name: values.name,
          name: values.name,
          email: values.email,
          message: values.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("ok");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm text-fg placeholder:text-fg-subtle backdrop-blur transition-colors focus:border-accent focus:outline-none";

  if (status === "ok") {
    return (
      <div className="rounded-2xl border border-accent-4/40 bg-surface/60 p-8 text-center backdrop-blur">
        <CheckCircle2 className="mx-auto size-10 text-accent-4" />
        <h3 className="mt-3 font-display text-xl font-semibold text-fg">
          Message sent
        </h3>
        <p className="mt-1 text-sm text-fg-muted">
          Thanks — I&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-medium text-accent hover:underline"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
      {/* honeypot */}
      <input
        type="checkbox"
        {...register("botcheck")}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-fg-muted">
            Name
          </label>
          <input id="name" {...register("name")} className={field} placeholder="Your name" />
          {errors.name && (
            <p className="mt-1 text-xs text-accent-6">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-fg-muted">
            Email
          </label>
          <input id="email" type="email" {...register("email")} className={field} placeholder="you@company.com" />
          {errors.email && (
            <p className="mt-1 text-xs text-accent-6">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-fg-muted">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          className={cn(field, "resize-y")}
          placeholder="Tell me about the role or project…"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-accent-6">{errors.message.message}</p>
        )}
      </div>

      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-accent-6">
          <AlertCircle className="size-4" /> Something went wrong. Try again, or email me directly.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 font-medium text-accent-fg shadow-[0_8px_30px_-8px_rgb(var(--glow)/0.5)] transition-all hover:brightness-110 active:scale-[0.98] disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send className="size-4" /> Send message
          </>
        )}
      </button>

      {!WEB3FORMS_KEY && (
        <p className="text-center text-xs text-fg-subtle">
          {/* TODO(abdul): add NEXT_PUBLIC_WEB3FORMS_KEY in .env.local to send in-page.
              Until then this opens your email client. */}
          Tip: add your Web3Forms key to send without leaving the page.
        </p>
      )}
    </form>
  );
}
