import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle, Loader } from "lucide-react";
import { site } from "@/content/site";

const schema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    message: z.string().min(20, "Message must be at least 20 characters"),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({ resolver: zodResolver(schema) });

    const onSubmit = async (data: FormData) => {
        try {
            await fetch(`https://formsubmit.co/${site.email}`, {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    message: data.message,
                    _subject: `Portfolio contact — ${data.name}`,
                    _captcha: "false",
                }),
            });
            setSubmitted(true);
        } catch {
            // fail silently — the mailto fallback in the contact details section still works
        }
    };

    if (submitted) {
        return (
            <div className="flex h-full flex-col items-center justify-center gap-4 py-10 text-center">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-accent-soft">
                    <CheckCircle className="h-6 w-6 text-accent" />
                </span>
                <p className="text-base font-medium text-foreground">Message sent!</p>
                <p className="max-w-[36ch] text-sm text-muted-foreground">
                    Thanks — I'll reply within 24 hours. You can also reach me directly at{" "}
                    <a href={`mailto:${site.email}`} className="text-accent hover:underline">
                        {site.email}
                    </a>
                    .
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
            <div>
                <label
                    htmlFor="contact-name"
                    className="mb-2 block font-mono text-[10px] uppercase tracking-[0.14em] text-subtle"
                >
                    Name
                </label>
                <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    {...register("name")}
                    className={`w-full rounded-xl border bg-canvas/70 px-4 py-3 text-sm text-foreground placeholder:text-subtle/50 outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent/30 ${errors.name ? "border-red-500/60" : "border-border"
                        }`}
                />
                {errors.name && (
                    <p className="mt-1.5 font-mono text-[10px] text-red-400">{errors.name.message}</p>
                )}
            </div>

            <div>
                <label
                    htmlFor="contact-email"
                    className="mb-2 block font-mono text-[10px] uppercase tracking-[0.14em] text-subtle"
                >
                    Email
                </label>
                <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    {...register("email")}
                    className={`w-full rounded-xl border bg-canvas/70 px-4 py-3 text-sm text-foreground placeholder:text-subtle/50 outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent/30 ${errors.email ? "border-red-500/60" : "border-border"
                        }`}
                />
                {errors.email && (
                    <p className="mt-1.5 font-mono text-[10px] text-red-400">{errors.email.message}</p>
                )}
            </div>

            <div>
                <label
                    htmlFor="contact-message"
                    className="mb-2 block font-mono text-[10px] uppercase tracking-[0.14em] text-subtle"
                >
                    Message
                </label>
                <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Tell me about the role or project…"
                    {...register("message")}
                    className={`w-full resize-none rounded-xl border bg-canvas/70 px-4 py-3 text-sm text-foreground placeholder:text-subtle/50 outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent/30 ${errors.message ? "border-red-500/60" : "border-border"
                        }`}
                />
                {errors.message && (
                    <p className="mt-1.5 font-mono text-[10px] text-red-400">{errors.message.message}</p>
                )}
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:opacity-90 disabled:pointer-events-none disabled:opacity-50"
            >
                {isSubmitting ? (
                    <>
                        <Loader className="h-4 w-4 animate-spin" />
                        Sending…
                    </>
                ) : (
                    <>
                        Send message
                        <ArrowRight className="h-4 w-4" />
                    </>
                )}
            </button>
        </form>
    );
}
