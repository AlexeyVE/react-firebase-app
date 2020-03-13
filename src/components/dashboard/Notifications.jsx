import React from 'react'
import moment from 'moment'
import 'moment/locale/ru'

const Notifications = ( props ) => {
  const { notifications } = props
  return(
    <div className = "section">
      <div className = "card z-depth-0 border light-blue lighten-5">
        <div className = "card-content">
          <span className = "card-title">Уведомления</span>
          <ul className = "notification">
          { notifications && notifications.map(el => {
            return (
              <li className = "" key = { el.id }>
                <span className = "orange-text"> { el.user } </span>
                <span> { el.content } </span>
                <div className = "grey-text note-date">
                  { moment(el.time.toDate()).calendar() }
                </div>
              </li>
              )
          })}
          </ul>
        </div>
      </div>
    </div>
    )
}
export default Notifications