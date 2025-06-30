import React, { useEffect, useState } from "react";
import DynamicPage from '../../../components/Admin/DynamicPage'
import { MdDelete, MdEdit } from "react-icons/md";
import { Col, Space, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
// import {
//   createStore,
//   deleteStoreData,
//   fetchStores,
//   updateStoreData,
// } from "../../../Redux/slice/StoreSlice";
import { useTranslation } from "react-i18next";
import StoreForm from "../../../components/Admin/Forms";

function Stores() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState(null);
  const dispatch = useDispatch();
  // const { data, loading, error } = useSelector((state) => state.stores);
  // useEffect(() => {
  //   dispatch(fetchStores());
  // }, [dispatch]);
  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  const onClose = () => {
    setOpen(false);
    setSelectedStore(null);
  };

  const handleAddStore = (values) => {
    dispatch(createStore(values));
    setOpen(false);
    console.log(values);
  };
  const handleEdit = (record) => {
    setSelectedStore(record);
    setOpen(true);
  };

  const handleUpdateStore = (id, values) => {
    dispatch(
      updateStoreData({
        id: id,
        updateStoreData: values,
      })
    );
    setOpen(false);
  };

  const handleDelete = (id) => {
    dispatch(deleteStoreData(id));
  };
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];
  const Columns = [
    {
      title: t("name"),
      dataIndex: "name",
      key: "name",
    },
    {
      title: t("location"),
      dataIndex: "location",
      key: "location",
    },
    {
      title: t("manager"),
      dataIndex: "manager",
      key: "manager",
    },
    {
      title: t("phone"),
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: t("status"),
      key: "status",
      dataIndex: "status",
      render: (_, { status }) => (
        <>
          {status === "open" ? (
            <Tag color="green" key={status}>
              {t(status)}
            </Tag>
          ) : (
            <Tag color="red" key={status}>
              {t(status)}
            </Tag>
          )}
        </>
      ),
    },
    {
      title: t("action"),
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <div className="action-btns">
            <button onClick={() => handleEdit(record)}>
              <MdEdit />
            </button>
            <button onClick={() => handleDelete(record.id)}>
              <MdDelete />
            </button>
          </div>
        </Space>
      ),
    },
  ];

  return (
    <>
      <DynamicPage columns={Columns} data={dataSource} onSubmit={handleAddStore} />
      <StoreForm
        open={open}
        onClose={onClose}
        onSubmit={(values) => {
          if (selectedStore) {
            handleUpdateStore(selectedStore.id, values);
          } else {
            handleAddStore(values);
          }
        }}
        initialValues={selectedStore}
      />
    </>
  );
}

export default Stores;
