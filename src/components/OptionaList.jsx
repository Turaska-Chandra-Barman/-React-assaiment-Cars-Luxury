import down from '../assets/down.png';

function OptionList({ array, position }) {
  return (
    <div className={`col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-2 flex ${position} h-full`}>
      <select
        className={`text-bold font-Inter w-full border-b xl:border-r xl:border-b-0  py-5  xl:py-2 ${position === 'items-center'?'xl:border-none ':'xl:border-r' }  text-sm font-bold ${!position ? "text-primary ":'text-secondary'} py-2 px-3 appearance-none custom-select`}
        name=""
        id=""
      >
        {array.map((item, i) => {
          return (
            <option  key={i} value={item}>
              {item}
            </option>
          );
        })}
      </select>
      <style jsx ='true'>{`
        .custom-select {
          padding-right: 30px;
          background: url(${down}) no-repeat right 30px center;
          background-size: 12px;
        }
      `}</style>
    </div>
  );
}

export default OptionList;
