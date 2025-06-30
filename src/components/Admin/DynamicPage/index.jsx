import React, { useState } from 'react'
import { IoMdAddCircle } from "react-icons/io";
import { useLocation } from 'react-router';
import { Table } from 'antd';
import StoreForm from '../Forms/StoreForm';

import { useTranslation } from 'react-i18next';

function DynamicPage({ columns, data, onSubmit }) {
    const { t, i18n } = useTranslation();
    const [filterData, setFilterData] = useState(data);
    const [open, setOpen] = useState(false);
    let location = useLocation()
    let pathname = location.pathname.split('/')[2]
    console.log("filterdata",filterData);
    
    const dataWithKey = filterData?.map((item, index) => ({ ...item, key: item.id || index }));
    const lang = i18n.language;

    const onClose = () => {
        setOpen(false)
    }

    const handleSearch = (value) => {
        if (!value) {
            setFilterData(data);
            return;
        }
        let filteredData = data.filter(item => item.name.toLowerCase().includes(value.toLowerCase().trim()))
        setFilterData(filteredData)
    }
    const handleSort = (value) => {

        let sortedData = []
        switch (value) {
            case "a-z":
                sortedData = [...(data)].sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "z-a":
                sortedData = [...(data)].sort((a, b) => b.name.localeCompare(a.name));
                break;
            default:
                sortedData = data;
                break;
        }
        setFilterData([...sortedData]);

    }


    return (
        <div className='dynamic-page'>
            <h2>{t(pathname)}</h2>

            <div className="dynamic-table">
                <div className="table-head">
                    <h3>{t(pathname)} {t('data')}</h3>
                    {
                        lang === 'az' ? <button onClick={() => setOpen(true)} ><IoMdAddCircle />

                            {t(pathname.slice(0, -1))}  {t('add')}

                        </button> :
                            <button onClick={() => setOpen(true)} ><IoMdAddCircle />

                                {t('add')}  {t(pathname.slice(0, -1))}

                            </button>
                    }

                </div>
                <div className="actions">
                    <input type="text" placeholder={t('search')} onChange={(e) => handleSearch(e.target.value)} />
                    <select onChange={(e) => handleSort(e.target.value)}>
                        <option value="">{t('all')}</option>
                        <option value="a-z">A-Z</option>
                        <option value="z-a">Z-A</option>
                    </select>
                </div>
                <Table style={{ width: "100%" }} columns={columns} dataSource={dataWithKey} />
            </div>
            <StoreForm open={open} onClose={onClose} initialValues={null} onSubmit={onSubmit} />
        </div>
    )
}

export default DynamicPage