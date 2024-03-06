
function Footer() {
  return (
    <footer style={styles.footer}>
      <p>Thanks for reading - email us if you have any questions or concerns</p>
      <p> &copy; 2024 All right reserved</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "#ffff",
    padding: "20px",
    left: "0",
    bottom: "0",
    width: "100%",
  },
};


export default Footer