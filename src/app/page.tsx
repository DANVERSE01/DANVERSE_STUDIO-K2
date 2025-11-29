import { projects, services } from '@/data';
import Experience from '@/components/canvas/Experience';
import HUD from '@/components/ui/HUD';

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden">
      <Experience projects={projects} services={services} />
      <HUD />
    </main>
  );
}