import React from "react";
import { useParams } from "react-router-dom";
import { getProntuariesById } from "../../services/prontuaries/prontuary.service";

async function get_prontuary() {
  const input_value = document.getElementById("useridField").value;
  if ((input_value) !== "") {
    const prontuaries = await getProntuariesById(input_value)
    const table_rows = document.getElementsByClassName("tableRow")
    for (let i = 0; i < table_rows.length; i++) {
      const columns = table_rows[i].getElementsByTagName("td")
      if (prontuaries !== undefined && i < prontuaries.length) {
        columns[0].textContent = prontuaries[i]["table_id"]
        columns[1].textContent = prontuaries[i]["title"]
        columns[2].textContent = prontuaries[i]["created_on"]
      } else {
        columns[0].textContent = ""
        columns[1].textContent = ""
        columns[2].textContent = ""
      }
    }
  }
}

const ProntuaryTable = () => {
  const table_rows = []
  for (let i = 0; i < 15; i++) {
    table_rows.push(<tr className="tableRow">
      <td></td>
      <td></td>
      <td></td>
    </tr>)
  }
  return (<table id="prontuaryTable">
    <tr>
      <th>ID</th>
      <th>Título do Prontuário</th>
      <th>Data</th>
    </tr>
    {table_rows}
  </table>)
}

const Prontuary = () => {
  const params = useParams();
  return (
    <>
      <h1>Prontuários (ID: {params.id})</h1>
      <input id="useridField"></input>
      {<ProntuaryTable />}
      <button onClick={get_prontuary}>Buscar</button>
    </>
  );
};

export default Prontuary;
