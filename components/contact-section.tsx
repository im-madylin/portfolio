"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollAnimation } from "./scroll-animation";
import { Send } from "lucide-react";

interface ContactFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
}

const initialFormData: ContactFormData = {
  name: "",
  company: "",
  phone: "",
  email: "",
  message: "",
};

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitMessage(
      "문의 폼 인터페이스만 먼저 구현했습니다. 메일 연동은 추후 진행 예정입니다.",
    );
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
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={100}>
          <Card className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-md">
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">이름</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="홍길동"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">상호/회사명</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="회사명"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">연락처</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="010-1234-5678"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">이메일</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="hello@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">내용</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="전달하실 내용을 남겨주세요."
                    className="min-h-36"
                    required
                  />
                </div>

                {submitMessage && (
                  <p className="text-sm text-primary">{submitMessage}</p>
                )}

                <Button type="submit" className="rounded-full w-full sm:w-auto">
                  <Send className="w-4 h-4 mr-2" />
                  등록하기
                </Button>
              </form>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>
    </section>
  );
}
