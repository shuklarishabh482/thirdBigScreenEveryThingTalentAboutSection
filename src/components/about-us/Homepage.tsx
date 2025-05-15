
import { FC } from 'react';
import { Header } from './Header';
import { HeroSection } from './HeroSection';
const Homepage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header  />
      <main className="container mx-auto px-4 py-12">
        <HeroSection />
      </main>
    </div>
  );
};
export default Homepage;
