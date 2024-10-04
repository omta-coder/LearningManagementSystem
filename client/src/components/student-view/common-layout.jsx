import React from 'react'
import { Outlet } from 'react-router-dom'

const StudentViewCommonLayout = () => {
  return (
    <div>
        <h1>Student View Common Layout</h1>
        <Outlet/>

    </div>
  )
}

export default StudentViewCommonLayout