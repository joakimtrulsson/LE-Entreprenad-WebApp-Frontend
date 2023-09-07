import logoWhite from '../../commons/images/logo-white.png';

function Header() {
  return (
    <header className='header'>
      <div className='header__logo-box'>
        {/* <img asrc={logoWhite} alt='Logo' className='header__logo'></img> */}
      </div>
      <div className='header__text-box'>
        <h1 className='heading-primary'>
          <span className='heading-primary--main'>L.E </span>
          <span className='heading-primary--sub'>Din lokala totalentreprenör</span>
        </h1>
        <a href='#section-projects' className='btn btn--white move-in--bottom'>
          Upptäck våra projekt
        </a>
      </div>
    </header>
  );
}

export default Header;
