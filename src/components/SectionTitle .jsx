
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div>
            <h2 className="uppercase text-center text-3xl mb-5 md:mb-10 md:mt-10 font-semibold"><span className="text-[#2E7FE9]">{heading}</span> <span className="">{subHeading}</span></h2>
        </div>
    );
};

export default SectionTitle ;