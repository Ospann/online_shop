import { useEffect, useState } from "react";

type UrlParams = {
  [key: string]: string;
};

type URLParamsResult = {
  maxPrice: string;
  types: string;
  suppliers: string;
  search: string;
};

const useURLParams = () => {
  const [urlParams, setUrlParams] = useState<UrlParams>({});

  const set = (key: string, value: string) => {
    const newParams = { ...urlParams, [key]: value };
    const searchParams = new URLSearchParams();

    for (const paramKey in newParams) {
      if (newParams[paramKey] !== "") {
        searchParams.set(paramKey, newParams[paramKey]);
      }
    }

    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
    window.history.replaceState(null, "", newUrl);
    setUrlParams(newParams);
  };

  const get = (key: string) => {
    return urlParams[key];
  };

  const getAll = (): URLParamsResult => {
    return {
      maxPrice: urlParams["maxPrice"],
      types: urlParams["type"],
      suppliers: urlParams["supplier type"],
      search: urlParams["search"],
    };
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const params: UrlParams = {};

    for (const [key, value] of searchParams.entries()) {
      params[key] = value;
    }

    setUrlParams(params);
  }, []);

  return {
    set,
    getAll,
    get,
  };
};

export default useURLParams;
