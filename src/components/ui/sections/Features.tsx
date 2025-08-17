import React from 'react'


const countries = [
  { name: "Comoros", flag: "🇰🇲" },
  { name: "Costa Rica", flag: "🇨🇷" },
  { name: "Croatia", flag: "🇭🇷" },
  { name: "Cambodia", flag: "🇰🇭" },
  { name: "Cameroon", flag: "🇨🇲" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Cape Verde", flag: "🇨🇻" },
  { name: "Chile", flag: "🇨🇱" },
  { name: "Colombia", flag: "🇨🇴", disabled: true },
];


const Features = () => {


  return (
 <div className="flex flex-col lg:flex-row rounded-[24px] overflow-hidden h-[800px] mt-44 mb-44 font-sans bg-white lg:mx-20 ">
      {/* Left side */}
      <div className="flex-1 px-16 py-10 flex flex-col justify-center text-black lg:-mt-60">
        <h1 className="font-extrabold text-[36px] lg:text-[60px] leading-tight m-0">
          Your transfers
          <br />
          just got global.
        </h1>
        <strong className="mt-4 text-[16px]">Enter multi-currency accounts</strong>
        <p className="mt-2 text-[14px] lg:w-[400px] lg:text-[20px] text-gray-400">
          Seamlessly transfer funds to over 60 countries, with support for both fiat and digital
          currencies.
        </p>
      </div>

      {/* Right side */}
      <div
        className="flex-1 relative flex flex-col justify-between p-8 text-white font-semibold text-sm rounded-tr-[24px] rounded-br-[24px] w-[400px]"
        style={{
          backgroundImage:
            'url("https://framerusercontent.com/images/szMdJ1k7ngrAgHVj7MLZmBF0TU.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
  <ul className="flex flex-col gap-3 m-0 p-0 list-none drop-shadow-lg overflow-hidden lg:h-[700px]">
  {countries.map(({ name, flag, disabled }, i) => (
    <li
      key={i}
      className={`flex items-center gap-2 cursor-pointer 
        animate-[slideDown_2s_linear_infinite] 
        ${disabled ? 'opacity-30 cursor-default' : ''}
      `}
      style={{ animationDelay: `${i * 0.5}s` }}
    >
      <span
        role="img"
        aria-label={`${name} flag`}
        className="lg:text-[50px] text-[20px] leading-none"
      >
        {flag}
      </span>
      <span>{name}</span>
    </li>
  ))}
</ul>



        <div className="relative lg:right-0 right-8 lg:self-end text-right font-medium text-[80px] lg:text-[250px] leading-none drop-shadow-lg">
          60
          <span className=" text-[30px] lg:text-[68px] ml-1">+</span>
          <div className=" text-[12px] lg:text-[22px] font-normal lg:mt-[-1rem]">Available Supported Countries</div>
        </div>
      </div>
    </div>
  );
};

export default Features