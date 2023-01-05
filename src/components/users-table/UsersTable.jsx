import { DeleteFilled } from "@ant-design/icons";
import Button from '../button/Button';

export default function UsersTable({ data, onUserRemove }) {
  let sortedUsers = [...data];

  const NAT_FLAG = {
    "ES": "🇪🇸",
    "DE": "🇩🇪",
    "NL": "🇳🇱",
    "GB": "🇬🇧",
    "CH": "🇨🇭",
    "FI": "🇫🇮",
    "FR": "🇫🇷",
    "BR": "🇧🇷",
    "UA": "🇺🇦",
    "MX": "🇲🇽",
    "US": "🇺🇸",
    "CA": "🇨🇦",
    "RS": "🇷🇸",
    "IN": "🇮🇳",
    "IE": "🇮🇪",
    "DK": "🇩🇰",
    "IR": "🇮🇷",
    "AU": "🇦🇺",
    "NO": "🇳🇴",
    "NZ": "🇳🇿",
    "TR": "🇹🇷"
  }

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Photo</th>
            <th>
              Name
            </th>
            <th>
              Gender
            </th>
            <th>DOB</th>
            <th>
              Age
            </th>
            <th>Email</th>
            <th>Phone</th>
            <th>Nationality</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.length > 1 ? sortedUsers.map((el,index) => (
            <tr key={el.login.uuid}>
              <td>{index + 1}</td>
              <td title={`${el.name.first} ${el.name.last} profile image`}>
                <img src={el.picture.thumbnail} width="25px" height="25px" />
              </td>
              <td>{`${el.name.first} ${el.name.last}`}</td>
              <td>{el.gender}</td>
              <td>{new Date(el.dob.date).toDateString().split(" ").slice(1).join(" ")}</td>
              <td>{el.dob.age}</td>
              <td>{el.email}</td>
              <td>{el.cell}</td>
              <td title={el.nat} style={{ fontSize: "2rem"}}>{NAT_FLAG[el.nat]}</td>
              <td title={`Delete item ${index + 1}`}>
                <Button icon={<DeleteFilled />} style="action_remove" onClick={() => onUserRemove(el.login.uuid)} /> 
              </td>
          </tr>
        ))
        :
        (
          <tr>
            <td colSpan={9}>No data found</td>
          </tr>
        )
      }
      </tbody>
    </table>  
  </div>
  )
}