import React, { useState } from 'react'
import { Drawer } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
function StoreForm({ open, onClose, initialValues, onSubmit }) {
const {t} = useTranslation()
    const formik = useFormik({
       
        initialValues: initialValues || {
            name: '',
            location: '',
            manager: '',
            phone: '',
            status: '',
        },
         enableReinitialize: true,
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Required'),
            location: Yup.string()
                .required('Required'),
            manager: Yup.string().required('Required'),
            phone: Yup.string()
                .required('Required'),
            status: Yup.string()
                .required('Required'),

        }),
        onSubmit,
    });
    return (
        <div >
            <Drawer
                title={`Store Form`}
                placement="right"
                size={"378px"}
                onClose={onClose}
                open={open}
                className='store-form'
            >
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="name">{t('name')}</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div>{formik.errors.name}</div>
                    ) : null}

                    <label htmlFor="manager">{t('manager')}</label>
                    <input
                        id="manager"
                        name="manager"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.manager}
                    />
                    {formik.touched.manager && formik.errors.manager ? (
                        <div>{formik.errors.manager}</div>
                    ) : null}

                    <label htmlFor="location">{t('location')}</label>
                    <input
                        id="location"
                        name="location"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.location}
                    />
                    {formik.touched.location && formik.errors.location ? (
                        <div>{formik.errors.location}</div>
                    ) : null}


                    <label htmlFor="phone">{t('phone')}</label>
                    <input
                        id="phone"
                        name="phone"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                        <div>{formik.errors.phone}</div>
                    ) : null}

                    <label htmlFor="status">{t('status')}</label>
                    <select
                        id="status"
                        name="status"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.status}
                    >
                        <option value="" label={t('selectStatus')} />
                        <option value='open' label={t('open')} />
                        <option value='close' label={t('close')} />
                    </select>
                    {formik.touched.status && formik.errors.status ? (
                        <div>{formik.errors.status}</div>
                    ) : null}

                    <button type="submit">{t('submit')}</button>
                </form>
            </Drawer>
        </div>
    )
}

export default StoreForm