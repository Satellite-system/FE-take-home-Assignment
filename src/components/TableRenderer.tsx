import React, { CSSProperties, useState } from "react";
import nextIcon from "../assets/next.svg";
import prevIcon from "../assets/prev.svg";

interface DataItem {
  id: number;
  title: string;
  name: string;
  [key: string]: any;
}

interface TableRendererProps {
  data: DataItem[];
  optionSelected: number;
}

const TableRenderer: React.FC<TableRendererProps> = ({
  data,
  optionSelected,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

  const getPaginationRange = () => {
    const maxRange = Math.min(currentPage + 2, totalPages);
    const range = [];
    for (let i = currentPage; i <= maxRange; i++) {
      range.push(i);
    }
    if (maxRange < totalPages) {
      range.push("...");
      range.push(totalPages);
    }
    return range;
  };

  const paginationRange = getPaginationRange();

  const goToPage = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div style={styles.container}>
      {/* Table Title */}
      <h1 style={styles.title}>Displaying Content</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={{ ...styles.th, width: "25%", textAlign: "center" }}>
              ID
            </th>
            <th style={styles.th}>{optionSelected === 0 ? "Title" : "Name"}</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <tr
              key={item.id}
              style={index % 2 === 0 ? styles.rowEven : styles.rowOdd}
            >
              <td style={{ ...styles.td, textAlign: "center" }}>{item.id}</td>
              <td style={styles.td}>
                {optionSelected === 0 ? item.title : item.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div style={styles.pagination}>
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          style={currentPage === 1 ? styles.disabledButton : styles.button}
        >
          <img src={prevIcon} alt="Previous" />
        </button>
        {paginationRange.map((page, index) =>
          typeof page === "number" ? (
            <button
              key={index}
              onClick={() => goToPage(page)}
              style={
                currentPage === page
                  ? { ...styles.button, ...styles.activeButton }
                  : styles.button
              }
            >
              {page}
            </button>
          ) : (
            <span key={index} style={styles.ellipsis}>
              ...
            </span>
          )
        )}
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={
            currentPage === totalPages ? styles.disabledButton : styles.button
          }
        >
          <img src={nextIcon} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default TableRenderer;

// Styles using CSSProperties
const styles: { [key: string]: CSSProperties } = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "0 20px",
    margin: "0 auto",
  },
  title: {
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "25.92px",
    textAlign: "start",
    color: "#344054",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  th: {
    fontFamily: "Montserrat",
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "19.5px",
    textAlign: "left",
    padding: "10px",
    borderTop: "1.42px solid #EAECF0",
    borderRadius: "2px 2px 0px 0px",
    color: "#525F71",
  },
  td: {
    padding: "10px",
    borderTop: "1.42px solid #EAECF0",
    textAlign: "left",
    fontFamily: "Montserrat",
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "14.63px",
  },
  rowEven: {
    backgroundColor: "#F9FAFB",
  },
  rowOdd: {
    backgroundColor: "#ffffff",
  },
  pagination: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "0px",
  },
  button: {
    padding: "8px 15px",
    border: "none",
    backgroundColor: "#fff",
    color: "#000000",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
    fontFamily: "Montserrat",
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "14.63px",
    textAlign: "left",
  },
  activeButton: {
    backgroundColor: "#A9ACAE",
    color: "#fff",
  },
  disabledButton: {
    padding: "8px 15px",
    border: "none",
    backgroundColor: "#f9f9f9",
    color: "#ccc",
    cursor: "not-allowed",
    fontSize: "14px",
  },
  ellipsis: {
    fontSize: "14px",
    color: "#555",
  },
};
