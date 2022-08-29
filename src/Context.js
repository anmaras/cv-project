import React, { useContext, useState } from 'react';
import uuid from 'react-uuid';

const AppContext = React.createContext();

const personalData = {
  name: '',
  title: '',
  email: '',
  phone: '',
  city: '',
  linkedin: '',
  portfolio: '',
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
  },
];
const expFormListInitialValue = [
  {
    type: 'text',
    name: [
      'position',
      'company',
      'companyCity',
      'workDescription',
      'workingFrom',
      'workingTo',
    ],
    position: '',
    company: '',
    companyCity: '',
    workDescription: '',
    workingFrom: '',
    workingTo: '',
    id: uuid(),
  },
];

function Context({ children }) {
  const [personalInfo, setPersonalInfo] = useState(personalData);
  const [educationFormList, setEducationFormList] = useState(
    eduFormListInitialValue
  );
  const [workXpFormList, setWorkXpFormList] = useState(expFormListInitialValue);

  const personalInfoOnChangeHandler = (e) => {
    const { name, value } = e.target;

    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    });
  };

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

  const onChangeHandler = (e, id) => {
    const { value, name } = e.target;

    setEducationFormList(
      educationFormList.map((item) => {
        if (item.id === id) {
          return { ...item, [name]: value };
        } else {
          return { ...item };
        }
      })
    );
    setWorkXpFormList(
      workXpFormList.map((item) => {
        if (item.id === id) {
          return { ...item, [name]: value };
        } else {
          return { ...item };
        }
      })
    );
  };

  const removeItemFromLists = (e, id) => {
    e.preventDefault();
    const newEducFormList = educationFormList.filter((form) => form.id !== id);
    const newExpFormList = workXpFormList.filter((form) => form.id !== id);
    setEducationFormList(newEducFormList);
    setWorkXpFormList(newExpFormList);
  };

  const resetForms = () => {
    setPersonalInfo(personalData);
    setEducationFormList(eduFormListInitialValue);
    setWorkXpFormList(expFormListInitialValue);
  };

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
        resetForms,
        addToWorkXpList,
        workXpFormList,
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
