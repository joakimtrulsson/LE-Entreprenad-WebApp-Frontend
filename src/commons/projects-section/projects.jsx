import { useEffect, useState } from 'react';

import { getAllProjects } from '../../apiCalls/api';
import ProjectItem from './project-item/projectItem';
import Popup from '../popup/popup';

function Projects() {
  const [projects, setProjects] = useState([]);

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [currentPopupContent, setCurrentPopupContent] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await getAllProjects();

      if (data.status === 'success') {
        setProjects(data.data.allDocs);
      } else {
      }
    };

    getData();
  }, []);

  const handleShowPopup = (e, popupContent) => {
    e.preventDefault();
    setCurrentPopupContent(popupContent);
    setPopupVisible(true);
  };

  const handleClosePopup = (e) => {
    e.preventDefault();
    setCurrentPopupContent(null);
    setPopupVisible(false);
  };

  const allProjects = projects.map((project) => {
    console.log(projects);
    return (
      <ProjectItem
        key={project._id}
        title={project.title}
        shortDesc={project.shortDesc}
        desc={project.desc}
        imgUrl={project.imgUrl}
        startDate={project.startDate}
        endDate={project.endDate}
        color={project.color}
        handleShowPopup={handleShowPopup}
      />
    );
  });

  return (
    <section className='section-projects' id='section-projects'>
      <div className='u-center-text u-margin-bottom-big'>
        <h2 className='heading-secondary'>Våra projekt</h2>
      </div>

      <div className='grid__container'>{allProjects}</div>
      {/* <div className='row'>{allProjects}</div> */}

      <div className='u-center-text u-margin-top-huge'>
        {/* <a href='#' className='btn btn--green'>
          Discover all projects!
        </a> */}
      </div>
      {isPopupVisible && (
        <div className='popup-container'>
          <Popup handleClosePopup={handleClosePopup} currentPopupContent={currentPopupContent} />
        </div>
      )}
    </section>
  );
}

export default Projects;
