function Form() {
  return (
    <form action='#' className='form'>
      <div className='form__group'>
        <input type='text' className='form__input' placeholder='Ditt namn' id='name' required />
        <label htmlFor='name' className='form__label'>
          Ditt namn
        </label>
      </div>

      <div className='form__group'>
        <input type='text' className='form__input' placeholder='Ditt telefonnummer' id='name' required />
        <label htmlFor='name' className='form__label'>
          Ditt telefonnummer
        </label>
      </div>

      <div className='form__group'>
        <input type='email' className='form__input' placeholder='Email adress' id='email' required />
        <label htmlFor='email' className='form__label'>
          Email adress
        </label>
      </div>

      <div className='form__group'>
        <input type='message' className='form__input' placeholder='Meddelande' id='message' required />
        <label htmlFor='message' className='form__label'>
          Meddelande
        </label>
      </div>

      <div className='form__group'>
        <button className='btn btn--green'>Skicka ➯</button>
      </div>
    </form>
  );
}

export default Form;
