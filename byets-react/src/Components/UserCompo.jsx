import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'


const UserCompo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editUserId, setEditUserId] = useState(null);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const { data, isLoading, isFetched, refetch } = useQuery({
        queryKey: ["morshed"],
        queryFn: async () => {
            const response = await axios.get("http://localhost:3000/users");
            return response.data;
        }
    });

    // useQuery to fetch single user
    const { data: singleUserData, isLoading: isSingleUserLoading } = useQuery({
        queryKey: ["user", editUserId],
        queryFn: async () => {
            const response = await axios.get(`http://localhost:3000/users/${editUserId}`);
            return response.data;
        },
        enabled: !!editUserId,
    });

    // useForm
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ mode: "onChange" });

    const onSubmit = async (data) => {
        try {
            await axios.post("http://localhost:3000/users", data);
            reset();
            refetch();
            handleCloseModal();
            Swal.fire({
                title: 'Success!',
                text: 'User added successfully',
                icon: 'success',
                confirmButtonText: 'OK'
            });
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    // useForm for edit
    const editForm = useForm({ mode: "onChange"});
    const { register: editRegister, handleSubmit: handleEditSubmit, formState: { errors: editErrors } } = editForm;

    const onHandleEditSubmit = async (data) => {
        try {
            await axios.put(`http://localhost:3000/users/${editUserId}`, data);
            reset();
            refetch();
            setIsEditModalOpen(false);
            Swal.fire({
                title: 'Success!',
                text: 'User updated successfully',
                icon: 'success',
                confirmButtonText: 'OK'
            });
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    useEffect(() => {
    if (singleUserData) {
        editForm.reset({
            name: singleUserData.name,
            age: singleUserData.age,
            email: singleUserData.email,
            phone: singleUserData.phone,
            about: singleUserData.about,
            gender: singleUserData.gender,
        });
    }
}, [singleUserData]);

    return (
        <div className="container mx-auto py-5">
            <button
                onClick={handleOpenModal}
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
            >
                Open User Form
            </button>
            {isLoading && <div className="mt-5 text-center">Loading...</div>}
            {!isLoading && isFetched && (
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {data.map((user) => (
                        <div key={user.id} className="p-4 border rounded-md mb-4">
                            <h3 className="font-bold">{user.name}</h3>
                            <p className="text-gray-600">Age: {user.age}</p>
                            <p className="text-gray-600">Email: {user.email}</p>
                            <p className="text-gray-600">Phone: {user.phone}</p>
                            <p className="text-gray-600">About: {user.about}</p>
                            <button
                                onClick={() => {
                                    setEditUserId(user.id);
                                    setIsEditModalOpen(true);
                                }}
                                className="mt-2 text-blue-500 hover:underline"
                            >
                                Edit
                            </button>
                        </div>
                    ))}
                </div>
            )}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/55 bg-opacity-40 z-50">
                    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-5 relative">
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
                            aria-label="Close"
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">User Information</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3"
                                {...register("name", { required: "Name is required" })}
                            />
                            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                            <input
                                type="number"
                                placeholder="Age"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3"
                                {...register("age", { required: "Age is required", min: { value: 0, message: "Age must be positive" } })}
                            />
                            {errors.age && <p className="text-red-500">{errors.age.message}</p>}
                            <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3" {...register("gender", { required: "Gender is required" })}>
                                <option value="">Select Gender</option>
                                <option value="male" >Male</option>
                                <option value="female">Female</option>
                            </select>
                            {errors.gender && <p className="text-red-500">{errors.gender.message}</p>}
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3"
                                {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Email is invalid" } })}
                            />
                            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                            <input
                                type="tel"
                                placeholder="Phone"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3"
                                {...register("phone", { required: "Phone is required", pattern: { value: /^\d{10}$/, message: "Phone must be 10 digits" } })}
                            />
                            {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                            <textarea
                                placeholder="About"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none mb-3"
                                rows={3}
                                {...register("about", { required: "About is required", maxLength: { value: 200, message: "About must be less than 200 characters" } })}
                            ></textarea>
                            {errors.about && <p className="text-red-500">{errors.about.message}</p>}
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition mt-4"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {isEditModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/55 bg-opacity-40 z-50">
                    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-5 relative">
                        <button
                            onClick={() => setIsEditModalOpen(false)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
                            aria-label="Close"
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Edit User Information</h2>
                        {/* Edit form goes here */}
                        {isSingleUserLoading ? (
                            <div>Data is loading...</div>
                        ) : (
                            <>
                                <form onSubmit={handleEditSubmit(onHandleEditSubmit)} className="space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3"
                                        {...editRegister("name", { required: "Name is required" })}
                                    />
                                    {editErrors.name && <p className="text-red-500">{editErrors.name.message}</p>}
                                    <input
                                        type="number"
                                        placeholder="Age"
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3"
                                        {...editRegister("age", { required: "Age is required", min: { value: 0, message: "Age must be positive" } })}
                                    />
                                    {editErrors.age && <p className="text-red-500">{editErrors.age.message}</p>}
                                    {/* email */}
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3"
                                        {...editRegister("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Email is invalid" } })}
                                    />
                                    {editErrors.email && <p className="text-red-500">{editErrors.email.message}</p>}
                                    {/* phone */}
                                    <input
                                        type="tel"
                                        placeholder="Phone"
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3"
                                        {...editRegister("phone", { required: "Phone is required", pattern: { value: /^\d{10}$/, message: "Phone must be 10 digits" } })}
                                    />
                                    {editErrors.phone && <p className="text-red-500">{editErrors.phone.message}</p>}
                                    {/* about */}
                                    <textarea
                                        placeholder="About"
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none mb-3"
                                        rows={3}
                                        {...editRegister("about", { required: "About is required", maxLength: { value: 200, message: "About must be less than 200 characters" } })}
                                    />
                                    <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3"
                                        {...editRegister("gender", { required: "Gender is required" })}>
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                    {editErrors.gender && <p className="text-red-500">{editErrors.gender.message}</p>}
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition mt-4"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserCompo;