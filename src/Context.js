import React, { useContext, useState } from 'react';

const AppContext = React.createContext();
const initialState = {
  name: '',
  title: '',
  email: '',
  phone: '',
  city: '',
  linkedin: '',
  portfolio: '',
  profile: '',
  yearFrom: '',
  yearTo: '',
  university: '',
  subject: '',
  degree: '',
  position: '',
  company: '',
  companyCity: '',
  workDescription: '',
  workingFrom: '',
  workingTo: '',
};

function Context({ children }) {
  const [state, setState] = useState(initialState);
  const [year, setYear] = useState(new Date().getFullYear());

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const resetForms = () => setState(initialState);

  return (
    <AppContext.Provider
      value={{ state, setState, onChangeHandler, year, resetForms }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, Context };
