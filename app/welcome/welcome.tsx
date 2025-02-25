import Navbar from "~/components/Navbar";
import { EXPERIENCES } from "~/constants/constants.js";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <Navbar/>

        <div>
          <p className="text-5xl">About me</p>
          <p>{EXPERIENCES[0].year}</p>
          <p>{EXPERIENCES[0].role}</p>
          <p>{EXPERIENCES[0].company}</p>
          <p>{EXPERIENCES[0].description}</p>
          <p>{EXPERIENCES[0].technologies}</p>
        </div>

        <div>
          <p className="text-5xl">Projects</p>
          <p>{EXPERIENCES[1].year}</p>
          <p>{EXPERIENCES[1].role}</p>
          <p>{EXPERIENCES[1].company}</p>
          <p>{EXPERIENCES[1].description}</p>
          <p>{EXPERIENCES[1].technologies}</p>
        </div>
      </div>
    </main>
  );
}

