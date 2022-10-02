import React from 'react';
import { useDispatch } from 'react-redux';
import { Spin } from 'antd';
import { useHistory } from 'react-router-dom';

import TableData from '../../components/TableData';
import { open } from '../../redux/useModal';
import useColumns from './useColumns';
import { useCustomSearchParams } from '../../hooks/useCustomSearchParams';
import { useImages } from './queries/queries';
import WrapperMaindash from '../../components/WrapperMaindash';
import { CREATE } from '../../routes/contant'


function Image(props) {
    const dispatch = useDispatch();
    const [search, setSearch] = useCustomSearchParams();
    const history = useHistory();
    const argument = {
        params: search,
        options: {
            keepPreviousData: true,
        },
    };
    const { data, isPreviousData, isFetching } = useImages(argument);
    const { columns } = useColumns();

    const handleChange = (query) => {
        setSearch({ ...search, page_size: query.pageSize, page: query.current })
    }
    const handleAdd = () => {
        history.push(`/images${CREATE}`)
    }
    const handleEdit = (selectedRowKeys) => {
        alert("Phần này không có Edit")
    }
    const handleDelete = (selectedRowKeys) => {
        dispatch(open({
            type: "Delete order",
            data: selectedRowKeys
        }));
    }
    return (
        <WrapperMaindash title={"Danh Sách hình ảnh"}>
            {!isPreviousData && !isFetching ?
                < TableData
                    rowKey="_id"
                    columns={columns}
                    onAdd={handleAdd}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    dataSource={data.data.data}
                    loading={isPreviousData && isFetching}
                    pagination={{
                        current: search.page,
                        position: ['bottomCenter'],
                        pageSize: search.page_size,
                        total: data.data.meta.total
                    }}
                    onChange={handleChange}
                /> : <Spin />
            }
        </WrapperMaindash>
    );
}

export default Image;