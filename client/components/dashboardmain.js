import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const DashboardMain = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title">
            Main
          </div>
          <div>
            <Link to="/dashboard/profile/52ce36b3-5632-485c-a618-81f62013a53a"> Go To Profile </Link>
          </div>
          <div>
            <Link to="/dashboard"> Go To Root </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

DashboardMain.propTypes = {}

export default DashboardMain
