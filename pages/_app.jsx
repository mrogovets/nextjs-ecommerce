import "../styles/globals.css";
import Layout from "../components/Layout";
import { DataPropvider } from "../store/GlobalState";

function MyApp({ Component, pageProps }) {
  return (
    <DataPropvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataPropvider>
  );
}
export default MyApp;
