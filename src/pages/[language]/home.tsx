import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();
  const { language } = router.query;

  return (
    <div>
      <h1>{`Dynamic Page: ${language || 'default'}`}</h1>
    </div>
  );
};

export default Home;
