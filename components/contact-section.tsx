"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { profileData } from "@/lib/data";
import { ScrollAnimation } from "./scroll-animation";
import { Loader2, Mail, Send } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(1, "이름을 입력해주세요."),
  company: z.string().min(1, "상호/회사명을 입력해주세요."),
  phone: z
    .string()
    .min(1, "연락처를 입력해주세요.")
    .regex(
      /^\d{2,3}-\d{3,4}-\d{4}$/,
      "올바른 연락처 형식을 입력해주세요. (예: 010-1234-5678)",
    ),
  email: z
    .string()
    .min(1, "이메일을 입력해주세요.")
    .email("올바른 이메일 형식이 아닙니다."),
  message: z.string().min(1, "내용을 입력해주세요."),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      company: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: data.name,
          company: data.company,
          phone: data.phone,
          email: data.email,
          message: data.message,
        },
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! },
      );

      toast.success("문의가 성공적으로 전송되었습니다.");
      reset();
    } catch {
      toast.error("전송에 실패했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              연락하기
            </h2>
            <p className="text-muted-foreground">
              궁금한 점이 있으시다면 편하게 연락해 주세요.
            </p>
            <div className="mt-4">
              <Button asChild variant="outline" className="rounded-full">
                <a href={`mailto:${profileData.email}`}>
                  <Mail className="w-4 h-4 mr-2" />
                  직접 메일 보내기
                </a>
              </Button>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={100}>
          <Card className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-md">
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">이름</Label>
                    <Input
                      id="name"
                      placeholder="홍길동"
                      aria-invalid={!!errors.name}
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">상호/회사명</Label>
                    <Input
                      id="company"
                      placeholder="회사명"
                      aria-invalid={!!errors.company}
                      {...register("company")}
                    />
                    {errors.company && (
                      <p className="text-sm text-destructive">
                        {errors.company.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">연락처</Label>
                    <Input
                      id="phone"
                      placeholder="010-1234-5678"
                      aria-invalid={!!errors.phone}
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">이메일</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="hello@example.com"
                      aria-invalid={!!errors.email}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">내용</Label>
                  <Textarea
                    id="message"
                    placeholder="전달하실 내용을 남겨주세요."
                    className="min-h-36"
                    aria-invalid={!!errors.message}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="rounded-full w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4 mr-2" />
                  )}
                  {isSubmitting ? "전송 중..." : "보내기"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>
    </section>
  );
}
