import { useLazyLoadQuery, graphql } from 'react-relay';
import { dashboardQuery as DashboardQueryType } from './__generated__/dashboardQuery.graphql';
import { useState } from 'react';

const dashboardQuery = graphql`
query dashboardQuery {
 hello
}
`;

const Dashboard = () => {

  const [text, setText] = useState<string>()

  const data = useLazyLoadQuery<DashboardQueryType>(
    dashboardQuery,
    {},
  );

  console.log(data)

  return (
    <main className='min-h-screen w-full flex flex-col items-center bg-red-400'>
      <div className='py-10'>
        <p className='text-3xl'>To do list</p>
      </div>
      <div className='flex gap-3 mb-20'>
        <input className='rounded-md w-[500px] focus:outline-none p-2 border' value={text} onChange={(e) => setText(e.target.value)} />
        <button className='border-2 px-2 rounded-md bg-white border-green-600 text-green-600'>Adicionar</button>
      </div>

      <section className='flex flex-col gap-3'>
        {data.hello.map(item => (
          <div key={item.id} className='w-[500px] bg-white px-5 py-2 rounded-lg flex items-center text-xl font-semibold'>
            {item.value}
          </div>
        ))}
      </section>

    </main>
  )
}





export default Dashboard
