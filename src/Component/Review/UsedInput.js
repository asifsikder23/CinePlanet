export const Select = ({ label, options, onChange }) => {
  return (
    <>
      <label className="text-gray-500 font-semibold">{label}</label>
      <select
        className="w-full mt-2 p-6 py-4 text-white bg-black border border-gray-700 rounded"
        onChange={onChange}
      >
        {
            options.map((o, i)=>(
               <option key={i} value={o.value}>
                {o.title}
               </option> 
            ))
        }
      </select>
    </>
  );
};
