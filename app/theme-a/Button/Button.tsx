import type { ButtonHTMLAttributes } from "react";
import "theme/Button/Button.css";

export default function Button(
  props: React.DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) {
  return <button {...props} />;
}
