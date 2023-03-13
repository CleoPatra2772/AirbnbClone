import Image from 'next/image';

export const Header = () => {
    return(
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 lg:">
            <div className='relative flex items-center h-10 cursor-pointer my-atuo'>
                <Image
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                />
            </div>

            <div></div>
            <div></div>
        </header>
    )
}

