"use client";
import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "./textarea";
import { insertVocabItem } from "@/lib/data";
import { useState } from "react";
import { ButtonLoading } from "./buttonLoading";

export function CreateVocab() {
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formSchema = z.object({
    image_url: z.union([z.literal(""), z.string().trim().url()]),
    word: z
      .string()
      .min(1, { message: "Word must have at least 1 character." }),
    definition: z
      .string()
      .min(2, { message: "Definition must have at least 2 characters." }),
    context: z.string().describe("A passage where you found this word."),
    example: z
      .string()
      .describe("Try to make an example usage of the word yourself."),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      image_url: "",
      word: "",
      definition: "",
      context: "",
      example: "",
    },
  });

  async function submitNewVocab(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const newItem = {
        vocab_image_url: values.image_url,
        vocab_word: values.word,
        vocab_definition: values.definition,
        vocab_context: values.context,
        vocab_example: values.example,
      };
      const success = await insertVocabItem(newItem);
      setSubmissionSuccess(success);
      setIsLoading(false);
      console.log("success?", success);
    } catch (error) {
      console.error("Error inserting vocabulary item:", error);
      setSubmissionSuccess(false);
      setIsLoading(false);
      console.log("success?", false);
    }
  }

  return (
    <Card className="min-w-[500px]">
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>Create Vocab Card</CardTitle>
          <X className="cursor-pointer" />
        </div>
        <CardDescription>Add your newly found word.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(submitNewVocab)}
            className="space-y-8"
          >
            <div className="grid auto-rows-max grid-cols-2 justify-items-center gap-1">
              <FormField
                control={form.control}
                name="word"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Word*</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="example"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Example</FormLabel>
                    <FormControl>
                      <Textarea placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="definition"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Definition*</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="context"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Context</FormLabel>
                    <FormControl>
                      <Textarea placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="image_url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image Url</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <ButtonLoading type="submit" isLoading={isLoading}>
              Submit
            </ButtonLoading>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
