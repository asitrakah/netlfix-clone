import React from 'react'
import requests from '../../Request'
import Banner from '../banner/Banner'
import Nav from '../navbar/Nav'
import Row from '../row/Row'
import "./Home.css"

function Home() {
    return (
        <div className="homeScreen">
            <Nav />

            <Banner />

            <Row title="CCC"
                fetchUrl={requests.fetchCCC}
                isLargeRow
            />
            <Row title="Live"
                fetchUrl={requests.fetchLive}
                isLargeRow
            />
            <Row title="CCC"
                fetchUrl={requests.fetchCCC}
                isLargeRow
            />
            <Row title="CCC"
                fetchUrl={requests.fetchCCC}
                isLargeRow
            />

        </div>
    )
}

export default Home
