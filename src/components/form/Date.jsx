import { ErrorMessage, FastField } from 'formik';
import jMoment from 'jalali-moment';
import React, { useEffect, useState, useRef } from 'react';
import FormikError from './FormikError';

const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
    { id: 1, value: "فروردین" },
    { id: 2, value: "اردیبهشت" },
    { id: 3, value: "خرداد" },
    { id: 4, value: "تیر" },
    { id: 5, value: "مرداد" },
    { id: 6, value: "شهریور" },
    { id: 7, value: "مهر" },
    { id: 8, value: "آبان" },
    { id: 9, value: "آذر" },
    { id: 10, value: "دی" },
    { id: 11, value: "بهمن" },
    { id: 12, value: "اسفند" },
];

const DatePicker = ({ formik, name, label, yearsLimit, initialDate, className, placeholder }) => {
    const [day, setDay] = useState(1);
    const [month, setMonth] = useState(1);
    const [year, setYear] = useState(jMoment().jYear());
    const [showConfig, setShowConfig] = useState(false);
    const containerRef = useRef(null);

    // محاسبه years
    const years = React.useMemo(() => {
        const currentYear = jMoment().jYear();
        const startYear = currentYear - (yearsLimit?.from || 100);
        const endYear = currentYear + (yearsLimit?.to || 0);
        return Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);
    }, [yearsLimit]);

    useEffect(() => {
        if (initialDate) {
            const now = jMoment(initialDate);
            if (now.isValid()) {
                setDay(now.jDate());
                setMonth(now.jMonth() + 1);
                setYear(now.jYear());
            }
        }
    }, [initialDate]);

    // بستن datepicker با کلیک خارج
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setShowConfig(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleShowDateConfig = (e) => {
        e.stopPropagation();
        setShowConfig(prev => !prev);
    };

    const handleSetInputDate = (e) => {
        e.stopPropagation();
        const dateString = `${day} / ${month} / ${year}`;
        formik.setFieldValue(name, dateString);
        setShowConfig(false);
    };

    const handleCancel = (e) => {
        e.stopPropagation();
        setShowConfig(false);
    };

    return (
        <div 
            className={`validate-input form_date_picker position-relative ${className}`} 
            ref={containerRef}
        >
            <div className="input-group mb-3 dir_ltr pointer" onClick={handleShowDateConfig}>
                <FastField 
                    type="text" 
                    name={name} 
                    className="form-control pointer" 
                    placeholder={placeholder || 'جهت انتخاب تاریخ کلیک کنید'} 
                    readOnly 
                />
                {label && (
                    <span className="input-group-text w_6rem justify-content-center"> 
                        {label} 
                    </span>
                )}
            </div>

            {showConfig && (
                <div className='date-picker-container position-absolute top-100 start-0 end-0 bg-white border rounded shadow-lg p-2 mt-1 z-3'>
                    <div className='row w-100 m-0 g-2'>
                        <div className='col-4'>
                            <label className='form-label small text-muted mb-1'>روز</label>
                            <select 
                                className='form-select form-select-sm' 
                                value={day} 
                                onChange={(e) => setDay(parseInt(e.target.value))}
                            >
                                {days.map(d => (
                                    <option key={d} value={d}>{d}</option>
                                ))}
                            </select>
                        </div>
                        <div className='col-4'>
                            <label className='form-label small text-muted mb-1'>ماه</label>
                            <select 
                                className='form-select form-select-sm' 
                                value={month} 
                                onChange={(e) => setMonth(parseInt(e.target.value))}
                            >
                                {months.map(m => (
                                    <option key={m.id} value={m.id}>{m.value}</option>
                                ))}
                            </select>
                        </div>
                        <div className='col-4'>
                            <label className='form-label small text-muted mb-1'>سال</label>
                            <select 
                                className='form-select form-select-sm' 
                                value={year} 
                                onChange={(e) => setYear(parseInt(e.target.value))}
                            >
                                {years.map(y => (
                                    <option key={y} value={y}>{y}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='row w-100 m-0 mt-2 g-2'>
                        <div className='col-6'>
                            <button 
                                className='btn btn-success btn-sm w-100'
                                onClick={handleSetInputDate}
                            >
                                <i className='fa fa-check me-1'></i>
                                تایید
                            </button>
                        </div>
                        <div className='col-6'>
                            <button 
                                className='btn btn-outline-secondary btn-sm w-100'
                                onClick={handleCancel}
                            >
                                <i className='fa fa-times me-1'></i>
                                انصراف
                            </button>
                        </div>
                    </div>
                </div>
            )}
            
            <ErrorMessage name={name} component={FormikError} />
        </div>
    );
}

export default DatePicker;