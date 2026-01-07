"use client";
import { useFormState } from "react-dom";

export default function FormSubmit() {
  const state = useFormState();
  return (
    <>
      <button type="reset">Reset</button>
      <button>Create Post</button>
    </>
  );
}
