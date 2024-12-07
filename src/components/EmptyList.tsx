import React from "react";

interface NoDataProps {
  message?: string; // Optional custom message
}

const EmptyList: React.FC<NoDataProps> = ({
  message = "No data available",
}) => {
  return (
    <div style={styles.container}>
      <div style={styles.icon}>📄</div> {/* Replace with any icon or image */}
      <p style={styles.message}>{message}</p>
    </div>
  );
};

export default EmptyList;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    border: "1px solid #ddd",
    borderRadius: "5px",
    margin: "20px auto",
    maxWidth: "400px",
  },
  icon: {
    fontSize: "40px",
    marginBottom: "10px",
    color: "#aaa",
  },
  message: {
    fontSize: "16px",
    color: "#555",
    textAlign: "center",
  },
};
