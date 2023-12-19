import {
  Store,
  RecordSource,
  Environment,
  Network,
  Observable,
} from "relay-runtime";
import type { FetchFunction } from "relay-runtime";

const fetchFn: FetchFunction = (params, variables) => {
  const response = fetch("http://localhost:8001/api", {
    method: "POST",
    headers: [["Content-Type", "application/json"]],
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  });

  return Observable.from(response.then((data) => data.json()));
};

export default new Environment({
  network: Network.create(fetchFn),
  store: new Store(new RecordSource()),
});
