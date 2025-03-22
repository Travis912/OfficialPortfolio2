
import PropTypes from 'prop-types';

export default function GetInspiredLayout({
  tripHeading1,
  heading1,
  imgSrc1,
  tripHeading2,
  heading2,
  imgSrc2,
  tripHeading3,
  heading3,
  imgSrc3,
  tripHeading4,
  heading4,
  imgSrc4,
  days1,
  days2,
  days3,
  days4,
  exp1,
  exp2,
  exp3,
  exp4
}) {

  return (
    <div className='get-inspired-div'>
      <div className='get-inspired-group' id='group-1'>

        {/* GROUP 1 */}

        <div className="get-inspired-indivisual-div">
          <img className="get-inspired-img" src={imgSrc1} alt="inspired"></img>
          <h6>{heading1}</h6>
          <div className='trip-ideas-div'>
            <h6>{tripHeading1}</h6>
            <div className='days-and-experinces-div'>
              <p className='trip-ideas-days'>{days1}</p>
              <p className='trip-ideas-experiences'>{exp1}</p>
            </div>
          </div>
        </div>

        <div className="get-inspired-indivisual-div">
          <img className="get-inspired-img" src={imgSrc2} alt="inspired"></img>
          <h6>{heading2}</h6>
          <div className='trip-ideas-div'>
            <h6>{tripHeading2}</h6>
            <div className='days-and-experinces-div'>
              <p className='trip-ideas-days'>{days2}</p>
              <p className='trip-ideas-experiences'>{exp2}</p>
            </div>
          </div>
        </div>

        <div className="get-inspired-indivisual-div">
          <img className="get-inspired-img" src={imgSrc3} alt="inspired"></img>
          <h6>{heading3}</h6>
          <div className='trip-ideas-div'>
            <h6>{tripHeading3}</h6>
            <div className='days-and-experinces-div'>
              <p className='trip-ideas-days'>{days3}</p>
              <p className='trip-ideas-experiences'>{exp3}</p>
            </div>
          </div>
        </div>

        <div className="get-inspired-indivisual-div">
          <img className="get-inspired-img" src={imgSrc4} alt="inspired"></img>
          <h6>{heading4}</h6>
          <div className='trip-ideas-div'>
            <h6>{tripHeading4}</h6>
            <div className='days-and-experinces-div'>
              <p className='trip-ideas-days'>{days4}</p>
              <p className='trip-ideas-experiences'>{exp4}</p>
            </div>
          </div>
        </div>
      </div>

      {/* GROUP 2 */}
      <div className='get-inspired-group' id='group-2'>
        <div className="get-inspired-indivisual-div">
          <img className="get-inspired-img" src={imgSrc1} alt="inspired"></img>
          <h6>{heading1}</h6>
          <div className='trip-ideas-div'>
            <h6>{tripHeading1}</h6>
            <div className='days-and-experinces-div'>
              <p className='trip-ideas-days'>{days1}</p>
              <p className='trip-ideas-experiences'>{exp1}</p>
            </div>
          </div>
        </div>

        <div className="get-inspired-indivisual-div">
          <img className="get-inspired-img" src={imgSrc2} alt="inspired"></img>
          <h6>{heading2}</h6>
          <div className='trip-ideas-div'>
            <h6>{tripHeading2}</h6>
            <div className='days-and-experinces-div'>
              <p className='trip-ideas-days'>{days2}</p>
              <p className='trip-ideas-experiences'>{exp2}</p>
            </div>
          </div>
        </div>

        <div className="get-inspired-indivisual-div">
          <img className="get-inspired-img" src={imgSrc3} alt="inspired"></img>
          <h6>{heading3}</h6>
          <div className='trip-ideas-div'>
            <h6>{tripHeading3}</h6>
            <div className='days-and-experinces-div'>
              <p className='trip-ideas-days'>{days3}</p>
              <p className='trip-ideas-experiences'>{exp3}</p>
            </div>
          </div>
        </div>

        <div className="get-inspired-indivisual-div">
          <img className="get-inspired-img" src={imgSrc4} alt="inspired"></img>
          <h6>{heading4}</h6>
          <div className='trip-ideas-div'>
            <h6>{tripHeading4}</h6>
            <div className='days-and-experinces-div'>
              <p className='trip-ideas-days'>{days4}</p>
              <p className='trip-ideas-experiences'>{exp4}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



GetInspiredLayout.propTypes = {
  tripHeading1: PropTypes.string.isRequired,
  tripHeading2: PropTypes.string.isRequired,
  tripHeading3: PropTypes.string.isRequired,
  tripHeading4: PropTypes.string.isRequired,
  heading1: PropTypes.string.isRequired,
  heading2: PropTypes.string.isRequired,
  heading3: PropTypes.string.isRequired,
  heading4: PropTypes.string.isRequired,
  imgSrc1: PropTypes.string.isRequired,
  imgSrc2: PropTypes.string.isRequired,
  imgSrc3: PropTypes.string.isRequired,
  imgSrc4: PropTypes.string.isRequired,
  days1: PropTypes.string.isRequired,
  days2: PropTypes.string.isRequired,
  days3: PropTypes.string.isRequired,
  days4: PropTypes.string.isRequired,
  exp1: PropTypes.string.isRequired,
  exp2: PropTypes.string.isRequired,
  exp3: PropTypes.string.isRequired,
  exp4: PropTypes.string.isRequired,
  group2Ref: PropTypes.object.isRequired,
};
