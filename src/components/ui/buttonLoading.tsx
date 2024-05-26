import * as React from "react"
import { Loader2 } from "lucide-react";
import { Button, ButtonProps } from "@/components/ui/button";

export interface ButtonLoadingProps extends ButtonProps {
  isLoading?: boolean;
}

const ButtonLoading = React.forwardRef<HTMLButtonElement, ButtonLoadingProps>(
  ({ children, isLoading, ...props }, ref) => (
    <Button ref={ref} disabled={isLoading} {...props}>
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  )
);
ButtonLoading.displayName = "ButtonLoading";

export { ButtonLoading };