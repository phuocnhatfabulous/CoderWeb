import React, { useState } from 'react';

export const Modal = ({ closeModal, onSubmit, defaultValue, isEditMode }) => {
    const [formState, setFormState] = useState(
        defaultValue || {
            id: 20,
            title: '',
            description: '',
            status: 'Mọi người',
        }
    );
    const [errors, setErrors] = useState('');
    const [rowToEdit, setRowToEdit] = useState(null);

    const validateForm = () => {
        if (formState.title && formState.description && formState.status) {
            setErrors('');
            return true;
        } else {
            let errorFields = [];
            for (const [key, value] of Object.entries(formState)) {
                if (!value) {
                    errorFields.push(key);
                }
            }
            setErrors(errorFields.join(', '));
            return false;
        }
    };

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        onSubmit(formState);

        closeModal();
    };

    return (
        <div
            className="fixed z-10 left-0 top-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center"
            onClick={(e) => {
                if (
                    e.target.className ===
                    'fixed z-10 left-0 top-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center'
                )
                    closeModal();
            }}
        >
            <div className="rounded-md p-8 bg-white w-9/12">
                <form>
                    <div className="flex flex-col mb-4">
                        <label className='text-lg font-semibold' htmlFor="title">Tiêu đề</label>
                        <input
                            placeholder='Tên khóa học'
                            name="title"
                            onChange={handleChange}
                            value={formState.title}
                            className="border border-solid border-black rounded-md p-2 text-base"
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="description" className='text-lg font-semibold'>Mức độ</label>
                        <textarea
                            className="border border-solid border-black rounded-md p-3 text-base"
                            name="description"
                            onChange={handleChange}
                            value={formState.description}
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="status" className='text-lg font-semibold'>
                            Mức độ
                        </label>
                        <select
                            className="border border-solid border-black rounded-md p-2 text-base"
                            name="status"
                            onChange={handleChange}
                            value={formState.status}
                        >
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="status" className='text-lg font-semibold'>
                            Trạng thái
                        </label>
                        <select
                            className="border border-solid border-black rounded-md p-2 text-base"
                            name="status"
                            onChange={handleChange}
                            value={formState.status}
                        >
                            <option>Mọi người</option>
                            <option>Riêng tư</option>
                        </select>
                    </div>
                    {errors && (
                        <div className="error bg-red-200 text-red-600 p-2 rounded-md mb-4">{`Vui lòng nhập đầy đủ thông tin`}</div>
                    )}
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className={`block text-white text-2xl bold m-auto w-1/5 h-14 font-bold bg-dark-green-s rounded-full ${isEditMode ? 'bg-blue-500' : 'bg-green-500'}`}
                    >
                        {isEditMode ? 'Cập nhật' : 'Tạo mới'}
                    </button>
                </form>
            </div>
        </div>
    );
};
