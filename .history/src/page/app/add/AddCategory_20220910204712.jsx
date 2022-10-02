import React, { useState } from "react";
import { Pagination, Spin } from "antd";
import  { PlusSquareOutlined } from '@ant-design/icons';
import styled from "styled-components";

import { useCategorys } from "../../Category/queries/queries";

import SelectPageSizeMultiple from "../../../components/form/SelectPageSizeMultiple";

const AppStyles = styled.div`
  .scroll {
    padding: 10px 0px;
  }
  .box {
    padding-bottom: 10px;
  }
  .text_add {
    padding: 0px 10px;
    color: #1890ff;
  }
`;

function AddCategory({ value, onChange, error }) {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [coordinates, setCoordinates] = useState(0);
  const argument = {
    params: {
      page,
      search,
      page_size: 10,
    },
    options: {
      keepPreviousData: true,
    },
  };
  const { data, isLoading, isPreviousData } = useCategorys({
    ...argument,
    options: {
      ...argument.options,
      select: (data) => {
        return data.data;
      },
    },
  });
  console.log("data", data);
  const handleSearch = (text) => {
    setSearch(text);
  };
  const handleScroll = (coordinates) => {
    setCoordinates(coordinates);
  };
  const handlePagination = (page) => {
    setPage(page);
  };
  return (
    <div>
      <AppStyles>
        {!isLoading ? (
          <SelectPageSizeMultiple
            value={value}
            children={data.data}
            boxnotHidden={
              <>
                <div className={`page${coordinates > 50 && " scroll"}`}>
                  <Pagination
                    simple
                    defaultCurrent={data.meta.current_page}
                    onChange={handlePagination}
                    total={data.meta.total}
                  />
                </div>
                <div className="text_add">
                <PlusSquareOutlined />
                  ...Hiện tại thể loại bạn tìm không có trong kho của ban có
                  muốn thêm nó không
                </div>
              </>
            }
            textError={error}
            activeStyle={{}}
            onscroll={handleScroll}
            onSearch={handleSearch}
            isLoading={!(!isLoading && !isPreviousData)}
            width={500}
            sticky={true}
            label="Thể loại"
            onClick={(value) => onChange(value)}
          />
        ) : (
          <Spin />
        )}
      </AppStyles>
    </div>
  );
}

export default AddCategory;
