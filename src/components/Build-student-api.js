import {useEffect, useState} from "react";
import firebase from 'firebase/app';
import { db } from '../firebase-config';
import { ref, onValue } from 'firebase/database'
import Sidebar from './Sidebar';


const Buildstudentapi = ()=>{
  const [students, setStudents ] = useState([])
  
  useEffect(()=>{
      const starRefcount = ref(db, 'students/');
      onValue(starRefcount, (snapshot)=>{
        const data = snapshot.val();
        console.log(data) //object
        const newInfo = Object.keys(data).map(key =>({
          id:key,
          ...data[key]
        }));
        console.log(newInfo)//array
        setStudents(newInfo)
      })
  }, []);
  


  return(
    <div>
      <Sidebar students={students}></Sidebar>
    </div>
  )
}


export default Buildstudentapi;