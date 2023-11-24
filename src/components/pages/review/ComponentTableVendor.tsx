import { Table, Menu, Dropdown } from "antd";
import { HiDotsVertical } from "react-icons/hi";
const { Item } = Menu;
const { Column } = Table;

interface DataTypeVendor {
  key: React.Key;
  nama: string;
  pic: string;
  email: string;
}

const dataVendor: DataTypeVendor[] = [
  {
    key: "1",
    nama: "Samudera Raya Engineering",
    pic: "Awaludin",
    email: "awaludin@mail.com",
  },
];
export const ComponentTableVendor: React.FC = () => {
  const renderActions = (_: any) => {
    const menu = (
      <Menu>
        <Item key="delete">Delete</Item>
        <Item key="edit">Edit</Item>
      </Menu>
    );

    return (
      <Dropdown overlay={menu} placement="bottomRight" trigger={["click"]}>
        <HiDotsVertical />
      </Dropdown>
    );
  };
  return (
    <Table dataSource={dataVendor} pagination={false} bordered>
      <Column title="No" dataIndex="key" key="key" />
      <Column title="Nama" dataIndex="nama" key="nama" />
      <Column title="PIC" dataIndex="pic" key="address" />
      <Column title="Email" dataIndex="email" key="email" />
      <Column title="Aksi" key="action" render={renderActions} />
    </Table>
  );
};
