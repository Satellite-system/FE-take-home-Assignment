import React, { CSSProperties, useEffect, useState } from "react";
import TableRenderer from "./components/TableRenderer";
import axios from "axios";
import Line from "./components/Line";
import spinner from "./assets/spinner.gif";
import EmptyList from "./components/EmptyList";

interface DataItem {
  id: number;
  title: string;
  name: string;
  [key: string]: any;
}

const App: React.FC = () => {
  const [selectedApi, setSelectedApi] = useState<string>("");
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(false);

  {
    /* 
        
        Posts:
        https://jsonplaceholder.typicode.com/posts
        Columns to display: ID, Title

        Comments:
        https://jsonplaceholder.typicode.com/comments
        Columns to display: ID, Name
        
    */
  }

  const apis = [
    { label: "Posts", value: "https://jsonplaceholder.typicode.com/posts" },
    {
      label: "Comments",
      value: "https://jsonplaceholder.typicode.com/comments",
    },
  ];

  useEffect(() => {
    if (selectedApi) {
      fetchData(selectedApi);
    }
  }, [selectedApi]);

  const fetchData = async (apiUrl: string) => {
    setLoading(true);
    try {
      const response = await axios.get(apiUrl);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Something went Wrong!!!");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    const csvContent =
      selectedApi === apis[0].value
        ? "data:text/csv;charset=utf-8," +
          ["ID,Title", ...data.map((item) => `${item.id},${item.title}`)].join(
            "\n"
          )
        : "data:text/csv;charset=utf-8," +
          ["ID,Name", ...data.map((item) => `${item.id},${item.name}`)].join(
            "\n"
          );
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute(
      "download",
      selectedApi === apis[0].value ? "Posts.csv" : "Comments.csv"
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      style={{
        backgroundColor: "#FAFAFA",
        padding: "0px 0px",
        margin: "0px 0px",
      }}
    >
      {/* Title */}
      <div style={{ backgroundColor: "#ffffff", padding: "1px 20px" }}>
        <h1 style={styles.title}>Dynamic Content Manager</h1>
        {/* line */}
        <Line bgColor="#DFDFDF" />
      </div>

      {/* DropDown Title */}
      <div style={styles.container}>
        <p style={styles.subTitle}>Fetch Content</p>
      </div>
      {/* Dropdown for API selection */}
      <div
        style={{
          ...styles.container,
          width: "20%",
          borderRadius: "8px",
          border: "1px solid #EAECF0",
        }}
      >
        <select
          value={selectedApi}
          onChange={(e) => setSelectedApi(e.target.value)}
          style={styles.dropdown}
        >
          <option value="" disabled>
            Select content type
          </option>
          {apis.map((api) => (
            <option key={api.value} value={api.value}>
              {api.label}
            </option>
          ))}
        </select>
      </div>
      {loading ? (
        <img src={spinner} alt="Loading.." style={styles.loader} />
      ) : data.length === 0 ? (
        <EmptyList message="Oops! There's nothing to show." />
      ) : (
        <div style={styles.noSpace}>
          {/* Table */}
          <div
            style={{
              ...styles.container,
              borderRadius: "8px",
              border: "1px solid #EAECF0",
              marginTop: "15px",
            }}
          >
            <TableRenderer
              data={data}
              optionSelected={selectedApi === apis[0].value ? 0 : 1}
            />
          </div>

          {/* Download Button */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <button onClick={handleDownload} style={styles.downloadBtn}>
              Download CSV
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

//  Styles
const styles: { [key: string]: CSSProperties } = {
  container: {
    margin: "5px 20px",
    backgroundColor: "#ffffff",
    padding: "10px 20px",
  },
  title: {
    color: "black",
    fontFamily: "Montserrat",
    fontSize: "32px",
    fontWeight: "500",
    lineHeight: "39.01px",
    textAlign: "left",
    marginLeft: "20px",
  },
  subTitle: {
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "25.92px",
    textAlign: "start",
    color: "#344054",
    margin: "0px",
  },
  dropdown: {
    marginBottom: "20px",
    fontFamily: "Montserrat",
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "19.5px",
    textAlign: "left",
    padding: "3px",
    width: "185px",
    color: "#525F71",
  },
  downloadBtn: {
    fontFamily: "Montserrat",
    fontSize: "20px",
    fontWeight: "600",
    lineHeight: "24.38px",
    textAlign: "left",
    backgroundColor: "#D1CFFF",
    borderRadius: "8px",
    border: "none",
    padding: "14px 36px",
  },
  loader: {
    height: "20rem",
    width: "20rem",
  },
  noSpace: {
    padding: 0,
    margin: 0,
  },
};
