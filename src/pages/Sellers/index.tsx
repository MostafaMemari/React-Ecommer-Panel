import _ from "lodash";
import { useEffect, useState } from "react";
import Button from "../../base-components/Button";
import Table from "../../base-components/Table";
import { useFetchData } from "../../hooks/useFetchData";
import { Toast } from "../../base-components/Toast";

import LoadingIcon from "../../base-components/LoadingIcon";
import ColorTable from "./components/SellerTable";
import CreateAndUpdateColor from "./components/CreateAndUpdateSeller";
import { getSellersService } from "../../services/Axios/Request/sellers";

function Main() {
  const { data, loading, refetch } = useFetchData(getSellersService);

  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);

  const handleProductSubmission = () => {
    refetch(true);
  };

  useEffect(() => {
    if (!loading && !data?.data) {
      Toast("دریافت اطلاعات با خطا مواجه شد", "error");
    }
  }, [loading, data]);

  return (
    <>
      <div className="flex flex-wrap items-center justify-between col-span-12 intro-y sm:flex-nowrap mt-10">
        <h2 className="text-lg font-medium">لیست فروشنده</h2>
        <div className="text-center">
          <Button variant="primary" onClick={() => setIsOpenCreateModal(true)}>
            ثبت رنگ جدید
          </Button>
          {isOpenCreateModal && (
            <CreateAndUpdateColor onSuccess={handleProductSubmission} onClose={() => setIsOpenCreateModal(false)} />
          )}
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="col-span-12 overflow-auto intro-y lg:overflow-visible">
          <Table className="border-spacing-y-[10px] border-separate -mt-2 text-start">
            {loading ? (
              <div className="flex items-center justify-center h-[300px]">
                <div className="flex flex-col items-center">
                  <LoadingIcon icon="puff" className="w-12 h-12" />
                  <div className="mt-2 text-sm text-center text-gray-500">در حال بارگذاری...</div>
                </div>
              </div>
            ) : data?.data ? (
              <ColorTable
                sellers={data?.data}
                onSuccess={() => {
                  refetch();
                }}
              />
            ) : (
              <h2 className="text-center">هیچ رنگی یافت نشد</h2>
            )}
          </Table>
        </div>
      </div>
    </>
  );
}

export default Main;
