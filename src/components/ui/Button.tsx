import { cn } from "@/utils/cn";

export default function Button({
  children,
  className,
  variant = "primary",
  ...props
}: any) {
  const variants: any = {
    primary: "bg-primary text-black hover:opacity-90",
    accent: "bg-accent text-white hover:opacity-90",
    ghost: "bg-gray-200 text-black",
    danger: "bg-red-500 text-white",
  };

  return (
    <button
      className={cn(
        "px-4 py-2 rounded-xl text-sm font-medium transition",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}