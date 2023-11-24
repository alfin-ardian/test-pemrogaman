import React, { useState } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { Reviewer, ProsesReview, FinalDraft } from "./";

const { TabPane } = Tabs;

export const Review: React.FC = () => {
  const [activeKey, setActiveKey] = useState("1");

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <div
          className={`custom-tab ${activeKey === "1" ? "active-tab" : ""}`}
          onClick={() => setActiveKey("1")}
        >
          Reviewer
        </div>
      ),
      children: <Reviewer />,
    },
    {
      key: "2",
      label: (
        <div
          className={`custom-tab ${activeKey === "2" ? "active-tab" : ""}`}
          onClick={() => setActiveKey("2")}
        >
          Proses Review
        </div>
      ),
      children: <ProsesReview />,
    },
    {
      key: "3",
      label: (
        <div
          className={`custom-tab ${activeKey === "3" ? "active-tab" : ""}`}
          onClick={() => setActiveKey("3")}
        >
          Final Draft
        </div>
      ),
      children: <FinalDraft />,
    },
  ];

  return (
    <>
      <style>
        {`
          .ant-tabs-ink-bar {
            display: none !important;
          }
          .custom-tab {
            padding: 8px;
            width: 130%;
            margin-right: 15rem;
            text-align: center;
            cursor: pointer;
          }
          .active-tab {
            background-color: #0080ff;
            color: white;
            border-radius:8px;
          }
        `}
      </style>
      <Tabs activeKey={activeKey}>
        {items.map((item) => (
          <TabPane tab={item.label} key={item.key} style={{ flex: "30%" }}>
            {item.children}
          </TabPane>
        ))}
      </Tabs>
    </>
  );
};
