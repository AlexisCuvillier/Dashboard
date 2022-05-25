import React, { createContext, useState } from 'react'
import fullData from './fulldata'

export const DashboardContext = createContext()

const DashboardContextProvider = props => {

    const [dataChart, setDataChart] = useState(fullData['2020'])
    const [yearData, setYearData] = useState('2020')

    const changeYear = el => {
        setYearData(el.target.value)
        setDataChart(fullData[el.target.value])
    }

    return (
        <DashboardContext.Provider value={{changeYear, dataChart, yearData}}>
            {props.children}
        </DashboardContext.Provider>
    )
}

export default DashboardContextProvider;