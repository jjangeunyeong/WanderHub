import React, { useState, useEffect, useLayoutEffect } from 'react';
import ReactCalendar from '@components/common/ReactCalendar';
import SvgMap from '@components/accompany/main/SvgMap';
import CardList from '@components/accompany/CardList';
import { mapList } from '@/constant/MapPath';
import useRouter from '@/hooks/useRouter';
import { objectToQuerystring, querystringToObject } from '@/utils/commonUtil';
import { useLocation } from 'react-router-dom';
import useGetAccompanyList from '@/hooks/queryHooks/useGetAccompanyList';
import Pagenation from '@components/common/Pagenation';
import Spinner from '@components/common/Spinner';
import Empty from '@components/common/Empty';

const DataHandleBox = () => {
  const [uri, setUri] = useState<null | 'bylocal' | 'bydate' | 'bylocalanddate'>(null);
  const [curLocal, setCurLocal] = useState<null | string>(null);
  const [curDate, setCurDate] = useState<null | string>(null);
  const [curPage, setCurPage] = useState<number>(0);
  const { goTo } = useRouter();
  const location = useLocation();
  const { data, isLoading } = useGetAccompanyList({ uri, curLocal, curDate, curPage });

  const handleRoute = (local: string | null, date: string | null) => {
    switch (true) {
      case Boolean(date && local):
        setUri('bylocalanddate');
        break;
      case Boolean(date):
        setUri('bydate');
        break;
      case Boolean(local):
        setUri('bylocal');
        break;
      default:
        setUri(null);
        return;
    }
    const queryObj = { accompanyLocal: local, accompanyDate: date };
    const filteredQuery = Object.entries(queryObj).reduce(
      (acc, [key, value]) => (value ? { ...acc, [key]: value } : acc),
      {},
    );
    goTo(objectToQuerystring(filteredQuery), true);
  };

  const getLocalName = (name: string | null) => {
    setCurLocal(name);
    if (curPage !== 0) {
      setCurPage(0);
    }
    handleRoute(name, curDate);
  };

  const getDate = (date: string | null) => {
    setCurDate(date);
    if (curPage !== 0) {
      setCurPage(0);
    }
    handleRoute(curLocal, date);
  };

  const handlePage = (page: number) => {
    setCurPage(page - 1);
    const currentQueryObject = querystringToObject(location.search);

    const updatedQueryObject = { ...currentQueryObject, page: (page - 1).toString() };

    const updatedQueryString = objectToQuerystring(updatedQueryObject);

    goTo(updatedQueryString, true);
  };

  useEffect(() => {
    if (!location.search) {
      setCurLocal(null);
      setCurDate(null);
      setUri(null);
    }
  }, [location]);
  useLayoutEffect(() => {
    const queryLocation = querystringToObject(location.search);
    if (queryLocation.page) {
      setCurPage(parseInt(queryLocation.page));
      // setCurPage(parseInt(queryLocation.page) - 1);
    }
    if (queryLocation.accompanyLocal) setCurLocal(decodeURI(queryLocation.accompanyLocal));
    if (queryLocation.accompanyDate) setCurDate(queryLocation.accompanyDate);
    if (queryLocation.accompanyLocal && queryLocation.accompanyDate) {
      setUri('bylocalanddate');
    } else if (queryLocation.accompanyDate) {
      setUri('bydate');
    } else if (queryLocation.accompanyLocal) {
      setUri('bylocal');
    } else {
      setUri(null);
    }
  }, []);
  return (
    <section className="my-3">
      {/* <div className="flex flex-col items-center md:justify-around md:flex-row sm:flex-col sm:items-center"> */}
      <div className="flex justify-around">
        <div className="w-[45%] max-h-[50vh]">
          <SvgMap pathList={mapList} curLocal={curLocal} getLocalName={getLocalName} />
        </div>
        <div className="w-[45%] max-h-[50vh]">
          <ReactCalendar curDate={curDate} getDate={getDate} />
        </div>
      </div>
      {(curDate || curLocal) &&
        (data?.data.length > 0 ? (
          <div className="mt-[2rem] pt-[1rem] border-t-2 border-gray-300">
            <p className="text-3xl font-bold text-center mb-4">
              <span>{curDate}</span>
              <span>{curLocal}</span>
              <br />
              이런 여행이 기다리고 있어요!
            </p>
            {isLoading ? <Spinner /> : <CardList cards={data.data} />}
            <Pagenation
              totalPages={data.pageInfo.totalPage}
              curPage={curPage + 1}
              handlePageNation={handlePage}
            />
          </div>
        ) : (
          <Empty message="동행일정이 없습니다." />
        ))}
    </section>
  );
};

export default DataHandleBox;
