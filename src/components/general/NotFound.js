import React from "react"
import Container from "../general/Container"

const NotFound = () => {
    return (
        <Container>
            <div className="w-screen h-screen flex items-center justify-center">
                <p className="text-[30px] font-sans400 leading-[21.83px] text-center max-w-[288px] text-black">
                    Page Not Found.
                </p>
            </div>
        </Container>
    )
}

export default NotFound