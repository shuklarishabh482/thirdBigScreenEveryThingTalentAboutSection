
// import { FC } from 'react';
// import { useRouter } from 'next/router';
// import { Header } from './Header';
// import { HeroSection } from './HeroSection';
// const Homepage: FC = () => {
// const router = useRouter();
//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
//       <Header currentPath={router.pathname} />
//       <main className="container mx-auto px-4 py-12">
//         <HeroSection />
//       </main>
//     </div>
//   );
// };
// export default Homepage;

import { FC } from 'react';
import { useRouter } from 'next/router';
import { Header } from './Header';
import { HeroSection } from './HeroSection';
const Homepage: FC = () => {
const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header currentPath={router.pathname} />
      
      <main className="container mx-auto px-4 py-12">
        <HeroSection />
      </main>
    </div>
  );
};
export default Homepage;
