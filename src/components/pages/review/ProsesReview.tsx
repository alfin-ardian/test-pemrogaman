import React from "react";
import { Checkbox } from "antd";

export const ProsesReview: React.FC = () => {
  const reviewRequirements = [
    "Review ditunggu maksimal 3 hari",
    "Catatan Lainnya",
    "Catatan Lainnya",
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          border: "1px solid #000000",
          borderRadius: 8,
          padding: "16px",
        }}
      >
        <h1 className="font-bold mb-2">A. Perjanjian Kontrak</h1>
        <p className="mb-2">
          Silahkan klik link dibawah ini untuk melakukan review :
        </p>
        <div
          style={{
            border: "1px solid #000000",
            borderRadius: 8,
            padding: "16px",
          }}
        >
          <a
            href="https://www.youtube.com/watch?v=-cVSSqdwHVc&list=RDMMNBp3gFJZLBk&index=3"
            style={{ color: "#0000EE" }}
            target="_blank"
          >
            hello world link
          </a>
        </div>
      </div>

      <div
        style={{
          border: "1px solid #000000",
          borderRadius: 8,
          marginTop: 8,
          padding: "16px",
        }}
      >
        <h1 className="mb-4 font-bold">Catatan Proses Review</h1>
        <hr />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="mt-4 font-bold">Syarat dan ketentuan proses review :</p>
          <button className="bg-blue-500 rounded-lg hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4">
            Selesai Review
          </button>
        </div>
        <ol>
          {reviewRequirements.map((requirement, index) => (
            <li key={index} className="mb-2">
              {index + 1}. {requirement}
            </li>
          ))}
        </ol>

        <h1 className="font-bold mt-8 mb-4">
          Berikut ini adalah status proses review yang sudah dilakukan oleh
          reviewer :
        </h1>
        <div>
          <p className="font-medium">A. Reviewer Adendum :</p>
          <div style={{ marginLeft: "170px", marginTop: "-20px" }}>
            <p>
              <Checkbox onChange={(e) => console.log(e.target.checked)}>
                Vendor
              </Checkbox>
            </p>
            <p>
              <Checkbox onChange={(e) => console.log(e.target.checked)}>
                User
              </Checkbox>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
