import Image, { ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";

interface FileIconProps {
  size: number
  className?: string
  src: string
}

export function FileIcon({ size, className, src }: FileIconProps) {
  return (
    <Image alt="" src={`https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/${src}.svg`} width={size} height={size} className={twMerge("", className)} />
  )
}
