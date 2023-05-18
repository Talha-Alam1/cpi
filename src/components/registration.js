import React from 'react'
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};

    if (!values.fullName) {
        errors.fullName = 'Required';
    } else if (values.fullName.length < 2) {
        errors.fullName = 'Must be 2 characters or more';
    }

    if (!values.jobTitle) {
        errors.jobTitle = 'Required';
    } else if (values.jobTitle.length < 2) {
        errors.jobTitle = 'Must be 2 characters or more';
    }

    if (!values.company) {
        errors.company = 'Required';
    } else if (values.company.length < 2) {
        errors.company = 'Must be 2 characters or more';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.gender) {
        errors.gender = 'Required';
    } else if (values.gender ==="") {
        errors.gender = 'Must slect male or female';
    }
    return errors;
};

function Registration() {

    const formik = useFormik({
        initialValues: {
            fullName: '',
            jobTitle: '',
            company: '',
            email: '',
            gender:'',

        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <>
            <section className="registration" id='registration'>
                <div className="container">
                    <div className="text-center sec-title">
                        <h4>Register now</h4>
                    </div>
                    <div className="form">
                        <form onSubmit={formik.handleSubmit} className="d-flex">
                            <div className="field-wrap half">
                                <label htmlFor="fullName">Full name<span>*</span></label>
                                <input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    placeholder='Full name'
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.fullName}
                                />
                                {formik.touched.fullName && formik.errors.fullName ? (
                                    <span>{formik.errors.fullName}</span>
                                ) : null}
                            </div>
                            <div className="field-wrap half">
                                <label htmlFor="jobTitle">Job title<span>*</span></label>
                                <input
                                    id="jobTitle"
                                    name="jobTitle"
                                    type="text"
                                    placeholder='Job title'
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.jobTitle}
                                />
                                {formik.touched.jobTitle && formik.errors.jobTitle ? (
                                    <span>{formik.errors.jobTitle}</span>
                                ) : null}
                            </div>
                            <div className="field-wrap half">
                                <label htmlFor="company">Company<span>*</span></label>
                                <input
                                    id="company"
                                    name="company"
                                    type="text"
                                    placeholder='Company'
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.company}
                                />
                                {formik.touched.company && formik.errors.company ? (
                                    <span>{formik.errors.company}</span>
                                ) : null}
                            </div>
                            <div className="field-wrap half">
                                <label htmlFor="email">Email Address<span>*</span></label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder='Email Address'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <span>{formik.errors.email}</span>
                                ) : null}
                            </div>
                            <div className="field-wrap half">
                                <label htmlFor="email">Are you?<span>*</span></label>
                                <select
                                    name="gender"
                                    value={formik.values.gender}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={{ display: "block" }}
                                >
                                    <option value="" label="Select a gender">
                                        Select a color{" "}
                                    </option>
                                    <option value="male" label="Male">
                                        {" "}
                                        Male
                                    </option>
                                    <option value="female" label="Female">
                                        Female
                                    </option>
                                </select>
                            </div>
                            <div className="field-wrap half submit">
                                <input className="btn" type="submit" value="Submit"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Registration