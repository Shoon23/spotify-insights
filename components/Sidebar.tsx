import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <Button variant="secondary" className="w-full justify-start">
              Top Listening
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Browse
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Radio
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
