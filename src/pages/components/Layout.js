import Link from 'next/link'
import React from 'react'

function Layout({ children }) {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-sm'>Md</h1>
                    <h1 className='text-sm'>Masum Mollah</h1>
                </div>
                <div className='flex gap-5'>
                    <Link href="#">
                        <p className='text-sm'>About</p>
                    </Link>
                    <Link href="#">
                        <p className='text-sm'>Projects</p>
                    </Link>
                    <Link href="#">
                        <p className='text-sm'>Contacts</p>
                    </Link>
                </div>
                <Link href="#">
                    <p className='underline text-sm'>En</p>
                </Link>
            </div>
            {children}
        </div>
    )
}

export default Layout
