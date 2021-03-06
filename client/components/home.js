import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './dashboard'
import DashboardProfile from './dashboardprofile'
import DashboardMain from './dashboardmain'
import Header from './header'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <Switch>
            <Route exact path="/dashboard" component={() => <Dashboard />} />
            <Route exact path="/dashboard/profile/:username" component={() => <DashboardProfile />} />
            <Route exact path="/dashboard/main" component={() => <DashboardMain />} />
          </Switch>  
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
