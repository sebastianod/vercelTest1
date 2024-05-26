import { Button } from "@/components/ui/button";
import { ButtonLoading } from "@/components/ui/buttonLoading";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
  CardSubTitle,
  CardImage,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div>
      <div>
        <Card>
          <CardImage src="/abstract.png" alt=""/>
          <CardHeader>
            <CardTitle>Abstract</CardTitle>
            <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur ad necessitatibus reprehenderit quos quam molestias.</CardDescription>
          </CardHeader>
          <CardContent>
            <CardSubTitle>Example</CardSubTitle>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur ad necessitatibus reprehenderit quos quam molestias
              unde, totam facilis impedit aperiam itaque repellendus minus nisi
              vel corporis at minima sunt voluptatum.
            </p>
          </CardContent>
        </Card>
      </div>
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
