import React from "react";

const Table = ({ tableData, setTableData }) => {
  const handleDeletedElement = (index) => {
    const newElements = tableData.filter((_, i) => i !== index);
    setTableData(newElements);
  };

  const updateObj = (index) => {
    const newState = tableData.map((obj) => {
      if (obj.id === index) {
        return { ...obj, name: "UPDATED!!!!" };
      }
      return obj;
    });

    setTableData(newState);
  };
  return (
    <div className="lg:container mx-auto  px-4 lg:px-0">
      <table className="table-auto border text-left lg:w-[50%] mx-auto p-4">
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Birthday</th>
            <th>school</th>
            <th>ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        {tableData?.map((item, index) => (
          <tbody key={item.id}>
            <tr>
              <td>{item?.id}</td>
              <td>{item?.name}</td>
              <td>{item.birthday}</td>
              <td>{item.school}</td>
              <td>{item.nationalID}</td>
              <td className="flex gap-8 items-center text-blue-600 hover:cursor-pointer hover:text-blue-700 ease-in-out">
                <p onClick={() => handleDeletedElement(index)}>Delete</p>
                <p onClick={() => updateObj(index)}>Edit</p>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Table;
