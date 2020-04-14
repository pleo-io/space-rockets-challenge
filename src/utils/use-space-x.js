import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function useSpaceX(path, options) {
  const searchParams = new URLSearchParams();
  for (const property in options) {
    searchParams.append(property, options[property]);
  }

  const spacexApiBase = process.env.REACT_APP_SPACEX_API_URL;
  const endpointUrl = `${spacexApiBase}${path}?${searchParams.toString()}`;

  return useSWR(path ? endpointUrl : null, fetcher);
}
