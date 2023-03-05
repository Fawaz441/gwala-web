import React from "react"
import { Route, Routes } from "react-router-dom"
import GroupDescription from "./components/payment/GroupDescription"
import GroupDetails from "./components/payment/GroupDetails"
import Payment from "./pages/Payment"
import routes from "./constants/routing"
import FlagRequest from "./components/payment/FlagRequest"
import Confirmation from "./components/payment/Confirmation"
import NotFound from "./components/general/NotFound"
import Home from "./pages/Home"
import { RequestDeclined } from "./components/general/ExtraPages"

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path={routes.REJECT_REQUEST} element={<RequestDeclined />} />
            <Route path="/payment-requests/:paymentRequestInfo" element={<Payment />}>
                <Route path={routes.PAYMENT_PAGE} element={<GroupDetails />} />
                <Route path={routes.GROUP_DESCRIPTION} element={<GroupDescription />} />
                <Route path={routes.FLAG_REQUEST} element={<FlagRequest />} />
                <Route path={routes.CONFIRMATION} element={<Confirmation />} />
            </Route>
            <Route path={"*"} element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes