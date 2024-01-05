"use client";
import { ReactNode, useEffect, useRef, useState } from "react";

type PropsType = {
  isOpen: boolean;
  children: ReactNode;
};

export default function Collapse({ isOpen, children }: PropsType) {
  const [maxHeight, setMaxHeight] = useState('0px');
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (divRef.current) {
      setMaxHeight(isOpen ? `${divRef.current.scrollHeight + 500}px` : '0px');
    }
  }, [isOpen]);

  return (
    <div
      style={{ maxHeight, overflow: "hidden", transition: 'max-height 0.3s ease-in-out' }}
      ref={divRef}
    >
      {children}
    </div>
  );
}
