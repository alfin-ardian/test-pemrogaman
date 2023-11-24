import React from "react";
import { Link, type To, useLocation } from "react-router-dom";

interface Props {
  icon?: React.ReactElement;
  label: string;
  active?: boolean;
  hasSubMenu?: boolean;
  isOpen?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  to?: To;
  collapse?: boolean;
  setBreadcrumb: React.Dispatch<React.SetStateAction<any>>;
}

export const SidebarMenuListing: React.FC<Props> = ({
  icon,
  label,
  active = false,
  hasSubMenu = false,
  isOpen = false,
  onClick,
  setBreadcrumb,
  to = "#",
  collapse,
}) => {
  const location = useLocation();
  setBreadcrumb(location.pathname);
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`sidebar-menu-item ${
        collapse ? "p-4" : "p-4"
      } hover:bg-[#7cedff] flex items-center justify-between  ${
        active ? "bg-white" : ""
      } flex rounded-md`}
    >
      <span className="w-6 h-6">{icon}</span>
      <div
        className="secondary flex justify-between items-center flex-1"
        style={{ maxWidth: collapse ? "400px" : "" }}
      >
        <span className="whitespace-nowrap overflow-clip text-black text-sm -mt-2">
          {label}
        </span>
        {hasSubMenu ? (
          <span
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            icon
          </span>
        ) : null}
      </div>
    </Link>
  );
};
