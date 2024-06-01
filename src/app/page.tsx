import { ButtonLoading } from "@/components/ui/buttonLoading";
import VocabCard from "@/components/ui/VocabCard";
import VocabCreate from "@/components/ui/VocabCreate";
import { CardWithForm } from "@/components/ui/CardWithForm";
//import words from "../lib/vocabData.json"; //mock data
//import { fetchAllVocabInstantFeedback } from "@/lib/data";
import { fetchPaginatedVocabInstantFeedback } from "@/lib/data";

export default async function Page() {
  const words = await fetchPaginatedVocabInstantFeedback(5,1);

  return (
    <div className="flex flex-col gap-4 justify-start">
      <div className="grid auto-rows-max lg:grid-cols-3 lg:gap-4 md:grid-cols-2 md:gap-4 sm:grid-cols-1 sm:gap-y-4">
        {words.map((wordItem, i) => (
          <VocabCard key={i} word={wordItem} />
        ))}
      </div>
      
        <VocabCreate />
        <CardWithForm />
      
      <div className="flex justify-center space-x-4">
        <ButtonLoading variant={"default"} isLoading={true}>
          Click Me
        </ButtonLoading>
        <ButtonLoading variant={"secondary"}>Click Me</ButtonLoading>
        <ButtonLoading variant={"outline"} isLoading={true}>
          Click Me
        </ButtonLoading>
        <ButtonLoading variant={"destructive"} isLoading={true}>
          Click Me
        </ButtonLoading>
        <ButtonLoading variant={"ghost"}>Click Me</ButtonLoading>
      </div>
    </div>
  );
}
