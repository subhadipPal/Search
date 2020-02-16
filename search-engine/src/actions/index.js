import { PERFORM_SEARCH } from "./types";
import searchBase from "../api/searchBase";

export const performSearch = searchKey => async dispatch => {
  var params = new URLSearchParams();
  params.append("indexName", "ikea");
  params.append("params", `query=${searchKey}&hitsPerPage=16`);
  var response = await searchBase.post("", {
    requests: [
      {
        indexName: "ikea",
        params: `query=${searchKey}&hitsPerPage=16`
      }
    ]
  });
  dispatch({
    type: PERFORM_SEARCH,
    payload: response.data
  });
};
