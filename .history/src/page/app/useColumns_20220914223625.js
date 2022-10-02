

function useColumns() {
    const columns = [
        {
            title: 'Tên',
            dataIndex: 'name',
            align: 'center', 
            render: (_, values, index) => (
                <div data-label="Name">{values.name}</div>
            )
        },
        {
            title: 'Đường dẫn',
            dataIndex: 'url',
            align: 'center' ,
            render: (_, values, index) => (
                <div data-label="Url">{values.url}</div>
            )
        },
        {
            title: 'Github',
            dataIndex: 'github',
            align: 'center'
        },
    ];
    return { columns }
}

export default useColumns