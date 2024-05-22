"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Email must be a valid email.",
  }),
  message: z.string().min(2, {
    message: "Message must be at least 2 characters.",
  }),
});

export type ContactFormProps = {
  username: string;
  email: string;
  message: string;
};

export const FourthSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormProps> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex w-full flex-col items-center gap-12 py-12">
      <h2 className="text-2xl font-bold text-[#50B2EA]">Contact Us</h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full max-w-[370px] flex-col items-center justify-center space-y-8 px-4"
        >
          <FormField
            {...form.register("username", { required: true, maxLength: 20 })}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    className="border-[#50B2EA] focus-visible:ring-[#50B2EA]"
                    placeholder="Username"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            {...form.register("email", {
              required: true,
              maxLength: 50,
            })}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="border-[#50B2EA] focus-visible:ring-[#50B2EA]"
                    placeholder="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            {...form.register("message", { required: true, maxLength: 300 })}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    className="border-[#50B2EA] focus-visible:ring-[#50B2EA]"
                    placeholder="Write your message"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-[#50B2EA] px-14 py-5 transition-colors hover:bg-blue-400 focus-visible:ring-[#50B2EA]"
          >
            Help me
          </Button>
        </form>
      </Form>
    </div>
  );
};
