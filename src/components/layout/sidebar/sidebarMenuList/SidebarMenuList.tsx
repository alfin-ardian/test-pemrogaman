import React from "react";
import { useMatch } from "react-router-dom";
import { SidebarMenuListing } from "..";
import { DashboardIcon } from "../../../../assets/icons";

interface Props {
  collapse?: boolean;
  setBreadcrumb: React.Dispatch<React.SetStateAction<any>>;
}

export const SidebarMenuList: React.FC<Props> = ({
  setBreadcrumb,
  collapse,
}) => {
  // const
  const isRoot = useMatch("/") !== null;

  return (
    <div className="grid gap-2">
      <SidebarMenuListing
        setBreadcrumb={setBreadcrumb}
        to={"/"}
        label="Review"
        active={isRoot}
        collapse={collapse}
        icon={<DashboardIcon />}
      />{" "}
    </div>
  );
};
