"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

type SubmissionState = "idle" | "submitting" | "success" | "error";

const defaultForm = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState(defaultForm);
  const [state, setState] = useState<SubmissionState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setForm(defaultForm);
      setState("success");
    } catch {
      setState("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-[1.75rem] border border-line bg-surface-strong p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-foreground">
          Name
          <input
            required
            value={form.name}
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            className="min-h-12 rounded-2xl border border-line bg-white/80 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-foreground">
          Email
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            className="min-h-12 rounded-2xl border border-line bg-white/80 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
            placeholder="you@company.com"
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-medium text-foreground">
        Company
        <input
          value={form.company}
          onChange={(event) => setForm((current) => ({ ...current, company: event.target.value }))}
          className="min-h-12 rounded-2xl border border-line bg-white/80 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
          placeholder="Company or brand"
        />
      </label>

      <label className="grid gap-2 text-sm font-medium text-foreground">
        Project Brief
        <textarea
          required
          rows={6}
          value={form.message}
          onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
          className="rounded-[1.5rem] border border-line bg-white/80 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
          placeholder="Tell us about your company, goals, and timeline."
        />
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <motion.button
          type="submit"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          disabled={state === "submitting"}
          className="inline-flex justify-center rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent-strong disabled:cursor-not-allowed disabled:opacity-70"
        >
          {state === "submitting" ? "Sending..." : "Send Enquiry"}
        </motion.button>
        <p className="text-sm text-muted">
          {state === "success" && "Message captured. Connect this route to your CRM or inbox next."}
          {state === "error" && "Something went wrong. Please try again."}
          {state === "idle" && "This starter includes a lightweight API endpoint ready for future integration."}
        </p>
      </div>
    </form>
  );
}
