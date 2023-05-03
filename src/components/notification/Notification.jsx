import React from 'react';
import css from './notification.module.css';
export const Notification = ({ message = 'There is no feedback' }) => {
  return <h2 className={css.notificationTitle}>{message}</h2>;
};
