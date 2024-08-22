import  {Employee}  from "./EmployeeForm";

interface EmployeeListProps {
  employees: Employee[];
  onEdit: (employee: Employee) => void;
  onDelete: (id: number) => void;
}

export default function EmployeeList({
  employees = [],
  onEdit,
  onDelete,
}: EmployeeListProps) {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">STT</th>
                <th className="border border-gray-300 p-2">Tên nhân viên</th>
                <th className="border border-gray-300 p-2">Ngày sinh</th>
                <th className="border border-gray-300 p-2">Hình ảnh</th>
                <th className="border border-gray-300 p-2">Email</th>
                <th className="border border-gray-300 p-2">Chức năng</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={employee.id} className="text-center">
                  <td className="border border-gray-300 p-2">{index + 1}</td>
                  <td className="border border-gray-300 p-2">{employee.name}</td>
                  <td className="border border-gray-300 p-2">{employee.dateOfBirth}</td>
                  <td className="border border-gray-300 p-2">
                    <img
                      src={employee.image}
                      alt={employee.name}
                      className="w-12 h-12 object-cover rounded-full mx-auto"
                    />
                  </td>
                  <td className="border border-gray-300 p-2">{employee.email}</td>
                  <td className="border border-gray-300 p-2">
                    <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded mr-2" onClick={() => onEdit(employee)}>Sửa</button>
                    <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => onDelete(employee.id!)}>Xóa</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
