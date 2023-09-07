import React, { useState } from 'react';

import {
  PRIMARYLIGHT,
  PRIMARYDARK,
  SECONDARYDARK,
  SECONDARYLIGHT,
  TERTIARYLIGHT,
  TERTIARYDARK,
} from '../../../utils/constants';

export default function ProjectItem(props) {
  let colorLight = '';
  let colorDark = '';

  if (props.color === 'primary') {
    colorLight = PRIMARYLIGHT;
    colorDark = PRIMARYDARK;
  } else if (props.color === 'secondary') {
    colorLight = SECONDARYLIGHT;
    colorDark = SECONDARYDARK;
  } else if (props.color === 'tertiary') {
    colorLight = TERTIARYLIGHT;
    colorDark = TERTIARYDARK;
  }

  function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  const rgbaColorLight = hexToRgba(colorLight, 0.85);
  const rgbaColorDark = hexToRgba(colorDark, 0.85);
  console.log(rgbaColorLight);
  return (
    <>
      <div className='grid__item'>
        {/* <div className='col-1-of-3'> */}
        <div className='card'>
          <div className='card__side card__side--front'>
            <div
              className='card__picture'
              style={{
                backgroundSize: 'cover',
                height: '23rem',
                backgroundBlendMode: 'screen',
                clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
                backgroundImage: `linear-gradient(to right bottom, ${colorLight}, ${colorDark}), url("/${props.imgUrl}")`,
              }}
            >
              &nbsp;
            </div>
            <h4 className='card__heading'>
              <span
                className='card__heading-span'
                style={{
                  backgroundImage: `linear-gradient(to right bottom, ${rgbaColorLight}, ${rgbaColorDark})`,
                }}
              >
                {props.title}
              </span>
            </h4>
            <div className='card__details'>
              <ul>
                <li>
                  Utfört {props.startDate} - {props.endDate}{' '}
                </li>
                <li>{props.shortDesc}</li>
              </ul>
            </div>
          </div>
          <div
            className='card__side  card__side--back card__side--back-1'
            // style={{
            //   backgroundSize: '100%',
            //   backgroundRepeat: 'no-repeat',
            //   backgroundImage: `url("/${props.imgUrl}")`,
            // }}
          >
            <div className='card__cta'>
              <div className='card__price-box'></div>
              <a
                // href='#popup'
                className='btn btn--white'
                onClick={(e) => {
                  console.log('poo');
                  props.handleShowPopup(e, props);
                }}
              >
                Läs mer!
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
