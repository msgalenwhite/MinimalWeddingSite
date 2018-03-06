import React from 'react'
import {Link} from 'react-router'

const WhereTo = props => {
  //we will bring RSVP live on July 1st.

  let likeToDo = [
    {
      path: '/wedding/invitation',
      text: 'View the Invitation'
    },
    {
      path: '/wedding/checkbacksoon',
      text: 'Make an RSVP'
    },
    {
      path: '/wedding/location',
      text: 'Get Location information'
    },
    {
      path: '/wedding/transportation',
      text: 'Travel Tips'
    },
    {
      path: 'https://www.amazon.com/wedding/galen-white-chris-bimbo-gloucester-october-2018/registry/7ZDHYRQ9I313',
      text: 'View the Registry',
      aTag: true
    },
    {
      path: '/coolsite!',
      text: 'What a cool site!'
    }
  ]

  let initialList = likeToDo.map((item) => {
    let returnedItem;

    if (item.aTag) {
      returnedItem =
        <li key={item.path}>
          <a href={item.path}>
            {item.text}
          </a>
        </li>
    } else {
      returnedItem =
        <li key={item.path}>
          <Link to={item.path}>
            {item.text}
          </Link>
        </li>
    }
    return(
      returnedItem
    )
  })

  let comingSoon = [
    "See Stories that Friends/Family have Shared",
    "'On the Day' Schedule",
    "Rehearsal Dinner Information"
  ]

  let soonList = comingSoon.map((item) => {
    return (
      <li key={item}>{item}</li>
    )
  })

  return(
    <div className='page whereToPage'>
      <div className='title center date'>October 13, 2018</div>
      <h3 className='heading'>
        Galen and Chris are Getting Married!
      </h3>
      <h3 className='title'>
        What would you like to do?
      </h3>
      <ul>
        {initialList}
      </ul>
      <h3 className='title'>Coming Soon:</h3>
      <ul>
        {soonList}
      </ul>
    </div>
  )
}

export default WhereTo
