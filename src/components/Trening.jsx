/* eslint-disable no-mixed-operators */

export const Trening = ({ trening, removeTrening }) => {
    const date = trening.date && new Date(trening.date).toLocaleDateString() || '';
  
    return (
      <div className='content-row'>
        <div>{date}</div>
        <div>{trening.distance}</div>
        <div>
          <button className="content-btn">&#9998;</button>
          <button 
            className="content-btn"
            onClick={() => trening.date && removeTrening(trening.date)}
          >&#10008;</button>
        </div>
      </div>
    )
  }
  