import { useState } from "react";
import TableForm from "./form/TableForm.jsx";
import Table from "./table/Table.jsx";

function App() {
  const [tableData, setTableData] = useState([]);
  return (
    <div className="App container mx-auto flex flex-col gap-40">
      <TableForm setTableData={setTableData} tableData={tableData} />
      <Table setTableData={setTableData} tableData={tableData} />
    </div>
  );
}

export default App;
