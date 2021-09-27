const Experiance = () => (
    <section id="experience" className="min-h-screen flex flex-col justify-center">
        <h1 className="uppercase text-3xl sm:text-5xl font-bold text-gray-800 mb-10">
            experience
        </h1>
        <ul className="space-y-6">
            {datas.map((data, index) => (
                <li key={index} className="sm:flex">
                    <div className="sm:w-2/3">
                        <h2 className="uppercase text-xl font-bold text-gray-800">
                            {data.status}
                        </h2>
                        <h3 className="text-lg uppercase font-semibold text-gray-600 mt-1">
                            {data.agency}
                        </h3>
                        <p className="text-gray-500 mt-3">{data.description}</p>
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
        status: "Program Magang Siswa Seluruh Aceh",
        agency: "CV Dunia Data Digital",
        description:
            "Melakukan Magang di salah satu perusahaan di Bandung pada bagian Networking",
        time: "August 2019 - September 2019",
    },
    {
        status: "VSGA DTS Kominfo ",
        agency: "Kominfo",
        description:
            "Program pelatihan untuk tamatan SMK pada tahun 2019 yang dilaksanakan pada Politeknik Negeri Lhokseumawe",
        time: "August 2019 - September 2019",
    },
];

export default Experiance;
