import React from "react"
import { Route, Routes } from "react-router-dom"
import GroupDescription from "./components/payment/GroupDescription"
import GroupDetails from "./components/payment/GroupDetails"
import Payment from "./pages/Payment"
import routes from "./constants/routing"
import FlagRequest from "./components/payment/FlagRequest"
import Confirmation from "./components/payment/Confirmation"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Payment />}>
                <Route path={routes.PAYMENT_PAGE} element={<GroupDetails />} />
                <Route path={routes.GROUP_DESCRIPTION} element={<GroupDescription />} />
                <Route path={routes.FLAG_REQUEST} element={<FlagRequest />} />
                <Route path={routes.CONFIRMATION} element={<Confirmation />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes