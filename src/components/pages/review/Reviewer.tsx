import React, { useEffect, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { Form, Input } from "antd";
import { Col, Row } from "antd";
import { ComponentTableUser, ComponentTableVendor } from ".";

export const Reviewer: React.FC = () => {
  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState<boolean>(false);
  console.log(clientReady, "clientReady");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setClientReady(true);
  }, []);

  const onFinish = (values: any) => {
    console.log("Finish:", values);
  };

  const prefix = (
    <SearchOutlined
      style={{
        fontSize: 16,
        color: "#1677ff",
      }}
    />
  );

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          border: "1px solid #000000",
          borderRadius: 8,
          padding: "16px",
        }}
      >
        <h1 className="mb-4 font-bold">Reviewer Adendum</h1>
        <hr />
        <div className="flex mt-6 mb-4">
          <div className="flex-1">
            <h4 className="text-2xl font-bold">Admin Adendum</h4>
          </div>
        </div>
        <div className="w-full">
          <Form
            form={form}
            name="vertical_login"
            layout="vertical"
            onFinish={onFinish}
          >
            <Row gutter={8}>
              <Col span={8}>
                <Form.Item label="Nama" name="fieldA">
                  <Input style={{ width: "100%" }} placeholder="Input nama" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Jabatan" name="fieldB">
                  <Input
                    style={{ width: "100%" }}
                    placeholder="Input jabatan"
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Email" name="fieldC">
                  <Input style={{ width: "100%" }} placeholder="Input email" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
        <div className="flex justify-between mt-8 mb-6">
          <div className="flex-1">
            <h4 className="text-2xl font-bold">User</h4>
          </div>
          <div className="flex-1 flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={showModal}
            >
              + Reviewer User
            </button>
          </div>
        </div>
        <ComponentTableUser />
        <div className="flex mt-8 mb-6">
          <div className="flex-1">
            <h4 className="text-2xl font-bold">Vendor</h4>
          </div>
        </div>
        <ComponentTableVendor />
        <div className="flex-1"></div>{" "}
        <div className="flex justify-end m-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={showModal}
          >
            Simpan
          </button>
        </div>
      </div>
      <Modal
        title={
          <div
            style={{
              textAlign: "center",
              borderBottom: "1px solid #e8e8e8",
              paddingBottom: "16px",
            }}
          >
            Tambah Reviewer User
          </div>
        }
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Save"
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ type: "default" }}
      >
        <Form
          layout={"vertical"}
          form={form}
          style={{ maxWidth: 300, margin: "auto", textAlign: "center" }}
        >
          <Form.Item label="Nama">
            <Input placeholder="input name" prefix={prefix} />
          </Form.Item>
          <Form.Item label="Jabatan">
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item label="Email">
            <Input placeholder="input placeholder" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
