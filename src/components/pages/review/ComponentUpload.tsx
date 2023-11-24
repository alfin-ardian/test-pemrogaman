import { UploadOutlined } from "@ant-design/icons";
import { Upload, Input, message } from "antd";
import React, { useState } from "react";
import type { UploadProps } from "antd";

const { TextArea } = Input;

interface Props {
  title?: String;
}
export const ComponentUpload: React.FC<Props> = ({ title }) => {
  const [isFileUploaded, setIsFileUploaded] = useState<boolean>(false);

  const props: UploadProps = {
    name: "file",
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    headers: {
      authorization: "authorization-text",
    },
    beforeUpload: (file) => {
      const isDocx =
        file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
      if (!isDocx) {
        message.error("File harus dalam format DOCX!");
      }
      return isDocx;
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} berhasil di upload`);
        setIsFileUploaded(true);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file gagal diupload!.`);
      }
    },
    accept: ".docx",
    progress: {
      strokeColor: {
        "0%": "#108ee9",
        "100%": "#87d068",
      },
      strokeWidth: 3,
      format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
    },
  };
  return (
    <div className="content mt-8">
      <h1 className="font-bold">{title}</h1>
      <div
        className="upload"
        style={{
          border: "1px solid #000000",
          borderRadius: 8,
          marginTop: 8,
          padding: "16px",
        }}
      >
        <Upload {...props}>
          <button className="bg-blue-500 rounded-lg hover:bg-blue-700 text-white font-bold py-2 px-4">
            <UploadOutlined />
            <span className="ml-2">Pilih File</span>
          </button>
          <span className="ml-4">
            {isFileUploaded
              ? "File berhasil diupload"
              : "Belum ada file yang terpilih"}
          </span>
        </Upload>
      </div>
      <div className="catatan">
        <p style={{ color: "red" }}>
          Catatan : Format file yang dapat diupload hanya docx
        </p>
      </div>
      <div className="komentar">
        <h3 className="font-medium">
          Komentar<span style={{ color: "red" }}>*</span>
        </h3>
        <TextArea
          rows={3}
          placeholder="Tambahkan komentar di sini..."
          style={{
            border: "1px solid #000000",
            borderRadius: 8,
            marginTop: 8,
            padding: "16px",
          }}
        />
      </div>
    </div>
  );
};
