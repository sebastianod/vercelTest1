import { useEffect, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertVocabItem } from "@/lib/data";
import { useRouter } from "next/navigation";

export const useDialogCreateVocab = () => {
  const router = useRouter();
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean | null>(
    null,
  );
  const [open, setOpen] = useState<boolean>(false);
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

  const { reset } = form;
  const { isSubmitting, isSubmitSuccessful } = form.formState;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const submitNewVocab = async (values: z.infer<typeof formSchema>) => {
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
      setSubmissionSuccess(isSubmitting);
      setIsLoading(false);
      setOpen(false); // Close dialog
      console.log("success?", success);
      router.refresh();
    } catch (error) {
      console.error("Error inserting vocabulary item:", error);
      setSubmissionSuccess(false);
      setIsLoading(false);
      console.log("success?", false);
    }
  };

  return {
    form,
    open,
    setOpen,
    isLoading,
    submitNewVocab,
  };
};
