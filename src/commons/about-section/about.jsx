import about1 from '../../commons/images/about-1.png';
import about1Small from '../../commons/images/about-1-small.png';
import about2 from '../../commons/images/about-2.png';
import about2Small from '../../commons/images/about-2-small.png';
import about3 from '../../commons/images/about-3.png';
import about3Small from '../../commons/images/about-3-small.png';

function About() {
  return (
    <section className='section-about' id='section-about'>
      <div className='u-center-text u-margin-bottom-big'>
        <h2 className='heading-secondary'>Entreprenad & Byggservice</h2>
      </div>

      <div className='row'>
        <div className='col-1-of-2'>
          <h3 className='heading-tertiary u-margin-bottom-small'>Om oss</h3>
          <p className='paragraph'>
            Utomordentlig service och kvalité är ledorden som driver vår organisation framåt. Vi besitter
            mångårig erfarenhet och expertis inom samtliga tjänsteområden vi erbjuder. Tillsammans med kunden
            sätter vi upp realistiska tidsramar för färdigställt arbete och handplockar ett dedikerat team för
            bästa möjliga resultat för projektet. Genom våra samarbeten med lokala samarbetspartners inom
            BYGG, VVS och EL kan vi erbjuda totalentreprenad på våra projekt.
          </p>
          <h3 className='heading-tertiary u-margin-bottom-small'>Är du vår nya kollega?</h3>
          <p className='paragraph'>
            Är du Anläggare eller Maskinist med det där lilla extra, då är det kanske dig vi söker. Nu är vi
            på jakt efter en ny kollega som vill vara med på en spännande resa, företaget växer och vi tar oss
            an nya utmaningar och med de behöver vi bli fler i gänget. Erfarenhet inom branschen , självgående
            och ser inga problem utan bara lösningar. Tveka inte , hör av dig till oss på telefon eller mail!
          </p>
          <a href='#section-contact' className='btn-text'>
            Kontakta Oss ➯
          </a>
        </div>
        <div className='col-1-of-2'>
          <div className='composition'>
            <img
              srcSet={`${about1Small} 300w, ${about1} 1000w`}
              sizes='(max-width: 56.25em) 20vw, (max-width: 600px) 30vw, 300px'
              alt='Nature 1'
              className='composition__photo composition__photo--p1'
              src={about1}
            />

            <img
              srcSet={`${about2Small} 300w, ${about2} 1000w`}
              sizes='(max-width: 56.25em) 20vw, (max-width: 600px) 30vw, 300px'
              alt='Nature 2'
              className='composition__photo composition__photo--p2'
              src={about2}
            />

            <img
              srcSet={`${about3Small} 300w, ${about3} 1000w`}
              sizes='(max-width: 56.25em) 20vw, (max-width: 600px) 30vw, 300px'
              alt='Nature 3'
              className='composition__photo composition__photo--p3'
              src={about3}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
