import HostProfileComponent from '@/components/hosts/HostProfile'
import { GetSingleUser } from '@/lib/actions/user/getAllUser';
import { IUser } from '@/lib/types';
import React from 'react'

type Params = Promise<{ slug: string }>;
const Page = async ({params}: {params: Params}) => {

  const { slug } = await params;


  const response = await GetSingleUser(slug);
  const data = response.data as IUser | undefined;

  return (
    <div>
      {data ? <HostProfileComponent userData={data} /> : <div>User not found</div>}
    </div>
  )
}

export default Page
