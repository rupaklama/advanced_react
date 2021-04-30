import React, { useState, useRef, useEffect } from 'react';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useInterval } from './useInterval';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridColumnGap: '10px',
    gridRowGap: '15px',
    gridTemplateColumns: '2fr 2fr 2fr',
    margin: '30px',
  },
});

const getFieldsElements = _fields => {
  return _fields.map((field, i) => (
    <TextField key={i} id={field} label={field} variant='outlined' color='secondary' />
  ));
};

const DynamicForm = ({ labels, isExtendedForm }) => {
  const [fields, setFields] = useState(labels);
  const [fieldsElements, setFieldsElements] = useState(getFieldsElements(labels));
  const [key, setKey] = useState('');

  const containerRef = useRef(null);

  useEffect(() => {
    const root = document.getElementById('root');
    root.addEventListener('keyup', e => {
      setKey(e.code);
    });

    return () => {
      const root = document.getElementById('root');
      root.removeEventListener('keyup');
      console.log('unmounted');
    };
  }, []);

  //   useInterval(() => {
  //     console.log('custom hook');
  //     setFields([...fields, 'New Field']);
  //   }, 3000);

  useEffect(() => {
    if (isExtendedForm || fields.length < 3) {
      setFieldsElements(getFieldsElements(fields));
    } else {
      setFieldsElements(getFieldsElements(fields.slice(0, 3)));
    }
  }, [isExtendedForm, fields]);

  const classes = useStyles();

  const handleAddNewField = e => {
    e.preventDefault();
    setFields([...fields, 'New Field']);
  };

  return (
    <>
      <div className={classes.container} ref={containerRef}>
        {fieldsElements}

        <div>{key}</div>
      </div>

      <Fab color='secondary' aria-label='add' onClick={handleAddNewField}>
        <AddIcon />
      </Fab>
    </>
  );
};

DynamicForm.propTypes = {
  labels: PropTypes.array,
};

export default DynamicForm;
