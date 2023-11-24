import React from "react";
import { SidebarMenuList } from "..";

interface Props {
  onClick?: () => void;
  collapse?: boolean;
  setBreadcrumb: React.Dispatch<React.SetStateAction<any>>;
}

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#ececec",
  justifyContent: "center",
  padding: 4,
};

export const Sidebar: React.FC<Props> = ({ setBreadcrumb, collapse }) => {
  return (
    <aside style={{ ...siderStyle }}>
      <div className="inner text-center">
        <div>
          <SidebarMenuList collapse={collapse} setBreadcrumb={setBreadcrumb} />
        </div>
      </div>
    </aside>
  );
};
