import React from "react";
import { Table, Menu, Dropdown } from "antd";
import { HiDotsVertical } from "react-icons/hi";

const { Item } = Menu;
const { Column } = Table;

interface DataTypeUser {
  key: React.Key;
  nama: string;
  jabatan: string;
  email: string;
}

const dataUser: DataTypeUser[] = [
  {
    key: "1",
    nama: "User 1",
    jabatan: "Logistic Supervisor",
    email: "helloworld@mail.com",
  },
  {
    key: "2",
    nama: "User 2",
    jabatan: "Procurement Staff",
    email: "staff@mail.com",
  },
  {
    key: "3",
    nama: "User 3",
    jabatan: "Procurement Superintendent",
    email: "superintendent@mail.com",
  },
];

export const ComponentTableUser: React.FC = () => {
  const renderActions = (_: any) => {
    const menu = (
      <Menu>
        <Item key="delete">Delete</Item>
        <Item key="edit">Edit</Item>
      </Menu>
    );

    return (
      <Dropdown overlay={menu} placement="bottomRight" trigger={["click"]}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <HiDotsVertical />
        </div>
      </Dropdown>
    );
  };

  return (
    <Table dataSource={dataUser} pagination={false} bordered>
      <Column title="No" dataIndex="key" key="key" />
      <Column title="Nama" dataIndex="nama" key="nama" />
      <Column title="Jabatan" dataIndex="jabatan" key="jabatan" />
      <Column title="Email" dataIndex="email" key="email" />
      <Column title="Aksi" key="action" render={renderActions} />
    </Table>
  );
};
