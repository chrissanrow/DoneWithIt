import React from 'react';
import { useFormikContext } from 'formik';

import AppTextInput from './AppTextInput';
import { ErrorMessage } from 'formik';

function AppFormField({ name }) {
    return (
        <>
            <AppTextInput
                //autoCapitalize='none'
                //autoCorrect={false}
                //icon='email'
                //keyboardType='email-address'
                onBlur={() => setFieldTouched('name')}
                onChangeText={handleChange('name')}
                //placeholder='Email'
                //textContentType='emailAddress'
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormField;