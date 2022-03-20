import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const Covid = () => {
  const [dataCovid, setDataCovid] = useState([]);

  // ComponentDidmount
  useEffect(async () => {
    let date = new Date();
    let dateCurrent = moment(date).format("YYYY-MM-DD");
    let dateBefore = moment().subtract(30, "d").format("YYYY-MM-DD");

    let res = await axios.get(
      `https://api.covid19api.com/country/vietnam?from=${dateBefore}T00%3A00%3A00Z&to=${dateCurrent}T00%3A00%3A00Z`
    );
    let data = res && res.data ? res.data : [];
    if (data && data.length > 0) {
      data.map((item) => {
        return (item.Date = moment(item.Date).format("DD/MM/YYYY"));
      });
    }
    // console.log(">>> Check data:", data);
    setDataCovid(data); // data params dataCovid
  }, [/*Dependences*/]);

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
          {dataCovid &&
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
        </tbody>
      </table>
    </div>
  );
};

export default Covid;
