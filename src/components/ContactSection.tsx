"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  Loader2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export function ContactSection() {
  const { data, t } = useLanguage();
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      const hasBrowserEmailJs =
        serviceId &&
        templateId &&
        publicKey &&
        serviceId !== "your_service_id_here" &&
        templateId !== "your_template_id_here" &&
        publicKey !== "your_public_key_here";

      if (hasBrowserEmailJs && result.provider !== "emailjs-rest") {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: values.name,
            from_email: values.email,
            message: values.message,
          },
          publicKey
        );
      }

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Erro no envio");
      }

      setSubmitStatus("success");
      reset();
    } catch (err) {
      console.error("Contact submission error:", err);
      setSubmitStatus("error");
    }
  };

  const socialChannels = [
    {
      id: "email",
      label: "E-mail",
      value: data.profile.email,
      href: `mailto:${data.profile.email}`,
      icon: <Mail className="h-5 w-5 text-blue-400" />,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: data.profile.linkedinDisplay,
      href: data.profile.linkedin,
      icon: <Linkedin className="h-5 w-5 text-blue-400" />,
    },
    {
      id: "github",
      label: "GitHub",
      value: data.profile.githubDisplay,
      href: data.profile.github,
      icon: <Github className="h-5 w-5 text-blue-400" />,
    },
  ];

  return (
    <section
      id="contato"
      className="relative py-16 sm:py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho // Contato */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="pb-6 border-b border-white/[0.12]"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm sm:text-base font-bold text-blue-400">
              {data.contact.sectionNumber}
            </span>
            <span className="font-mono text-sm sm:text-base text-blue-300">
              {t(data.contact.sectionTag)}
            </span>
          </div>

          <h2 className="mt-3 text-2xl sm:text-4xl font-bold tracking-tight text-white">
            {t(data.contact.title)}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#A1A1AA] max-w-2xl">
            {t(data.contact.subtitle)}
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Coluna Esquerda: E-mail, LinkedIn e GitHub */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            <h3 className="font-mono text-sm font-semibold text-white">
              {t(data.contact.directChannelsTitle)}
            </h3>

            <div className="space-y-3">
              {socialChannels.map((channel) => (
                <a
                  key={channel.id}
                  href={channel.href}
                  target={channel.id === "email" ? undefined : "_blank"}
                  rel={
                    channel.id === "email" ? undefined : "noopener noreferrer"
                  }
                  className="group block"
                >
                  <Card className="p-4 bg-white/[0.03] hover:bg-blue-600/10 hover:border-blue-500/50 transition-all duration-300">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/60 group-hover:border-blue-400/50 transition-colors">
                          {channel.icon}
                        </div>
                        <div className="min-w-0">
                          <span className="text-sm font-semibold text-white">
                            {channel.label}
                          </span>
                          <p className="truncate font-mono text-xs text-[#A1A1AA] group-hover:text-zinc-200">
                            {channel.value}
                          </p>
                        </div>
                      </div>

                      <ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-500 group-hover:text-white transition-transform" />
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Coluna Direita: Formulário de Contato */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <Card className="p-6 sm:p-8 bg-black/70 border-white/15">
              <h3 className="font-mono text-sm font-semibold text-white pb-4 mb-5 border-b border-white/[0.12]">
                {t(data.contact.formTitle)}
              </h3>

              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="space-y-4"
              >
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="block font-mono text-xs text-zinc-300"
                  >
                    {t(data.contact.fields.nameLabel)}
                  </label>
                  <Input
                    id="contact-name"
                    type="text"
                    placeholder={t(data.contact.fields.namePlaceholder)}
                    aria-invalid={!!errors.name}
                    {...register("name", {
                      required: t(data.contact.validation.nameRequired),
                      minLength: {
                        value: 2,
                        message: t(data.contact.validation.nameMin),
                      },
                    })}
                  />
                  {errors.name && (
                    <p
                      role="alert"
                      className="flex items-center gap-1.5 font-mono text-xs text-red-400"
                    >
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      <span>{errors.name.message}</span>
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-xs text-zinc-300"
                  >
                    {t(data.contact.fields.emailLabel)}
                  </label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder={t(data.contact.fields.emailPlaceholder)}
                    aria-invalid={!!errors.email}
                    {...register("email", {
                      required: t(data.contact.validation.emailRequired),
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: t(data.contact.validation.emailInvalid),
                      },
                    })}
                  />
                  {errors.email && (
                    <p
                      role="alert"
                      className="flex items-center gap-1.5 font-mono text-xs text-red-400"
                    >
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      <span>{errors.email.message}</span>
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-xs text-zinc-300"
                  >
                    {t(data.contact.fields.messageLabel)}
                  </label>
                  <Textarea
                    id="contact-message"
                    placeholder={t(data.contact.fields.messagePlaceholder)}
                    aria-invalid={!!errors.message}
                    {...register("message", {
                      required: t(data.contact.validation.messageRequired),
                      minLength: {
                        value: 10,
                        message: t(data.contact.validation.messageMin),
                      },
                    })}
                  />
                  {errors.message && (
                    <p
                      role="alert"
                      className="flex items-center gap-1.5 font-mono text-xs text-red-400"
                    >
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      <span>{errors.message.message}</span>
                    </p>
                  )}
                </div>

                {submitStatus === "success" && (
                  <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/30 p-3.5 text-emerald-200">
                    <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-300">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>{t(data.contact.successTitle)}</span>
                    </div>
                    <p className="mt-1 text-xs text-emerald-100/90">
                      {t(data.contact.successMessage)}
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="rounded-xl border border-red-500/40 bg-red-950/30 p-3.5 text-red-200">
                    <div className="flex items-center gap-2 font-mono text-xs font-bold text-red-300">
                      <AlertCircle className="h-4 w-4" />
                      <span>{t(data.contact.errorTitle)}</span>
                    </div>
                    <p className="mt-1 text-xs text-red-100/90">
                      {t(data.contact.errorMessage)}
                    </p>
                  </div>
                )}

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>{t(data.contact.submittingBtn)}</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>{t(data.contact.submitBtn)}</span>
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
