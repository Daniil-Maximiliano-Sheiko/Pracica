import React from "react";
import Alert from 'react-s-alert';

export const pushs = {
    push: [
        { id: 1, type: "SUCCESS", title: "SUCCESS", content: "Выполнено!"},
        { id: 2, type: "WARNING", title: "WARNING", content: "Предупреждение!"},
        { id: 3, type: "FAIL", title: "FAIL", content: "ОШИБКА!"}

    ]
};

 export const handleWarning = (e) => {
    e.preventDefault();
    Alert.warning(`${pushs.push[1].content}`, {
      position: 'top-right',
      effect: 'genie'
    });
  }

 export const handleError = (e) => {
    e.preventDefault();
    Alert.error(`${pushs.push[2].content}`, {
      position: 'top-right',
      effect: 'flip'
    });
  }

 export const handleSuccess = (e) => {
    e.preventDefault();
    Alert.success(`${pushs.push[0].content}`, {
      position: 'top-right',
      effect: 'scale'
    });
  }

export const Pushss = React.createContext( pushs );