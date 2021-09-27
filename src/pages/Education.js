const Education = () => (
    <section id="education" className="min-h-screen flex flex-col justify-center">
        <h1 className="uppercase text-3xl sm:text-5xl font-bold text-gray-800 mb-10">
            education
        </h1>
        <ul className="space-y-6">
            {datas.map((data, index) => (
                <li key={index} className="sm;flex">
                    <div className="sm:w-2/3">
                        <h2 className="uppercase text-xl font-bold text-gray-800">
                            {data.agency}
                        </h2>
                        <h3 className="text-lg uppercase font-semibold text-gray-600 mt-1">
                            {data.status}
                        </h3>
                        <p className="text-gray-700 mt-3">{data.description}</p>
                    </div>
                    <p className="text-yellow-500 text-lg text-right sm:w-1/3 font-semibold">
                        {data.time}
                    </p>
                </li>
            ))}
        </ul>
    </section>
);

const datas = [
    {
        agency: "Malikussaleh University",
        status: "Bachelor Degree",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        time: "August 2018 - Present",
    },
];

export default Education;
