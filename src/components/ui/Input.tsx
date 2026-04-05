import { cn } from "@/utils/cn";

export default function Input(props: any) {
  return (
    <input
      {...props}
      className={cn(
        "w-full px-3 py-2 text-sm border border-border rounded-xl outline-none focus:ring-2 focus:ring-accent",
        props.className
      )}
    />
  );
}