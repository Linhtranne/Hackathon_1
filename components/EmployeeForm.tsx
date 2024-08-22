"use client";
import { useState, useEffect } from "react";

export interface Employee {
  id: number;
  name: string;
  dateOfBirth: string;
  image: string;
  email: string;
}

interface EmployeeFormProps {
  onSubmit: (employee: Employee) => void;
  initialData?: Employee | null;
}

export default function EmployeeForm({
  onSubmit,
  initialData,
}: EmployeeFormProps) {
  const [employee, setEmployee] = useState<Employee>({
    id:Math.floor(Math.random() * (10 - 1 + 1)) + 1,
    name: "",
    dateOfBirth: "",
    image: "",
    email: "",
  });

  useEffect(() => {
    if (initialData) {
      setEmployee(initialData);
    }
  }, [initialData]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(employee);
    setEmployee({
      id: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
      name: "",
      dateOfBirth: "",
      image: "",
      email: "",
    });
  };

  return (
    <div className="col-span-4 bg-white p-4 shadow-md rounded">
      <h2 className="text-lg font-semibold mb-4">
        {initialData ? "Cập nhật nhân viên" : "Thêm mới nhân viên"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Tên nhân viên</label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Ngày sinh</label>
          <input
            type="date"
            name="dateOfBirth"
            value={employee.dateOfBirth}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Hình ảnh</label>
          <input
            type="text"
            name="image"
            value={employee.image}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white w-full py-2 rounded"
        >
          {initialData ? "Cập nhật" : "Thêm"}
        </button>
      </form>
    </div>
  );
}
