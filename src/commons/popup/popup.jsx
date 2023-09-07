function Popup(props) {
  return (
    <div>
      <div className='popup' id='popup'>
        {/* <div> */}
        <a className='popup__blocker' href='#section-projects'>
          &nbsp;
        </a>
        <div className='popup__content'>
          <div className='popup__left'>
            {/* <img src={nat8} alt='A guy on the tour' className='popup__img' /> */}
            <img src={props.currentPopupContent.imgUrl} className='popup__img' />
          </div>
          <div className='popup__right'>
            <a
              href=''
              className='popup__close'
              onClick={(e) => {
                console.log('poo');
                props.handleClosePopup(e);
              }}
            >
              &times;
            </a>
            <h2 className='heading-secondary u-margin-bottom-small'>{props.currentPopupContent.title}</h2>
            <h3 className='heading-tertiary u-margin-bottom-small'>
              Arbetet utfördes mellan {props.currentPopupContent.startDate} -{' '}
              {props.currentPopupContent.endDate}
            </h3>
            <p className='popup__text'>{props.currentPopupContent.desc}</p>
            <a href='#' className='btn btn--green'>
              Kontakta oss för mer info
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
