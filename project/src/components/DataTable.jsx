export default function DataTable() {
  return (
    <div className="table-section">
      <h3>Recent Students</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Siddartha</td>
            <td>CSE</td>
            <td>90</td>
          </tr>
          <tr>
            <td>Rahul</td>
            <td>ECE</td>
            <td>85</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}