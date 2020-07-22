import React from "react";
import axios from "axios";

class CovidTrack extends React.Component {
  constructor(props) {
    super(props);
    this.k = 0;
    // this.stateAP = [];
    this.state = {
      newData: [],
      npcases: null, //np-new positive
      nccases: null, //nc-new cured
      ndcases: null, //nd-new deceased
      cacases: null, //ca-currently active
      tcncases: null, //tcn-total confirmed
      tccases: null, //tc-total cured
      tdcases: null, //td-total deceased
      mdates: "Loading..",

      distData: <div>COVID-19 details for Andhra Pradesh - Loading..</div>,
    };
  }

  testfunc = async () => {
    let promise = await axios.get("https://api.covid19india.org/v4/data.json");
    // this.stateAP = promise.data.AP;
    // console.log(this.stateAP);
    this.setState({
      newData: Object.entries(promise.data.AP.districts),
      npcases: promise.data.AP.delta.confirmed,
      nccases: promise.data.AP.delta.recovered,
      ndcases: promise.data.AP.delta.deceased,
      tcncases: promise.data.AP.total.confirmed,
      tccases: promise.data.AP.total.recovered,
      tdcases: promise.data.AP.total.deceased,
      mdates: promise.data.AP.meta.last_updated,
    });

    this.setState({
      distData: (
        <table className="ui striped table unstackable inverted compact m-0 p-0">
          <thead>
            <tr>
              <th>District</th>
              <th>New</th>
              <th>Active</th>
              <th>Deceased</th>
              <th>Cured/ Migrated</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {this.state.newData.map((x) => (
              <tr key={(this.k += 1)}>
                <td>{x[0] ?? "N/A"}</td>
                <td>{x[1]["delta"]?.["confirmed"] ?? "N/A"}</td>
                <td>
                  {x[1]["total"]?.["confirmed"] -
                    x[1]["total"]?.["recovered"] -
                    x[1]["total"]?.["deceased"] || "N/A"}
                </td>
                <td>{x[1]["total"]?.["deceased"] ?? "N/A"}</td>
                <td>{x[1]["total"]?.["recovered"] ?? "N/A"}</td>
                <td>{x[1]["total"]?.["confirmed"] ?? "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ),
    });

    this.setState({
      cacases:
        this.state.tcncases -
        this.state.tccases -
        this.state.tdcases -
        this.state.newData[3][1]["total"]["confirmed"] +
        this.state.newData[3][1]["total"]["recovered"] -
        this.state.newData[7][1]["total"]["confirmed"] +
        this.state.newData[7][1]["total"]["recovered"],
    });
  };

  componentDidMount() {
    this.testfunc();
  }

  render() {
    return (
      <div className="table-responsive">
        <h2 className="mt-4 mb-0 pb-0">
          COVID-19 case records: Andhra Pradesh
        </h2>
        {this.state.distData}
        <div className="legend">
          ||Legend|| New:"new cases reported today" || Active:"currently active
          cases" || Cured:"cured cases till date" ||
          Total:"Active+Deceased+Cured || source:github.com/covid19india/api ||
        </div>
        <i>*Last updated on: {this.state.mdates}</i>
        <h3 className="pb-0 mb-0">Daily Reports: COVID-19 in A.P.</h3>
        <ul>
          <li>New +ve cases: {this.state.npcases}</li>
          <li>New cured cases: {this.state.nccases}</li>
          <li>New deceased: {this.state.ndcases}</li>
          <li>Currently active +ve cases: {this.state.cacases}</li>

          <li>Total cured: {this.state.tccases}</li>
          <li>Total deceased: {this.state.tdcases}</li>
          <li>
            Total confirmed: {this.state.tcncases}{" "}
            <i>
              *Totals include 'foriegn evacuees' and 'other state' (migrated)
              cases
            </i>
          </li>
        </ul>
      </div>
    );
  }
}

export default CovidTrack;

// return (
//   console.log(`district ${x[0] ?? "N/A"}`),
//   console.log(`Population ${x[1]["meta"]?.["population"] ?? "N/A"}`),
//   console.log(`Confirmed ${x[1]["total"]?.["confirmed"] ?? "N/A"}`),
//   console.log(`deceased ${x[1]["total"]?.["deceased"] ?? "N/A"}`),
//   console.log(`recovered ${x[1]["total"]?.["recovered"] ?? "N/A"}`)
// );
