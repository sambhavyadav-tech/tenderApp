import Image from "next/image";
import styles from "./page.module.css";
import InstallBootstrap from '../components/InstallBootstrap'
import LoginForm from '../components/LoginForm';
import Layout from "../components/layout/Layout";

export default function Home() {
  const [role, setRole] = useState(null);

  const handleLogin = (role) => {
    setRole(role);
  };

  return (

    <main className={styles.main}>
      <InstallBootstrap />
      <Layout title="Login">
        {role ? (
          <p>You are already logged in as {role}.</p>
        ) : (
          <>
            <h1>Login</h1>
            <LoginForm onLogin={handleLogin} />
          </>
        )}
      </Layout>
    </main>
  );
}
