import { Hero, About, Service, Flow } from "./section";
import Question from "@/components/global/question";

export default function HomeScreen() {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Flow />
      <Question />
    </>
  );
}
