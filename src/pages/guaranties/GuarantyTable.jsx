import React, { useEffect, useState } from "react";
import Actions from "./tableAdditons/Actions";
import PaginatedTable from "../../components/PaginatedTable";
import {
  deleteGuaranteeService,
  getAllGuaranteesService,
} from "../../services/guaranty";
import AddGuaranty from "./AddGuaranty";
import { Alert, Confirm } from "../../utils/alerts";

const GuarantyTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [guaranteeToEdit, setGuaranteeToEdit] = useState(null);
  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان" },
    { field: "descriptions", title: "توضیحات" },
    { field: "length", title: "مدت گارانتی" },
    { field: "length_unit", title: "واحد" },
  ];

  const additionField = [
    {
      title: "عملیات",
      elements: (rowData) => (
        <Actions
          rowData={rowData}
          setGuaranteeToEdit={setGuaranteeToEdit}
          handleDeleteGuarantee={handleDeleteGuarantee}
        />
      ),
    },
  ];

  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "title",
  };

  const handleGetAllBrands = async () => {
    setLoading(true);
    const res = await getAllGuaranteesService();
    res && setLoading(false);
    if (res.status === 200) {
      console.log(res);
      setData(res.data.data);
    }
  };

  const handleDeleteGuarantee = async (guarantee) => {
    if (
      await Confirm("حذف برند", `آیا از حذف ${guarantee.title} اطمینان دارید؟`)
    ) {
      const res = await deleteGuaranteeService(guarantee.id);
      if (res.status === 200) {
        Alert("انجام شد", res.data.message, "success");
        setData((lastData) => lastData.filter((d) => d.id != guarantee.id));
      }
    }
  };

  useEffect(() => {
    handleGetAllBrands();
  }, []);

  return (
    <>
      <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        additionField={additionField}
        numOfPage={2}
        searchParams={searchParams}
        loading={loading}
      >
        <AddGuaranty
          setData={setData}
          guaranteeToEdit={guaranteeToEdit}
          setGuaranteeToEdit={setGuaranteeToEdit}
        />
      </PaginatedTable>
    </>
  );
};

export default GuarantyTable;
