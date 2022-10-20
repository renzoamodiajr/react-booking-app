import React from 'react'
import Featured from '../../components/featured/Featured'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import PropertyList from '../../components/propertyList/PropertyList'
import './home.css'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h2 className="homeTitle">
                    Browse by property type
                </h2>
                <PropertyList />
                <h2 className="homeTitle">
                    Home guests love
                </h2>
            </div>
        </div>
    )
}

export default Home