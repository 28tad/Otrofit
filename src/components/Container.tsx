import { ReactNode } from "react";

interface IProps {
  children?: ReactNode;
  className?: string;
  id?: string
}

export function Container(props: IProps) {
  return (
    <div
      id={props.id}
      className={`xs:px-[20px] md:px-0 md:max-w-[560px] lg:max-w-[1070px] mx-auto ${props.className}`}
    >
      {props.children}
    </div>
  );
}
