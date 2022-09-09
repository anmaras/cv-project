import React, { useContext, useEffect, useState } from 'react';
import { editListState, removeFromLists } from './Utilities';
import uuid from 'react-uuid';

const AppContext = React.createContext();

const personalData = {
  firstName: '',
  lastName: '',
  title: '',
  email: '',
  phone: '',
  city: '',
  profile: '',
};

const eduFormListInitialValue = [
  {
    type: 'text',
    name: ['university', 'degree', 'subject', 'yearFrom', 'yearTo'],
    id: uuid(),
    university: '',
    subject: '',
    degree: '',
    yearFrom: '',
    yearTo: '',
    checkbox: false,
  },
];

const extraJobInfo = {
  id: uuid(),
  info: '',
};

const expFormListInitialValue = [
  {
    checkbox: false,
    type: 'text',
    name: [
      'position',
      'company',
      'companyCity',
      'workDescription',
      'workingFrom',
      'workingTo',
    ],
    jobSpecifics: [extraJobInfo],
    position: '',
    company: '',
    companyCity: '',
    workDescription: '',
    workingFrom: '',
    workingTo: '',
    id: uuid(),
    isSelected: false,
  },
];

const linkListData = {
  socialLink: 'twitter',
  socialLinkUrl: '',
  id: uuid(),
};

const getLocalStorage = () => {
  const personal = localStorage.getItem('personal');
  const social = localStorage.getItem('socialLinks');
  const education = localStorage.getItem('education');
  const work = localStorage.getItem('work');

  return {
    personal: personal ? JSON.parse(personal) : personalData,
    education: education ? JSON.parse(education) : eduFormListInitialValue,
    work: work ? JSON.parse(work) : expFormListInitialValue,
    social: social ? JSON.parse(social) : [linkListData],
  };
};

function Context({ children }) {
  const [personalInfo, setPersonalInfo] = useState(getLocalStorage().personal);
  const [educationFormList, setEducationFormList] = useState(
    getLocalStorage().education
  );
  const [workXpFormList, setWorkXpFormList] = useState(getLocalStorage().work);
  const [isLinksOpen, setIsLinksOpen] = useState(false);
  const [isLinkListMaxed, setIsLinkListMaxed] = useState(false);
  const [linkList, setLinkList] = useState(getLocalStorage().social);
  const [isJobInfoActive, setIsJobInfoActive] = useState(false);

  const getExtraInfoId = (id) => {
    setWorkXpFormList(
      workXpFormList.map((item) => {
        if (item.id === id && !item.isSelected) {
          return {
            ...item,
            isSelected: true,
          };
        } else if (item.id === id && item.isSelected) {
          return {
            ...item,
            isSelected: false,
          };
        } else {
          return { ...item };
        }
      })
    );
  };

  /*---- HEADER LINKS FUNCTIONALITY START ----*/

  const addToLinkListHandler = () => {
    /* Remove id from initial object */
    const { id, ...linksListData } = linkListData;

    const newLinkItem = {
      id: uuid(),
      ...linksListData,
    };
    setLinkList([...linkList, newLinkItem]);
  };

  const deleteFromLinkList = (id) => {
    setLinkList(removeFromLists(linkList, id));
  };

  useEffect(() => {
    if (linkList.length > 3) {
      setIsLinkListMaxed(true);
    } else {
      setIsLinkListMaxed(false);
    }
    if (!linkList.length) {
      setIsLinksOpen(false);
      setLinkList([linkListData]);
    }
  }, [linkList.length]);

  const personalInfoOnChangeHandler = (e) => {
    const { name, value } = e.target;

    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    });
  };

  /*---- HEADER LINKS FUNCTIONALITY END ----*/

  const addToEducationList = () => {
    const newEducationFormItem = {
      ...eduFormListInitialValue[0],
      id: uuid(),
    };

    setEducationFormList([...educationFormList, newEducationFormItem]);
  };

  const addToWorkXpList = () => {
    const newWorkXpItem = {
      ...expFormListInitialValue[0],
      id: uuid(),
    };
    setWorkXpFormList([...workXpFormList, newWorkXpItem]);
  };

  const addToMoreAboutJobInfoList = (id) => {
    const newJobInfoItem = {
      id: uuid(),
      info: '',
    };

    setWorkXpFormList(
      workXpFormList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            jobSpecifics: [...item.jobSpecifics, newJobInfoItem],
          };
        } else {
          return { ...item };
        }
      })
    );
  };

  const jobInfoOnChangeHandler = (e, id, mainId) => {
    const { value } = e.target;
    /* set the state to change the text area onChange
    the id is the textarea id  need mainId from the workXpFormList to work */
    setWorkXpFormList(
      workXpFormList.map((item) => {
        if (item.id === mainId) {
          return {
            ...item,
            jobSpecifics: item.jobSpecifics.map((item) => {
              if (item.id === id) {
                return { ...item, info: value };
              }
              return { ...item };
            }),
          };
        }
        return { ...item };
      })
    );
  };

  const removeJobInfoList = (infoItemId) => {
    setWorkXpFormList(
      workXpFormList.map((item) => {
        return {
          ...item,
          jobSpecifics: item.jobSpecifics.filter(
            (item) => item.id !== infoItemId
          ),
        };
      })
    );
  };

  const onChangeHandler = (e, id) => {
    const { value, name } = e.target;

    setEducationFormList(editListState(educationFormList, id, name, value));
    setLinkList(editListState(linkList, id, name, value));
    setWorkXpFormList(editListState(workXpFormList, id, name, value));
  };

  const removeItemFromLists = (id) => {
    setEducationFormList(removeFromLists(educationFormList, id));
    setWorkXpFormList(removeFromLists(workXpFormList, id));
  };
  // console.log(workXpFormList);

  const resetPersonalForm = () => {
    setPersonalInfo(personalData);
    setLinkList([]);
  };
  const resetEducationForm = () =>
    setEducationFormList(eduFormListInitialValue);

  const resetExperienceForm = () => {
    setWorkXpFormList(expFormListInitialValue);
  };

  useEffect(() => {
    localStorage.setItem('personal', JSON.stringify(personalInfo));
    localStorage.setItem('socialLinks', JSON.stringify(linkList));
    localStorage.setItem('education', JSON.stringify(educationFormList));
    localStorage.setItem('work', JSON.stringify(workXpFormList));
  }, [personalInfo, linkList, educationFormList, workXpFormList]);

  return (
    <AppContext.Provider
      value={{
        addToEducationList,
        personalInfo,
        personalInfoOnChangeHandler,
        educationFormList,
        removeItemFromLists,
        eduFormListInitialValue,
        onChangeHandler,
        addToWorkXpList,
        workXpFormList,
        isLinksOpen,
        isLinkListMaxed,
        linkList,
        addToLinkListHandler,
        deleteFromLinkList,
        setIsLinksOpen,
        isJobInfoActive,
        setIsJobInfoActive,
        addToMoreAboutJobInfoList,
        jobInfoOnChangeHandler,
        removeJobInfoList,
        resetPersonalForm,
        resetEducationForm,
        resetExperienceForm,
        getExtraInfoId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, Context };
