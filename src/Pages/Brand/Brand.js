import { useQuery } from '@tanstack/react-query';
import React from 'react';


const Brand = () => {
  const { data: categories = [], refetch } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await fetch('https://jobbox-server-tau.vercel.app/categories')
      const data = res.json();
      return data
    }
  })
  console.log(categories);
  return (
    <div className='category'>
      <div className='chead d_flex'>
        <h1>Brands </h1>
        <h1>Shops </h1>
      </div>
      <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul class="space-y-2">
          {
            categories.map(category =>
              <li key={category._id}>
                <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <img src={category.cateImg} alt="" />
                  <span class="ml-3">{category.brand}</span>
                </a>
              </li>
            )}
        </ul>
        <div className=' box2'>
          <button>View All Brands</button>
        </div>
      </div>

      {/* <div className='category'>
        <div className='chead d_flex'>
          <h1>Brands </h1>
          <h1>Shops </h1>
        </div>
        {categories.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.brand}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>View All Brands</button>
        </div>
      </div> */}
    </div>
  );
};

export default Brand;
