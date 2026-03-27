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
          <tr>
            <td>Anjali</td>
            <td>MECH</td>
            <td>88</td>
          </tr>
          <tr>
            <td>Priya</td>
            <td>EEE</td>
            <td>92</td>
          </tr>
          <tr>
            <td>Vikram</td>
            <td>CIVIL</td>
            <td>80</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}