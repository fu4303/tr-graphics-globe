import React from 'react';

const LocationOptions = (props) => {
  return (
    <div className='location-options'>
      <button
        onClick={() => props.setState({ location: ['HKG'] })}
      >Hong Kong
      </button>
      <button
        onClick={() => props.setState({ location: ['United States'] })}
      >USA
      </button>
      <button
        onClick={() => props.setState({ location: ['asia-and-the-middle-east'] })}
      >Asia and the Middle East
      </button>
      <button
        onClick={() => props.setState({ location: ['europe', [13.404954, 52.520008]] })}
      >Europe
      </button>
      <button
        onClick={() => props.setState({ location: [[139.6503, 35.6762]] })}
      >Tokyo
      </button>
      <button
        onClick={() => props.setState({ location: ['LBN'] })}
      >Lebanon
      </button>
      <button
        onClick={() => props.setState({ location: ['India'] })}
      >India
      </button>
      <button
        onClick={() => props.setState({
          location: [
            ['brazil', 'russia', 'india', 'china'],
          ],
        })}
      >BRIC
      </button>
      <button
        onClick={() => props.setState({ location: ['Peru'] })}
      >Peru
      </button>
      <button
        onClick={() => props.setState({ location: ['northern-europe'] })}
      >Northern Europe
      </button>
      <button
        onClick={() => props.setState({ location: ['australia'] })}
      >Australia
      </button>
      <button
        onClick={() => props.setState({ location: ['san-marino'] })}
      >San Marino
      </button>
      <button
        onClick={() => props.setState({ location: ['GB'] })}
      >United Kingdom
      </button>
      <button
        onClick={() => props.setState({ location: ['south-eastern-asia'] })}
      >Southeastern Asia
      </button>
      <button
        onClick={() => props.setState({ location: [[0, 0]] })}
      >0, 0
      </button>
      <button
        onClick={() => props.setState({ location: [null] })}
      >null
      </button>
    </div>
  );
};

export default LocationOptions;
