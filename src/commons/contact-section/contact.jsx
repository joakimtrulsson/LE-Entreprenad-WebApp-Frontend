import Form from '../form/form';

function Contact() {
  return (
    <section className='section-contact' id='section-contact'>
      <div className='row'>
        <div className='contact'>
          <div className='contact__form'>
            <div className='u-margin-bottom-medium'>
              <h2 className='heading-secondary'>Kontakta oss nu</h2>
            </div>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
