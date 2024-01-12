import React, { useState, useEffect } from 'react';
import { GoPlus } from "react-icons/go";
import { Modal } from './Modals/Modal';
import CreatePractice from './CreatePractice';

const columns = [
  { label: 'Tiêu đề', key: 'title' },
  { label: 'Độ khó', key: 'description' },
  { label: 'Trạng thái', key: 'status' },
];

const data = [
  {
    id: 1,
    title: 'Two Sum',
    description: 'Easy',
    status: 'Mọi người',
  }
];

const TeachPractice = () => {
  const [rows, setRows] = useState(data);
  const [rowToEdit, setRowToEdit] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleEdit = (idx) => {
    setRowToEdit(idx);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    try {
      setRows(rows.filter((_, idx) => idx !== id));
      setAlertMessage('Xóa thành công!');
    } catch (e) {
      setAlertMessage(`Lỗi: ${e}`);
    }
  };

  const handleSubmit = (newRow) => {
    setRows((prevRows) => {
      if (rowToEdit === null) {
        return [...prevRows, newRow];
      } else {
        return prevRows.map((currRow, idx) => (idx !== rowToEdit ? currRow : newRow));
      }
    });

    setAlertMessage('Lưu thành công!');
  };

  useEffect(() => {
    if (alertMessage) {
      const timerId = setTimeout(() => {
        setAlertMessage('');
      }, 1000);

      return () => clearTimeout(timerId);
    }
  }, [alertMessage]);

  return (
    <div>
      <div className="flex">
        <h1 className="text-3xl font-bold mb-4">Quản lý bài tập</h1>
        <GoPlus
          onClick={() => setModalOpen(true)}
          className="flex bg-dark-green-s ml-auto hover:bg-old-green-s text-white rounded  w-8 h-8 cursor-pointer p-2"
        ></GoPlus>
      </div>

      {alertMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
          {alertMessage}
        </div>
      )}

      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
            setAlertMessage('');
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
          isEditMode={rowToEdit !== null}
        />
      )}

      <CreatePractice
        columns={columns}
        data={rows}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default TeachPractice;
