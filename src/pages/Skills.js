import SkillsIcon from "../components/SkillsIcon";

const Skills = () => (
    <section id="skills" className="min-h-screen flex flex-col justify-center">
        <h1 className="uppercase text-3xl sm:text-5xl font-bold text-gray-800 mb-10">skills</h1>
        <h3 className="uppercase text-xl font-bold text-gray-600 mb-5">
            programming languages
        </h3>
        <ul className="grid grid-cols-2 gap-2">
            {datas.map((data, index) => (
                <li
                    key={index}
                    className="text-xl font-semibold text-gray-500 flex items-center space-x-2"
                >
                    <SkillsIcon />
                    <span>{data}</span>
                </li>
            ))}
        </ul>
    </section>
);

const datas = [
    "HTML",
    "CSS",
    "Java Script",
    "Mysql",
    "Code Igniter",
    "Laravel",
    "React"
];

export default Skills;
