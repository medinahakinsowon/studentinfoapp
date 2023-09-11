

const Sidebar = ({ students }) => {
  return (
    <div className="container">
      <h3 className="text-center mt-3 mb-3">Student Database</h3>
      <table className="table">
        <thead>
          <tr>
            <div className="row">
              <th className="col" >#</th>
              <th className="col">First-Name</th>
              <th className="col">Last-Name</th>
              <th className="col">Middle-Name</th>
              <th className="col">Level</th>
              <th className="col">Age</th>
            </div>
          </tr>
        </thead>
        <tbody>
          <tr>
            {students.map((student, index) => {
              return (
                <div className="row">
                  <th className="col" key={index}>{index + 1}</th>
                  <td className="col">{student.firstname}</td>
                  <td className="col">{student.lastname}</td>
                  <td className="col">{student.middlename}</td>
                  <td className="col">{student.level}</td>
                  <td className="col">{student.age}</td>
                </div>
              )
            })}
          </tr>
        </tbody>
      </table>
    </div>
  )
}


export default Sidebar;




