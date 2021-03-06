import React from 'react';
import { connect } from "react-redux";
import contactsActions from "../../redux/phoneBook2/phoneBook-actions";
import styles from './ContactFilter.module.css';

const ContactFilter = ({ value, onChange }) => (
          <label
            className={styles.label}>
          <input
                type='text'
                value={value}
                onChange={onChange}
                name='filter'
                className={styles.input}
                placeholder='Enter contact name'
            />
        </label>
);

const mapStateToProps = (state) => ({
  value: state.contacts.filter
})

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactFilter);
