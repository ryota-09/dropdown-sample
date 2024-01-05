"use client";
import {  useState } from "react";
import Collapse from "./Collapse";
import CollapseList from "./CollapseList";

type SelectedButton = "Button01" | "Button02" | "Button03";

export default function SideNav() {
  const [selectedButton, setSelectedButton] = useState<SelectedButton | null>(null);

  return (
    <>
      <button
        type="button"
        style={{ borderBottom: selectedButton === "Button01" ? "1px solid gray" : "1px solid black", fontSize: "50px" }}
        onClick={() => {
          setSelectedButton(selectedButton === "Button01" ? null : "Button01");
        }}
      >
        Button 01
      </button>
      <Collapse isOpen={selectedButton === "Button01"}>
        <CollapseList isOpen={selectedButton === "Button01"} postId={1} />
      </Collapse>
      <button
        type="button"
        style={{ borderBottom: selectedButton === "Button02" ? "1px solid gray" : "1px solid black",  fontSize: "50px" }}
        onClick={() => {
          setSelectedButton(selectedButton === "Button02" ? null : "Button02");
        }}
      >
        Button 02
      </button>
      <Collapse isOpen={selectedButton === "Button02"}>
        <CollapseList isOpen={selectedButton === "Button02"} postId={2} />
      </Collapse>
      <button
        type="button"
        style={{ borderBottom: selectedButton === "Button03" ? "1px solid gray" : "1px solid black", fontSize: "50px" }}
        onClick={() => {
          setSelectedButton(selectedButton === "Button03" ? null : "Button03");
        }}
      >
        Button 03
      </button>
      <Collapse isOpen={selectedButton === "Button03"}>
        <CollapseList isOpen={selectedButton === "Button03"} postId={3} />
      </Collapse>
    </>
  );
}
