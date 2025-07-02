import Header from "./components/layout/Header";
import Layout from "./components/layout/Layout"

const App =() => {
  return(
    <Layout>
      <Header title="PiyushSingh" subtitle="Hello from my side"/>
      <main>
        <p>Welcome to my portfolio website!</p>
        <p>Here you can find information about my projects, skills, and experience.</p>
        <p>Feel free to explore and get in touch!</p>
      </main>
    </Layout>
  );
};

export default App;