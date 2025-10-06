import { useEffect, useState } from "react";
import PaginatedTable from "../../components/PaginatedTable";
import AddCategory from "./AddCategory";
import { Alert } from "../../utils/alerts";
import { getCategoriesService } from "../../services/category";
import ShowInMenu from "./tableAdditons/ShowInMenu";
import Actions from "./tableAdditons/Actions";
import { Outlet, useParams } from "react-router";
import { convertDateToJalali } from "../../utils/convertDate";

const Categorytable = () => {
  const [data, setData] = useState([]);
  const params = useParams();
  const [forceRender, setForceRender] = useState(0);
  const [loading, setLoading] = useState(false);
  const handleGetCategories = async () => {
    setLoading(true);
    try {
      const res = await getCategoriesService(params.categoryId);
      if (res.status === 200) {
        setData(res.data.data);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetCategories();
  }, [params, forceRender]);

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان محصول" },
    { field: "parent_id", title: "والد" },
  ];

  const additionField = [
    {
      title: "تاریخ",
      elements: (rowData) => convertDateToJalali(rowData.created_at),
    },
    {
      title: "نمایش در منو",
      elements: (rowData) => <ShowInMenu rowData={rowData} />,
    },
    {
      title: "عملیات",
      elements: (rowData) => <Actions rowData={rowData} />,
    },
  ];

  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "title",
  };

  return (
    <>
      <Outlet />
      <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        additionField={additionField}
        searchParams={searchParams}
        numOfPage={2}
        loading = {loading}
      >
        <AddCategory setForceRender={setForceRender} />
      </PaginatedTable>
    </>
  );
};

export default Categorytable;
