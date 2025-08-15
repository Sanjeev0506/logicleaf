import ServiceCard from '../components/ServiceCard';
import FeatureSection from '../components/FeatureSection';


const services = [
  {
    title: "Website Development",
    description: "Build Your Dream Website Fast, Secure & Scalable",
    img: "https://lh3.googleusercontent.com/gg-dl/AJfQ9KQH_ByWdVmuKRSS_apcsnFiXUUfET_2v-RN1mHs5M3dt4slE1KkLi4S1cjAlxJHeXxx7KTcDFId8krDawyA-OnTxxmHpiDSc1i9SIoukFfWHgXy6tCQqJLnsfyzNnAIVu-_yooH86VlvUnny54Ia0tAZCNCFriMDG53Y8jPsAoEq_wv0Q",
  },
  {
    title: "UX UI Designing",
    description: "Transforming Ideas into Stunning Digital Experiences",
    img: "https://lh3.googleusercontent.com/gg-dl/AJfQ9KTVOimgVyDd4-AAD_-01gWv_0hQ3pvKzXzSqlGbOoqM55H9RN0zG_LA-3WOkx8jxHqkz1hUiHtGOJNebZIKIkIhGyQvopJ5VOhOV5XlJduWidvyMt_UVzcQrNHqwoQ3j9LXdYPe5wVazB1T9JIllfT77xXJZo5UmwkQuEM5FmDdAOa-",
  },
  {
    title: "App Development",
    description: "Build High Performance Android & iOS Apps",
    img: "https://lh3.googleusercontent.com/gg-dl/AJfQ9KR213WePhMGxxmlGsQUJPuKcCd6TJlgYL6NtXYNWupiycSJ12ZVHCq5qYvls-bwCzxO2CZsWeQReBOd2PZ-gjmTj_85hM52M8OKCT60fAREVhfDEy7MfTck3CkV1j5qYuv1Qh57pRkm4yPaP_Ag_fkUpDE1OCOqXCvA0J3T9uYCmeLK5w",
  },
];

export default function Home() {
  return (
    <div>
      <header className="text-center py-16 bg-leaf">
        <h1 className="text-4xl font-bold uppercase text-white">Cultivating Innovation</h1>
        <p className="mt-4 text-xl text-white">Logic-Driven Solutions For A Brighter Future</p>
        <a href="/contact" className="mt-6 px-6 py-2 bg-white text-leaf-dark font-semibold rounded hover:bg-leaf-light inline-block">
          Get In Touch
        </a>
      </header>

      <section className="px-6 py-10">
        <h2 className="text-2xl font-bold text-center mb-6">Featured Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => <ServiceCard key={i} {...s} />)}
        </div>
      </section>
    </div>
    
  );
}
<FeatureSection />

