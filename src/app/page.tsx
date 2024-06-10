import { ButtonLoading } from "@/components/ui/buttonLoading";
import VocabCard from "@/components/ui/VocabCard";
//import words from "../lib/vocabData.json"; //mock data
import { fetchAllVocabInstantFeedback } from "@/lib/data";
import { fetchPaginatedVocabInstantFeedback } from "@/lib/data";
import { DialogCreateVocab } from "@/components/ui/dialogCreateVocab";

export default async function Page() {
  const words = await fetchAllVocabInstantFeedback();
  //const words = await fetchPaginatedVocabInstantFeedback(100, 1);
  const showVocab = () => {
    return words.map((wordItem, i) => <VocabCard key={i} word={wordItem} />);
  };

  return (
    <div className="flex flex-col justify-center gap-4">
      <div className="flex justify-center">
        <DialogCreateVocab />
      </div>

      <div className="grid auto-rows-max grid-cols-1 justify-items-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {showVocab()}
      </div>

      {/* <div className="flex justify-center space-x-4">
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
      </div> */}
    </div>
  );
}
