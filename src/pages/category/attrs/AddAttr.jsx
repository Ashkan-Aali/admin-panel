import React from 'react';
import { initialValues, onSubmit, validationSchema } from './attrCore';
import SpinnerLoad from '../../../components/SpinnerLoad';
import { FastField, Form, Formik } from 'formik';
import FormikControl from '../../../components/form/FormikControl';

const AddAttr = ({reInitValues,location ,setData ,attrToEdit ,setAttrToEdit }) => {
    return (
        <Formik
            initialValues={reInitValues || initialValues}
            onSubmit={(values, actions) =>
              onSubmit(
                values,
                actions,
                location.state.categoryData.id,
                setData,
                attrToEdit,
                setAttrToEdit
              )
            }
            validationSchema={validationSchema}
            enableReinitialize
          >
            <Form>
              <div
                className={`row my-3 ${
                  attrToEdit ? "alert-danger danger_shadow" : ""
                } justify-content-center align-items-center is_inline`}
              >
                <FormikControl
                  className="col-12 col-md-6 col-lg-4 my-1"
                  placeholder="عنوان ویژگی جدید"
                  control="input"
                  type="text"
                  name="title"
                  label="عنوان"
                />
                <FormikControl
                  className="col-12 col-md-6 col-lg-4 my-1"
                  placeholder="واحد ویژگی جدید"
                  control="input"
                  type="text"
                  name="unit"
                  label="واحد"
                />
                <div className="col-8 col-lg-2 my-1">
                  <FormikControl
                    control="switch"
                    name="in_filter"
                    label="نمایش در فیلتر"
                  />
                </div>
                <div className="col-4 col-lg-2 d-flex justify-content-center align-items-start my-1">
                  <FastField>
                    {({ form }) => {
                      return (
                        <button type="submit" disabled={form.isSubmitting}>
                          <i
                            className="fas fa-check text-light bg-success rounded-circle p-2 mx-1 hoverable_text hoverable pointer has_tooltip hoverable_text"
                            title="ثبت ویژگی"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                          ></i>
                          {form.isSubmitting ? (
                            <SpinnerLoad
                              colorClass={"text-white"}
                              isSmall={true}
                              inline={true}
                            />
                          ) : null}
                        </button>
                      );
                    }}
                  </FastField>
                  {attrToEdit ? (
                    <button
                      className="byn btn-sm btn-secondary me-2"
                      onClick={() => setAttrToEdit(null)}
                    >
                      انصراف
                    </button>
                  ) : null}
                </div>
              </div>
            </Form>
          </Formik>
    );
};

export default AddAttr;