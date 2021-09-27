import IconAwards from "../components/IconAwards";

const Awards = () => (
    <section
        id="awards"
        className="min-h-screen flex flex-col justify-center space-y-10"
    >
        <h1 className="uppercase text-3xl sm:text-5xl font-bold text-gray-800">
            awards & certifications
        </h1>
        <ul className="space-y-1 sm:px-10">
            {awards.map((award, index) => (
                <li key={index} className="flex items-center space-x-2">
                    <IconAwards />
                    <span className=" font-semibold text-gray-500 w-full">{award}</span>
                </li>
            ))}
        </ul>
    </section>
);

const awards = [
    "IT Networking Administration ",
    "Web Development Scholl",
    "Design Product in PT.PIM",
];

export default Awards;
