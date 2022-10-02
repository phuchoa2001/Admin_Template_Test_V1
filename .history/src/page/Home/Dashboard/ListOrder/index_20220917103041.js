import React from 'react';

//  Data
import useColumns from '../../../app/useColumns';
import { useApp } from '../../../app/queries/queries';
import { useCustomSearchParams } from '../../../../hooks/useCustomSearchParams';

const pageSize = 4;
function ListOrder(props) {
    const [search, setSearch] = useCustomSearchParams();
    console.log("search" , search);
    const argument = {
        params: {
            ...search,
        },
        options: {
            keepPreviousData: true,
        },
    };
    const { data, isPreviousData, isFetching } = useApp(argument);
    const { columns } = useColumns();


    const handleChange = (query) => {
        setSearch({ ...search, page_size: query.pageSize, page: query.current })
    }
    return (
        <>
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
        </>
    );
}

export default ListOrder;