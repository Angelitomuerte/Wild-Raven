import { ButtonHTMLAttributes } from "react";

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className = "", ...rest } = props;

  return (
    <button
      className={`inline-flex items-center justify-center
        px-5 py-2.5 md:px-6 md:py-3
        font-semibold text-[--color-cream] text-[0.95rem] tracking-wide
        rounded-md shadow-md border border-transparent
        bg-gradient-to-br from-[--color-raven-brown] via-[--color-goldenrod] to-[--color-sage-green]
        hover:from-[--color-forest-green] hover:via-[--color-olive-green] hover:to-[--color-goldenrod]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[--color-forest-green]/70
        transition-all duration-300 ease-in-out
        ${className}`}
      {...rest}
    />
  );
}
