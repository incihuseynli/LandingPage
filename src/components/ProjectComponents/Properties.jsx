import PropertiesCard from "./PropertiesCard";
import SectionHead from "../HeaderComponents/SectionHead";
import { useEffect, useState } from "react";
import Axios from "axios";
const Properties = () => {
  const URL =
    "https://my-json-server.typicode.com/dbForProjects/ProjectsDataAz/projects?_limit=6";

  const [projects, setProjects] = useState([]);
  useEffect(() => {
    Axios.get(URL).then(({ data }) => {
      setProjects(data);
    });
  }, []);
  return (
    <section className="pt-32 pb-16 px-4 md:px-8 lg:px-16 flex flex-col  gap-16">
      <SectionHead
        sectName="Əmlaklarımız"
        title="Arzuladığın əmlakı bizimlə əldə et"
      />
      <div className="flex flex-col items-start">
        <div
          className="
             grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
            place-items-center justify-between gap-20"
        >
          {projects.map((projects) => {
            return <PropertiesCard key={projects.id} projects={projects} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Properties;
