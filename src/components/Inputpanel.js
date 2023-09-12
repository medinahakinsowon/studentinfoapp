
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Students = () => {
  // const [Firstname, setFirstname] = useState('')
  // const [Lastname, setLastname] = useState('')
  // const [SurName, setSurName] = useState('')
  // const [age, setAge] = useState('')

  const [input, setInput] = useState({
    firstname: '',
    lastname: '',
    middlename: '',
    level: '',
    age: ''
  })

  const inputFun = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const notify = () => toast("Registration successful🎉🎉!");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataForm = {
      firstname: input.firstname,
      lastname: input.lastname,
      middlename: input.middlename,
      level: input.level,
      age: input.age
    }
    setInput({
      firstname: '',
      lastname: '',
      middlename: '',
      level: '',
      age: ''
    })
    const response = await fetch(`https://students-table-a0499-default-rtdb.firebaseio.com/students.json`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataForm)
    })
    if (!response.ok) {
      alert('An Error Just Occurred')
    }
    const data = await response.json();
    notify()
    console.log(data)
    return data

  }

  return (
    <div className="">

      <div className="container">

        {input.firstname} {input.lastname} {input.middlename} {input.level}

        <form className="mt-5" onSubmit={handleSubmit} >
          <ToastContainer />
          <h3 className="text-center-primary fw-bold">Enter Student Informations</h3>
          <input placeholder="Firstname" name="firstname" value={input.firstname} onChange={inputFun} className="form-control mt-3" />
          <input placeholder="Lastname" name="lastname" value={input.lastname} onChange={inputFun} className="form-control mt-3" />
          <input placeholder="Middlename" name="middlename" value={input.middlename} onChange={inputFun} className="form-control mt-3" />
          <input placeholder="Level" name="level" value={input.level} onChange={inputFun} className="form-control mt-3" />
          <input placeholder="Age" name="age" value={input.age} onChange={inputFun} className="form-control mt-3" />
          <button className="btn btn-primary p-3 m-1 fw-bold mt-4" type="submit">
            Submit
          </button>
        </form>
      </div>

    </div>
  )
}

export default Students;