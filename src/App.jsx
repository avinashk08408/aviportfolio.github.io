import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section
          id="home"
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "3rem",
            fontWeight: "700",
          }}
        >
          Home
        </section>

        <section id="about" style={{ height: "100vh" }}></section>

        <section id="skills" style={{ height: "100vh" }}></section>

        <section id="projects" style={{ height: "100vh" }}></section>

        <section id="experience" style={{ height: "100vh" }}></section>

        <section id="contact" style={{ height: "100vh" }}></section>
      </main>
    </>
  );
}

export default App;
