import React, { useState } from 'react';
import TableCourse from './TableCourse';
import { Modal } from './Modals/Modal';
import { GoPlus } from "react-icons/go";

const columns = [
    { label: 'Tựa đề', key: 'title' },
    { label: 'Mô tả', key: 'description' },
    { label: 'Trạng thái', key: 'status' },
];

const data = [
    {
        id: 1,
        title: 'Lập trình Java cơ bản',
        description: 'Đây là khóa học',
        status: 'Mọi người',
    },
    {
        id: 2,
        title: 'Lập trình C++ cơ bản',
        description: 'Đây là khóa học',
        status: 'Mọi người',
    },
    {
        id: 3,
        title: 'Lập trình C# cơ bản',
        description: 'Đây là khóa học',
        status: 'Mọi người',
    },
    {
        id: 4,
        title: 'Lập trình JavaScript cơ bản',
        description: 'Đây là khóa học',
        status: 'Mọi người',
    },
    {
        id: 5,
        title: 'Kỹ thuật lập trình',
        description: 'Đây là khóa học',
        status: 'Mọi người',
    },
    {
        id: 6,
        title: 'Làm quen với HTML, CSS',
        description: 'Đây là khóa học',
        status: 'Mọi người',
    },
    {
        id: 7,
        title: 'NodeJS cho người mới bắt đầu',
        description: 'Đây là khóa học',
        status: 'Mọi người',
    },
    {
        id: 8,
        title: 'Lập trình C++ nâng cao',
        description: 'Đây là khóa học',
        status: 'Mọi người',
    },
    {
        id: 9,
        title: 'ReactJs cho người mới bắt đầu',
        description: 'Đây là khóa học',
        status: 'Riêng tư',
    },
    {
        id: 10,
        title: 'Lập trình JavaScript nâng cao',
        description: 'Đây là khóa học',
        status: 'Riêng tư',
    },
    {
        id: 11,
        title: 'Lập trình Java nâng cao',
        description: 'Đây là khóa học',
        status: 'Riêng tư',
    },
    {
        id: 12,
        title: 'Lập trình C++ cơ bản',
        description: 'Đây là khóa học',
        status: 'Mọi người',
    },
    {
        id: 13,
        title: 'Lập trình C# cơ bản',
        description: 'Đây là khóa học',
        status: 'Mọi người',
    },
    {
        id: 14,
        title: 'Lập trình JavaScript cơ bản',
        description: 'Đây là khóa học',
        status: 'Riêng tư',
    },
];
const TeachCourse: React.FC = () => {
    const [rows, setRows] = useState(data);
    const [rowToEdit, setRowToEdit] = useState(null);

    const [modalOpen, setModalOpen] = useState(false);

    const handleEdit = (idx) => {
        setRowToEdit(idx);

        setModalOpen(true);
    };

    const handleDelete = (id: number) => {
        try {
            setRows(rows.filter((_, idx) => idx !== id));
            alert('Xóa thành công!');
        } catch (e) {
            alert(e)
        }
    };
    const handleSubmit = (newRow) => {
        rowToEdit === null
          ? setRows([...rows, newRow])
          : setRows(
              rows.map((currRow, idx) => {
                if (idx !== rowToEdit) return currRow;
    
                return newRow;
              })
            );
      };
    return (
        <div>
            <div className="flex">
            <h1 className="text-3xl font-bold mb-4">Quản lý khóa học</h1>
                <GoPlus onClick={() => setModalOpen(true)} className="flex bg-dark-green-s ml-auto hover:bg-old-green-s text-white rounded  w-8 h-8 cursor-pointer p-2">
                </GoPlus>
            </div>
            {modalOpen && (
                <Modal
                closeModal={() => {
                    setModalOpen(false);
                    setRowToEdit(null);
                }}
                onSubmit={handleSubmit}
                defaultValue={rowToEdit !== null && rows[rowToEdit]}
                isEditMode={rowToEdit !== null}
                />
            )}
            
            <TableCourse
                columns={columns}
                data={rows}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
            
        </div>
    );
};

export default TeachCourse;
