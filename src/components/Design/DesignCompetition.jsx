import React from 'react';
import './DesignCompetition.css';

const DesignCompetitionPage = () => {
  return (
    <div className="mannequin">
      <div className="body">
        <div className="stomach">
          <div className="hip">
            <div className="leg">
              <div className="knee"></div>
              <div className="calve">
                <div className="foot"></div>
              </div>
            </div>
            <div className="leg">
              <div className="knee"></div>
              <div className="calve">
                <div className="foot"></div>
              </div>
            </div>
          </div>
          <div className="chest"></div>
          <div className="head"></div>
          <div className="arm _0">
            <div className="elbow">
              <div className="underarm"></div>
            </div>
          </div>
          <div className="arm _1">
            <div className="elbow">
              <div className="underarm"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="legs">
        <div className="leg">
          <div className="upper-leg"></div>
          <div className="lower-leg"></div>
        </div>
        <div className="leg">
          <div className="upper-leg"></div>
          <div className="lower-leg"></div>
        </div>
      </div>
    </div>
  );
};

export default DesignCompetitionPage;
