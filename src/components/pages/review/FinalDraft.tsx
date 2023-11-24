import React, { useState } from "react";
import { message } from "antd";
import { ComponentUpload } from ".";

export const FinalDraft: React.FC = () => {
  const [components, setComponents] = useState<string[]>([
    "A. Kontrak Perjanjian",
    "B. Lampiran",
    "C. Full Kontrak",
  ]);
  const handleSubmission = () => {
    message.success("Berhasil simpan data!");
  };

  const handleTambahLampiran = () => {
    const nextLabel = String.fromCharCode(
      "A".charCodeAt(0) + components.length
    );
    setComponents([...components, `${nextLabel}. Lampiran Tambahan`]);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <div
        style={{
          flex: 1,
          border: "1px solid #000000",
          borderRadius: 8,
          marginTop: 8,
          padding: "16px",
        }}
      >
        <h1 className="mb-4 font-bold">Final Draft Adendum Kontrak</h1>
        <hr />
        {components.map((title, index) => (
          <ComponentUpload key={index} title={title} />
        ))}
        <div className="button-tambah mt-2">
          <button
            className="bg-blue-500 rounded-lg hover:bg-blue-700 text-white font-bold py-2 px-4"
            onClick={handleTambahLampiran}
          >
            + Tambah Lampiran
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: 16,
          }}
        >
          <button
            className="bg-blue-500 rounded-lg hover:bg-blue-700 text-white font-bold py-2 px-4"
            onClick={handleSubmission}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
