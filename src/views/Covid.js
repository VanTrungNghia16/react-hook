import { useEffect, useState } from "react";
import useFetch from "../customize/fetch.js";
import moment from "moment";

const Covid = () => {
  // let date = new Date();
  // let dateCurrent = moment(date).format("YYYY-MM-DD");
  // let dateBefore = moment().subtract(30, "d").format("YYYY-MM-DD");
  const today = new Date(new Date().setHours(0, 0, 0, 0));
  const priorDate = moment().subtract(31, "days");

  const {
    data: dataCovid,
    isLoading,
    isError,
  } = useFetch(
    `https://api.covid19api.com/country/vietnam?from=${priorDate.toISOString()}T00%3A00%3A00Z&to=${today.toISOString()}T00%3A00%3A00Z"`
  );

  return (
    <div>
      <h3>Covid 19 tracking in VietNam: </h3>
      <table className="table">
        {/* {console.log(">>> Check data covid:", dataCovid)} */}
        <thead>
          <tr>
            <td>Date</td>
            <td>Confirmed</td>
            <td>Active</td>
            <td>Deaths</td>
            <td>Recovered</td>
          </tr>
        </thead>
        <tbody>
          {isError === false &&
            isLoading === false &&
            dataCovid &&
            dataCovid.length > 0 &&
            dataCovid.map((item) => {
              return (
                <tr key={item.ID}>
                  <td>{item.Date}</td>
                  <td>{item.Confirmed}</td>
                  <td>{item.Active}</td>
                  <td>{item.Deaths}</td>
                  <td>{item.Recovered}</td>
                </tr>
              );
            })}
          {isLoading === true && (
            <tr>
              <td colSpan="5">Loading...</td>
            </tr>
          )}
          {isError === true && (
            <tr>
              <td colSpan="5">Something Wrong...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Covid;
