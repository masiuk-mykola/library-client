import PropTypes from "prop-types";
import React from "react";
import { StyledDataGrid } from "@components/shared/Table/styled.js";

const Table = ({ data, columns, loading }) => (
    <div style={{ height: "auto", width: "100%" }}>
      <StyledDataGrid
        rows={data || []}
        columns={columns || []}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10
            }
          }
        }}
        pageSizeOptions={[5]}
        loading={loading}
      />
    </div>
  );

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array,
  loading: PropTypes.bool
};

export default Table;
