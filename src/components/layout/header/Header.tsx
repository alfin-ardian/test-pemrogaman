import React from "react";
import { HeaderRight } from ".";

interface Props {
  collapse?: boolean;
  breadcrumb?: string[];
}

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#000000",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#ececec",
};

export const Header: React.FC<Props> = () => {
  return (
    <header style={headerStyle} className="flex items-center">
      <div className="inner px-4 lg:px-5 flex flex-1 justify-between items-center"></div>
      <HeaderRight />
    </header>
  );
};
