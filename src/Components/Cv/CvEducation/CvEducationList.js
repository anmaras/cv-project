import CvEducationItem from './CvEducationItem';
import style from './CvEducation.module.css';
import { useGlobalContext } from '../../../Context';

function CvEducationList() {
  const { educationFormList } = useGlobalContext();

  return (
    <section className={style['education-section']}>
      <h4>Education</h4>
      <div className={style['education-list-wrapper']}>
        {educationFormList.map((item) => {
          return <CvEducationItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}

export default CvEducationList;
