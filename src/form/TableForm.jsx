import React, { useRef, useState } from "react";

const TableForm = ({ setTableData, tableData }) => {
  const [showError, setShowError] = useState(0);
  const handleFormSubmit = (e) => {
    const reg = /^[0-9]+$/.test(nationalIDRef.current.value);
    e.preventDefault();
    if (!reg) {
      setShowError(2);
      return;
    }
    if (
      nameRef.current.value &&
      nationalIDRef.current.value &&
      schoolRef.current.value &&
      birthdayRef.current.value
    ) {
      const obj = {
        id: tableData?.length,
        school: schoolRef.current.value,
        birthday: birthdayRef.current.value,
        name: nameRef.current.value,
        nationalID: nationalIDRef.current.value,
      };

      setTableData([...tableData, { ...obj }]);
    } else {
      setShowError(1);
      return;
    }
  };

  const nameRef = useRef();
  const birthdayRef = useRef();
  const nationalIDRef = useRef();
  const schoolRef = useRef();
  const reg = /^\d+$/;

  return (
    <div className="border flex justify-center w-100 m-auto text-center mt-28 relative">
      {showError !== 0 && (
        <div className="absolute bottom-[15px] left-[20px] text-red-600">
          {showError === 1 && <p>Kindly fill all Fields</p>}
          {showError === 2 && <p>ID Should be Digits Only</p>}
        </div>
      )}
      <form className="form-wrapper p-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="full-name flex flex-row gap-4 items-center	flex-grow">
            <label htmlFor="name">First Name</label>
            <div className="border p-2 w-100">
              <input
                ref={nameRef}
                className="outline-0"
                id="name"
                type="text"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="birthday-wrapper flex flex-row gap-4 items-center">
            <label>Birthday</label>
            <input
              ref={birthdayRef}
              className="border p-2"
              placeholder="DD/MM/YYYY"
              type="date"
            />
          </div>
          <div className="school-wrapper flex flex-row gap-4 items-center	flex-grow">
            <label htmfor="schoold">School</label>
            <select
              name="school"
              id="school"
              ref={schoolRef}
              className="outline-0 border p-2 w-100"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="home">home school</option>
            </select>
          </div>

          <div className="national-id flex flex-row gap-4 items-center	flex-grow">
            <label htmfor="national-id">National Id</label>
            <input
              ref={nationalIDRef}
              className=" border p-2"
              placeholder="National ID"
              type="text"
              id="national-id"
            />
          </div>
        </div>
        <input
          onClick={handleFormSubmit}
          type="submit"
          className="flex mx-[80%] mt-6 px-4 py-2  rounded bg-slate-200"
        />
      </form>
    </div>
  );
};

export default TableForm;
