import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faBed, faCar, faPerson, faPlane, faSailboat, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { React, useState } from 'react'
import './header.css'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns"
import { useNavigate } from 'react-router-dom'

const Header = ({ type }) => {
  const navigate = useNavigate()
  const [destination, setDestination] = useState("")
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ])

  const [openOptions, setOpenOptions] = useState(false)
  const [options, setOptions] = useState({
    adult: 0,
    children: 0,
    room: 0
  })


  const handleSearch = () => {
    navigate('/hotels', {
      state: {
        destination,
        date,
        options
      }
    })
  }

  return (
    <div className='header'>
      <div className={type == 'list' ? 'headerContainer listMode' : 'headerContainer'}>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faSailboat} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>
        {type !== "list" &&
          <>
            <h1 className="headerTitle">A life of discounts? It's Genius</h1>
            <p className="headerDesc">
              Get rewarded for your travels - unlock instant savings of 10% or more with a free Lamabooking account
            </p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder='Where are you going?'
                  className='headerSearchInput'
                  onChange={e => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendar} className="headerIcon" />
                <span onClick={() => {
                  setOpenDate(!openDate)
                  setOpenOptions(false)
                }} className='headerSearchText'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                {
                  openDate &&
                  <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                }
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span onClick={() => {
                  setOpenOptions(!openOptions)
                  setOpenDate(false)
                }} className='headerSearchText'>{`${options.adult} adult · ${options.children} children · ${options.room} roon`}</span>
                {
                  openOptions &&
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          onClick={() => setOptions((prev) => { return { ...prev, adult: prev.adult - 1 } })}
                          className={`optionCounterButton ${options.adult <= 1 ? 'disabled' : ''}`} disabled={options.adult <= 1}>
                          -
                        </button>
                        <span className="optionCounterNumber">{options.adult}</span>
                        <button
                          onClick={() => setOptions((prev) => { return { ...prev, adult: prev.adult + 1 } })}
                          className="optionCounterButton">
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          onClick={() => setOptions((prev) => { return { ...prev, children: prev.children - 1 } })}
                          className={`optionCounterButton ${options.children <= 1 ? 'disabled' : ''}`} disabled={options.children <= 1}>
                          -
                        </button>
                        <span className="optionCounterNumber">{options.children}</span>
                        <button
                          onClick={() => setOptions((prev) => { return { ...prev, children: prev.children + 1 } })}
                          className="optionCounterButton">
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          onClick={() => setOptions((prev) => { return { ...prev, room: prev.room - 1 } })}
                          className={`optionCounterButton ${options.room <= 1 ? 'disabled' : ''}`} disabled={options.room <= 1}>
                          -
                        </button>
                        <span className="optionCounterNumber">{options.room}</span>
                        <button
                          onClick={() => setOptions((prev) => { return { ...prev, room: prev.room + 1 } })}
                          className="optionCounterButton">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                }

              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>Search</button>
              </div>
            </div>
          </>
        }
      </div >
    </div >
  )
}

export default Header