import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import formimg from "../assets/contact-us-2.webp";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.bubble.css';

function QuillForm() {
  const [heading, setHeading] = useState("");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Heading:", heading);
    console.log("Title:", title);
    console.log("Content:", value);

    setHeading("");
    setTitle("");
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="px-10 py-6">
      <div className="flex w-full flex-wrap md:flex-nowrap gap-6">
        <div className="flex flex-col gap-6 w-full md:w-2/3">
          <div className="flex flex-wrap md:flex-nowrap gap-4 w-full">
            <Input
              type="text"
              label="Heading"
              placeholder="Enter your Heading"
              fullWidth
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
            />
            <Input
              type="text"
              label="Title"
              placeholder="Enter your Title"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <h2 className="text-gray-400">Description :-</h2>
            <ReactQuill
              className="[&_.ql-editor]:h-48 [&_.ql-editor]:border [&_.ql-editor]:rounded-lg "
              theme="bubble"
              value={value}
              onChange={setValue}
            />
          </div>
          <div>
            <Button type="submit" color="default">Submit</Button>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <img className="w-full h-auto" src={formimg} alt="Form Illustration" />
        </div>
      </div>
    </form>
  );
}

export default QuillForm;
