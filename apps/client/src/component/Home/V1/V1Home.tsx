import V1HomeNav from "./V1HomeNav";
import Image from "next/image";
import bgIMG from "./V1bgIMG.png";
import { Klee_One } from "next/font/google";
import { Lightbulb, Play, ClipboardCheck } from "lucide-react";

const kleeOne = Klee_One({
  subsets: ["latin"],
  weight: ["400", "600"],
});

function V1Home() {
    return (
      <div className="relative h-screen overflow-hidden text-white">
        {/* Background */}
        <Image
          src={bgIMG}
          alt="Background"
          fill
          priority
          className="object-cover -z-10"
        />
  
        {/* Navbar */}
        <V1HomeNav />
  
        {/* Main Content Wrapper */}
        <main className="pt-20 h-full flex flex-col">
  
          {/* Hero */}
          <section
            className={`${kleeOne.className}
            flex-[0.5]
            flex flex-col items-center justify-center
            text-center px-4`}
          >
            <h1 className="text-6xl md:text-7xl tracking-widest font-normal">
              Learn. Code. Grow
            </h1>
  
            <p className="mt-4 max-w-xl text-sm md:text-base text-white/80 leading-relaxed">
              Designed to help you learn better, stay on track
              <br />
              and grow with purpose.
            </p>
          </section>
  
          {/* Cards */}
          <section className="flex-[0.5] flex items-start">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-6">
  
              {/* Card 1 */}
              <div className="glass-card">
                <h3 className="text-lg mb-3">Your Learning Progress</h3>
                <p className="text-4xl font-semibold">75%</p>
                <p className="text-sm text-white/70 mt-1">Complete</p>
                <p className="mt-4 text-sm text-white/70">
                  Stay consistent and see your skills grow over time.
                </p>
              </div>
  
              {/* Card 2 */}
              <div className="glass-card">
                <h3 className="text-lg mb-4">Your Learning Path</h3>
  
                <div className="flex items-center gap-4 mb-3">
                  <div className="icon-box">
                    <Play size={16} />
                    <span>Lesson</span>
                  </div>
  
                  <div className="icon-box">
                    <ClipboardCheck size={16} />
                    <span>Task</span>
                  </div>
  
                  <div className="icon-box">
                    <Lightbulb size={16} />
                    <span>Quiz</span>
                  </div>
                </div>
  
                <p className="text-sm text-white/70">
                  Follow a structured path with lessons, tasks and checkpoints.
                </p>
              </div>
  
              {/* Card 3 */}
              <div className="glass-card">
                <h3 className="text-lg mb-3 flex items-center gap-2">
                  Learning Insights <Lightbulb size={16} />
                </h3>
  
                <ul className="space-y-2 text-sm text-white/80">
                  <li>✔ Which topic needs more practice?</li>
                  <li>✔ Where am I stuck?</li>
                  <li>✔ How consistent am I?</li>
                </ul>
  
                <p className="mt-4 text-sm text-white/70">
                  Get clarity from your learning data and improve faster.
                </p>
              </div>
  
            </div>
          </section>
        </main>
      </div>
    );
  }
  

export default V1Home;
