import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

const Alerts = () => {
  return (
    <>
      <Breadcrumb pageName="Peer review" />

      <div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-9">
        <div className="flex flex-col gap-7.5">
          {/* <!-- Alerts Item --> */}
          <div className="flex w-full border-l-6 bg-opacity-[15%] px-7 py-8 shadow-md dark:bg-[#1B1B24] dark:bg-opacity-30 md:p-9">
            <div className="mr-5 flex h-9 w-9 items-center justify-center rounded-lg bg-opacity-30">
              
    
            </div>
            <div className="w-full">
              <h5 className="mb-3 text-lg font-semibold text-[#ececec]">
                Paper 1
              </h5>
              <p className="leading-relaxed text-[#fefcfb]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when
              </p>
            </div>
          </div>
          {/* <!-- Alerts Item --> */}
          <div className="flex w-full border-l-6 bg-opacity-[15%] px-7 py-8 shadow-md dark:bg-[#1B1B24] dark:bg-opacity-30 md:p-9">
            <div className="mr-5 flex h-9 w-full max-w-[36px] items-center justify-center rounded-lg ">
          
            </div>
            <div className="w-full">
              <h5 className="mb-3 text-lg font-semibold text-black dark:text-[#d9ece5] ">
                Paper 2
              </h5>
              <p className="text-base leading-relaxed ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          {/* <!-- Alerts Item --> */}
          <div className="flex w-full border-l-6  bg-opacity-[15%] px-7 py-8 shadow-md dark:bg-[#1B1B24] dark:bg-opacity-30 md:p-9">
            <div className="mr-5 flex h-9 w-full max-w-[36px] items-center justify-center rounded-lg ">
            </div>
            <div className="w-full">
              <h5 className="mb-3 font-semibold text-[#dcd7d7]">
                   Paper 3              </h5>
              <ul>
                <li className="leading-relaxed text-[#e6e1e1]">
                  Lorem Ipsum is simply dummy text of the printing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alerts;
